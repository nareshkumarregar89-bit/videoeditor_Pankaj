import React, { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';
import {
  Lock, Eye, EyeOff, ShieldAlert, Film, Plus, Trash2, Edit3,
  Search, RotateCcw, LogOut, Upload, ArrowLeft, ArrowUpRight, Check, X,
  Youtube, Sparkles, CheckCircle2, Inbox, Mail, MessageSquare, Clock
} from 'lucide-react';

function extractYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}
import { Link } from 'react-router-dom';

const PRESET_IMAGES = [
  { label: 'Nocturn (Automotive Night)', value: '/assets/images/nocturn_speed_of_shadows.jpg' },
  { label: 'After Hours (Music Video)', value: '/assets/images/after_hours_2026.jpg' },
  { label: 'The Journey (Mountain Doc)', value: '/assets/images/the_journey.jpg' },
  { label: 'Aura (Haute Couture Fashion)', value: '/assets/images/aura_haute_couture.jpg' },
  { label: 'Echoes of Tokyo (Neon Noir)', value: '/assets/images/echoes_of_tokyo.jpg' },
  { label: 'Solitude (Icelandic Aerial)', value: '/assets/images/solitude_icelandic.jpg' },
  { label: 'Chronos (High-Speed Speedway)', value: '/assets/images/chronos_speedway.jpg' },
  { label: 'Director Portrait', value: '/assets/images/pankaj_regar_portrait.jpg' },
];

