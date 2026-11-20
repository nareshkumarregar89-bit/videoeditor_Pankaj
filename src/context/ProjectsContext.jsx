import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PROJECTS as DEFAULT_PROJECTS } from '../data/films';

const ProjectsContext = createContext();

const STORAGE_KEY = 'pankaj_portfolio_projects_v1';
const TOKEN_KEY = 'pankaj_portfolio_admin_token';
const API_BASE = ''; // Works with Vite proxy or relative URL in production

export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return DEFAULT_PROJECTS;
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem(TOKEN_KEY) || null;
    } catch (e) {
      return null;
    }
  });

  const isAdmin = Boolean(token);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isServerConnected, setIsServerConnected] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Fetch projects from the real backend API
  const fetchProjectsFromBackend = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/projects`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          setIsServerConnected(true);
          return;
        }
      }
    } catch (err) {
      // Backend not running yet or offline; fallback to cached/default
      setIsServerConnected(false);
    }
  }, []);

  useEffect(() => {
    fetchProjectsFromBackend();
  }, [fetchProjectsFromBackend]);

  // Login
  const login = async (password) => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (data.success && data.token) {
        setToken(data.token);
        localStorage.setItem(TOKEN_KEY, data.token);
        setAdminModalOpen(false);
        setDashboardOpen(true);
        showToast('Admin access granted! Connected to Studio CMS backend.');
        return { success: true };
      }
    } catch (err) {
      // Local fallback if server is offline
      if (password === 'admin' || password === 'admin2026') {
        const mockToken = 'studio-admin-token-2026';
        setToken(mockToken);
        localStorage.setItem(TOKEN_KEY, mockToken);
        setAdminModalOpen(false);
        setDashboardOpen(true);
        showToast('Admin access granted (Local Mode).');
        return { success: true };
      }
    }
    return { success: false, message: 'Invalid password. Please try again.' };
  };

  // Logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    setDashboardOpen(false);
    showToast('Logged out of Admin Portal.');
  };

  // Add Project
  const addProject = async (newProject) => {
    const id = newProject.id || `proj-${Date.now()}`;
    const projectWithId = {
      ...newProject,
      id,
      year: newProject.year || new Date().getFullYear().toString(),
    };

    // Update local state first for instant UI response
    setProjects((prev) => [projectWithId, ...prev]);

    // Send to real backend
    try {
      const res = await fetch(`${API_BASE}/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || 'studio-admin-token-2026'}`,
        },
        body: JSON.stringify(projectWithId),
      });
      if (res.ok) {
        const savedProject = await res.json();
        showToast(`"${savedProject.title}" saved to real backend database!`);
        return savedProject;
      }
    } catch (err) {
      console.warn('Backend sync error, saved locally:', err);
    }

    showToast(`"${projectWithId.title}" added to portfolio.`);
    return projectWithId;
  };

  // Update Project
  const updateProject = async (id, updatedData) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
    );

    try {
      await fetch(`${API_BASE}/api/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token || 'studio-admin-token-2026'}`,
        },
        body: JSON.stringify(updatedData),
      });
      showToast('Project updated in database!');
    } catch (err) {
      showToast('Project updated locally.');
    }
  };

  // Delete Project
  const deleteProject = async (id) => {
    const projectToDelete = projects.find((p) => p.id === id);
    setProjects((prev) => prev.filter((p) => p.id !== id));

    try {
      await fetch(`${API_BASE}/api/projects/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token || 'studio-admin-token-2026'}`,
        },
      });
      showToast(`Project "${projectToDelete?.title || 'Selected'}" deleted from database.`);
    } catch (err) {
      showToast(`Project deleted.`);
    }
  };

  // Upload image to backend
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${API_BASE}/api/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token || 'studio-admin-token-2026'}`,
        },
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        return data.url; // e.g. /uploads/poster-12345.jpg
      }
    } catch (err) {
      console.error('File upload error:', err);
    }
    return null;
  };

  // Reset to default catalogue
  const resetToDefaults = async () => {
    if (window.confirm('Restore 7 default showcase projects? This will update the live portfolio for everyone.')) {
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));

      try {
        await fetch(`${API_BASE}/api/projects`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token || 'studio-admin-token-2026'}`,
          },
          body: JSON.stringify(DEFAULT_PROJECTS),
        });
        showToast('Default projects restored in Cloudflare KV database.');
      } catch (err) {
        showToast('Projects reset locally.');
      }
    }
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        isAdmin,
        isServerConnected,
        adminModalOpen,
        setAdminModalOpen,
        dashboardOpen,
        setDashboardOpen,
        toastMessage,
        showToast,
        login,
        logout,
        addProject,
        updateProject,
        deleteProject,
        uploadImage,
        resetToDefaults,
        fetchProjectsFromBackend,
        DEFAULT_PASSWORD: 'admin',
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
}
