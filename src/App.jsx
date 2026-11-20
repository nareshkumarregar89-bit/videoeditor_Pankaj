import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VideoModal from './components/VideoModal';

// Dedicated Pages
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

import { ProjectsProvider, useProjects } from './context/ProjectsContext';
import { CheckCircle2 } from 'lucide-react';

function PortfolioLayout() {
  const { projects, toastMessage } = useProjects();
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenShowreel = () => {
    if (projects.length > 0) {
      setActiveProject(projects[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-amber-400 selection:text-zinc-950">
      <ScrollToTop />
      
      {/* Public Sticky Navigation (Clean: No admin buttons) */}
      <Navbar />

      {/* Multi-Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenShowreel={handleOpenShowreel}
                onSelectProject={setActiveProject}
              />
            }
          />
          <Route
            path="/works"
            element={<WorksPage onSelectProject={setActiveProject} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Secret Client Admin Route (Accessible ONLY via /admin URL) */}
          <Route
            path="/admin"
            element={<AdminPage onPreviewProject={setActiveProject} />}
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Public Footer (Clean: No admin links) */}
      <Footer />

      {/* Global Interactive Cinema Video Screening Modal */}
      {activeProject && (
        <VideoModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-70 bg-zinc-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold border border-zinc-700 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ProjectsProvider>
        <PortfolioLayout />
      </ProjectsProvider>
    </BrowserRouter>
  );
}