export default function AdminPage({ onPreviewProject }) {
  const {
    projects,
    inquiries = [],
    unreadInquiriesCount = 0,
    toggleInquiryRead,
    deleteInquiry,
    isAdmin,
    login,
    logout,
    addProject,
    updateProject,
    deleteProject,
    uploadImage,
    resetToDefaults,
    isServerConnected
  } = useProjects();

  // Active Tab: 'videos' | 'inquiries'
  const [activeTab, setActiveTab] = useState('videos');
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('all'); // 'all' | 'unread' | 'read'

  // Login form state
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard state
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProject, setEditingProject] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Add / Edit form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'commercial',
    categoryLabel: 'Commercial / Brand',
    client: '',
    year: new Date().getFullYear().toString(),
    role: 'Cinematic Video Editor & Colorist',
    runtime: '03:00',
    aspect: '2.39:1 Anamorphic',
    thumbnail: PRESET_IMAGES[0].value,
    videoUrl: '',
    badge: "Master Cut",
    summary: '',
    sound: 'Dolby Atmos 5.1 Surround',
    tags: 'Commercial, High Pacing',
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    const res = await login(password);
    if (!res.success) {
      setLoginError(res.message);
    } else {
      setPassword('');
    }
  };

  // Filter projects by search
  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter inquiries by search & status
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.email?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.projectType?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.message?.toLowerCase().includes(inquirySearch.toLowerCase());

    if (!matchesSearch) return false;
    if (inquiryFilter === 'unread') return inq.status === 'unread';
    if (inquiryFilter === 'read') return inq.status === 'read';
    return true;
  });

  const openAddModal = () => {
    setIsNew(true);
    setFormData({
      title: '',
      category: 'commercial',
      categoryLabel: 'Commercial / Brand',
      client: '',
      year: new Date().getFullYear().toString(),
      role: 'Cinematic Video Editor & Colorist',
      runtime: '03:00',
      aspect: '2.39:1 Anamorphic',
      thumbnail: PRESET_IMAGES[0].value,
      videoUrl: '',
      badge: "Master Cut",
      summary: '',
      sound: 'Dolby Atmos 5.1 Surround',
      tags: 'Commercial, High Pacing',
    });
    setEditingProject({});
  };

  const openEditModal = (project) => {
    setIsNew(false);
    setFormData({
      ...project,
      videoUrl: project.videoUrl || '',
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : project.tags || '',
    });
    setEditingProject(project);
  };

  const handleImageFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const serverUrl = await uploadImage(file);
      if (serverUrl) {
        setFormData((prev) => ({ ...prev, thumbnail: serverUrl }));
        setUploadingImage(false);
        return;
      }
    } catch (err) {
      console.warn('Upload fallback to Base64');
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        thumbnail: event.target.result,
      }));
      setUploadingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const tagsArray = typeof formData.tags === 'string'
      ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : formData.tags;

    const projectPayload = {
      ...formData,
      tags: tagsArray,
    };

    if (isNew) {
      await addProject(projectPayload);
    } else {
      await updateProject(editingProject.id, projectPayload);
    }

    setEditingProject(null);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to permanently delete "${title}" from the live portfolio?`)) {
      deleteProject(id);
    }
  };

  // If NOT logged in, show Password Protected Login View
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4 pt-28 pb-16">
        <div className="w-full max-w-md bg-white border border-zinc-200 rounded-3xl shadow-2xl p-8 text-left">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shadow-subtle">
              <Lock className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h1 className="text-xl font-black text-zinc-950 tracking-tight">
                Studio Portal
              </h1>
              <p className="text-xs text-zinc-500 font-medium">
                Private Workspace Access
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
            This workspace is protected. Please enter your security passkey to access the dashboard.
          </p>

          {loginError && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                Security Passkey
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLoginError('');
                  }}
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:shadow-lg"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-950 font-semibold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Portfolio</span>
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // If LOGGED IN, show Full Management Dashboard Page
  return (
    <div className="pt-24 pb-20 bg-zinc-50/70 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-subtle mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold shadow-md">
              <Film className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-black text-zinc-950 tracking-tight">
                  Studio Video CMS
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Admin Logged In
                </span>
                {isServerConnected ? (
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                    Real DB Live
                  </span>
                ) : (
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-[10px] font-medium">
                    Local Sync
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 font-medium">
                Client Dashboard — Add new films, update client metadata, and remove portfolio videos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={openAddModal}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              Add New Video
            </button>

            <button
              onClick={resetToDefaults}
              className="px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
              title="Reset to 7 original default projects"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <Link
              to="/works"
              className="px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>View Public Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={logout}
              className="px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-200 text-red-600 text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'videos'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200 shadow-subtle'
              }`}
            >
              <Film className="w-4 h-4 text-amber-400" />
              <span>Manage Videos ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 relative ${
                activeTab === 'inquiries'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200 shadow-subtle'
              }`}
            >
              <Inbox className="w-4 h-4 text-amber-500" />
              <span>Client Inquiries ({inquiries.length})</span>
              {unreadInquiriesCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-black animate-pulse">
                  {unreadInquiriesCount} New
                </span>
              )}
            </button>
          </div>

          {activeTab === 'videos' ? (
            <button
              onClick={openAddModal}
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              Add New Video
            </button>
          ) : (
            <div className="text-xs font-semibold text-zinc-500">
              <span className="text-zinc-950 font-bold">{unreadInquiriesCount}</span> unread client bookings
            </div>
          )}
        </div>

        {/* TAB 1: MANAGE VIDEOS */}
        {activeTab === 'videos' ? (
          <div>
            {/* Search Bar & Stats */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search videos by title, client, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                />
              </div>

              <div className="text-xs font-semibold text-zinc-500">
                Showing <strong className="text-zinc-950">{filtered.length}</strong> of {projects.length} portfolio films
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-3">
              {filtered.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 p-8">
                  <Film className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-zinc-900 mb-1">No videos found</h4>
                  <p className="text-xs text-zinc-500 mb-4">
                    No matching projects found. Try another search or add a new video.
                  </p>
                  <button
                    onClick={openAddModal}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4 text-amber-400" />
                    Add Video Now
                  </button>
                </div>
              ) : (
                filtered.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-subtle hover:border-zinc-300 hover:shadow-card transition-all"
                  >
                    {/* Thumbnail & Metadata */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-28 h-18 rounded-xl overflow-hidden bg-zinc-950 shrink-0 border border-zinc-200 shadow-sm">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.2 rounded bg-black/75 text-[9px] font-mono text-white">
                          {project.runtime}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                            {project.categoryLabel || project.category}
                          </span>
                          {project.badge && (
                            <span className="px-2 py-0.5 rounded bg-zinc-100 text-[10px] font-bold text-zinc-700">
                              {project.badge}
                            </span>
                          )}
                          <span className="text-xs text-zinc-400 font-medium">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-zinc-950 leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-xs text-zinc-500 mt-0.5">
                          {project.client} • <span className="text-zinc-700 font-medium">{project.role}</span>
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => onPreviewProject(project)}
                        className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span>Preview</span>
                      </button>

                      <button
                        onClick={() => openEditModal(project)}
                        className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(project.id, project.title)}
                        className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-200 text-zinc-500 hover:text-red-700 transition-colors"
                        title="Delete Video"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          /* TAB 2: CLIENT INQUIRIES INBOX */
          <div>
            {/* Inquiries Filter Bar */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search inquiries by client name, email, project..."
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setInquiryFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    inquiryFilter === 'all'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  All ({inquiries.length})
                </button>
                <button
                  onClick={() => setInquiryFilter('unread')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    inquiryFilter === 'unread'
                      ? 'bg-amber-500 text-zinc-950'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  Unread ({unreadInquiriesCount})
                </button>
                <button
                  onClick={() => setInquiryFilter('read')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    inquiryFilter === 'read'
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  Read ({inquiries.length - unreadInquiriesCount})
                </button>
              </div>
            </div>

            {/* Inquiries Cards List */}
            <div className="space-y-4">
              {filteredInquiries.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-zinc-200 p-8 shadow-subtle">
                  <Inbox className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-zinc-900 mb-1">No inquiries found</h4>
                  <p className="text-xs text-zinc-500 max-w-md mx-auto">
                    When prospective clients fill out the booking form on the Contact page, their project parameters and messages will arrive here in real-time.
                  </p>
                </div>
              ) : (
                filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className={`bg-white border rounded-3xl p-6 sm:p-7 transition-all shadow-subtle ${
                      inq.status === 'unread'
                        ? 'border-amber-400 bg-amber-50/20 shadow-md ring-1 ring-amber-400/40'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-100">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <h3 className="text-lg font-black text-zinc-950">
                            {inq.name}
                          </h3>
                          {inq.status === 'unread' ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider animate-pulse">
                              ● New / Unread
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold">
                              ✓ Read
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                          <a
                            href={`mailto:${inq.email}`}
                            className="font-medium text-amber-700 hover:underline flex items-center gap-1 font-mono"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            {inq.email}
                          </a>
                          <span>•</span>
                          <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
                            <Clock className="w-3 h-3" />
                            {new Date(inq.createdAt).toLocaleString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Project Type & Budget Badges */}
                      <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                        <span className="px-3 py-1 rounded-xl bg-zinc-100 border border-zinc-200/80 text-xs font-bold text-zinc-800">
                          {inq.projectType}
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 font-mono">
                          {inq.budget}
                        </span>
                      </div>
                    </div>

                    {/* Message Body */}
                    <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/70 mb-5 text-left">
                      <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed whitespace-pre-wrap">
                        "{inq.message}"
                      </p>
                    </div>

                    {/* Actions Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.projectType)} Inquiry — Pankaj Regar&body=Hi ${encodeURIComponent(inq.name)},\n\nThank you for reaching out regarding your ${encodeURIComponent(inq.projectType)} project.\n\nBest regards,\nPankaj Regar\nCinematic Video Editor`}
                          className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Mail className="w-3.5 h-3.5 text-amber-400" />
                          <span>Reply via Email</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => toggleInquiryRead(inq.id)}
                          className="px-3.5 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold transition-colors"
                        >
                          {inq.status === 'unread' ? 'Mark as Read' : 'Mark as Unread'}
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          if (window.confirm(`Delete inquiry from ${inq.name}?`)) {
                            deleteInquiry(inq.id);
                          }
                        }}
                        className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-200 text-zinc-500 hover:text-red-700 transition-colors"
                        title="Delete Inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

      </div>

      {/* Add / Edit Sub-Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
          <div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                  {isNew ? <Plus className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-black text-zinc-950">
                    {isNew ? 'Add New Portfolio Film' : 'Edit Project Details'}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Updates will immediately reflect in the public works gallery.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditingProject(null)}
                className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Film / Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nocturn: Speed of Shadows"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:bg-white focus:border-zinc-950"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => {
                      const cat = e.target.value;
                      let label = 'Commercial / Brand';
                      if (cat === 'music-video') label = 'Music Video';
                      if (cat === 'narrative') label = 'Narrative & Short';
                      if (cat === 'documentary') label = 'Documentary';
                      setFormData({ ...formData, category: cat, categoryLabel: label });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:bg-white focus:border-zinc-950"
                  >
                    <option value="commercial">Commercial</option>
                    <option value="music-video">Music Video</option>
                    <option value="narrative">Narrative & Short</option>
                    <option value="documentary">Documentary</option>
                  </select>
                </div>
              </div>

              {/* Client & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Client / Record Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bavaria Motorwerks"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:bg-white focus:border-zinc-950"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cinematic Video Editor & Colorist"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:bg-white focus:border-zinc-950"
                  />
                </div>
              </div>

              {/* Year, Runtime, Aspect */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Year
                  </label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Runtime
                  </label>
                  <input
                    type="text"
                    placeholder="02:48"
                    value={formData.runtime}
                    onChange={(e) => setFormData({ ...formData, runtime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Aspect Ratio
                  </label>
                  <select
                    value={formData.aspect}
                    onChange={(e) => setFormData({ ...formData, aspect: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs"
                  >
                    <option value="2.39:1 Anamorphic">2.39:1 Anamorphic</option>
                    <option value="16:9 DCI">16:9 DCI</option>
                    <option value="2.00:1 Univisium">2.00:1 Univisium</option>
                    <option value="4:3 Academy">4:3 Academy</option>
                  </select>
                </div>
              </div>

              {/* YouTube Video Link Section */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-bold uppercase tracking-wider text-zinc-800 text-xs flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-600" />
                    <span>YouTube Video Link (Unlisted or Public)</span>
                  </label>
                  {extractYouTubeId(formData.videoUrl) && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Valid Video Link
                    </span>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. https://www.youtube.com/watch?v=... or https://youtu.be/..."
                    value={formData.videoUrl || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      const ytId = extractYouTubeId(val);
                      if (ytId && (!formData.thumbnail || formData.thumbnail.startsWith('/assets/images/nocturn') || formData.thumbnail.includes('placeholder'))) {
                        setFormData({
                          ...formData,
                          videoUrl: val,
                          thumbnail: `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
                        });
                      } else {
                        setFormData({ ...formData, videoUrl: val });
                      }
                    }}
                    className="w-full pl-3.5 pr-28 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-xs focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                  />

                  {extractYouTubeId(formData.videoUrl) && (
                    <button
                      type="button"
                      onClick={() => {
                        const ytId = extractYouTubeId(formData.videoUrl);
                        if (ytId) {
                          setFormData({
                            ...formData,
                            thumbnail: `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
                          });
                        }
                      }}
                      className="absolute right-1.5 top-1.5 px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-[10px] font-bold border border-red-200 transition-colors flex items-center gap-1"
                      title="Fetch high-resolution video thumbnail from YouTube"
                    >
                      <Sparkles className="w-3 h-3 text-red-600" />
                      Auto Thumbnail
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  💡 <span className="font-semibold text-zinc-700">Client Tip:</span> Video ko YouTube par <span className="font-semibold text-zinc-800">"Unlisted"</span> (hidden) ya <span className="font-semibold text-zinc-800">"Public"</span> upload karein aur uska link yahan paste karein. Website par video clean cinematic format me bina kisi watermark ke live play hoga.
                </p>

                {/* Live YouTube Preview inside Admin Modal */}
                {extractYouTubeId(formData.videoUrl) && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-zinc-300 bg-black aspect-video max-h-48 relative shadow-sm">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(formData.videoUrl)}?rel=0`}
                      title="YouTube Preview"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Thumbnail Image Picker */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <label className="block font-bold uppercase tracking-wider text-zinc-800 mb-2">
                  Thumbnail Image *
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
                  <div className="w-28 h-18 rounded-xl overflow-hidden bg-zinc-950 shrink-0 border border-zinc-200 shadow-sm">
                    <img
                      src={formData.thumbnail}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    <label className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-800 font-bold text-xs shadow-subtle w-full sm:w-auto">
                      <Upload className="w-3.5 h-3.5 text-amber-600" />
                      <span>{uploadingImage ? 'Uploading...' : 'Upload Image from Device'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingImage}
                        onChange={handleImageFileUpload}
                        className="hidden"
                      />
                    </label>

                    <div>
                      <span className="text-[10px] text-zinc-500 font-medium block mb-1">
                        Or select from presets:
                      </span>
                      <select
                        value={formData.thumbnail}
                        onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-800 text-xs"
                      >
                        {PRESET_IMAGES.map((img, i) => (
                          <option key={i} value={img.value}>
                            {img.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-zinc-500 block mb-1">Or paste custom image URL:</span>
                  <input
                    type="text"
                    placeholder="https://example.com/poster.jpg"
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-900 text-xs"
                  />
                </div>
              </div>

              {/* Synopsis */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Synopsis / Project Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Short description of the film cut, pacing, and visual style..."
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs focus:bg-white focus:border-zinc-950 resize-y"
                />
              </div>


              {/* Submit / Cancel Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-200">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs shadow-md"
                >
                  {isNew ? 'Add Film to Live Portfolio' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
