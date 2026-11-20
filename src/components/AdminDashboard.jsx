import React, { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';
import {
  X, Plus, Trash2, Edit3, Eye, Search, RotateCcw, LogOut,
  Upload, Film, Check, AlertTriangle, Image as ImageIcon, Sparkles
} from 'lucide-react';

const PRESET_IMAGES = [
  { label: 'Nocturn (Automotive Night)', value: '/assets/images/nocturn_speed_of_shadows.jpg' },
  { label: 'After Hours (Music Video)', value: '/assets/images/after_hours_2026.jpg' },
  { label: 'The Journey (Mountain Doc)', value: '/assets/images/the_journey.jpg' },
  { label: 'Aura (Haute Couture Fashion)', value: '/assets/images/aura_haute_couture.jpg' },
  { label: 'Echoes of Tokyo (Neon Noir)', value: '/assets/images/echoes_of_tokyo.jpg' },
  { label: 'Solitude (Icelandic Aerial)', value: '/assets/images/solitude_icelandic.jpg' },
  { label: 'Chronos (High-Speed Speedway)', value: '/assets/images/chronos_speedway.jpg' },
  { label: 'Cutting Suite Studio', value: '/assets/images/cutting_room_suite.jpg' },
  { label: 'Director Portrait', value: '/assets/images/pankaj_regar_portrait.jpg' },
];

export default function AdminDashboard({ onPreviewProject }) {
  const {
    projects,
    dashboardOpen,
    setDashboardOpen,
    logout,
    addProject,
    updateProject,
    deleteProject,
    uploadImage,
    resetToDefaults,
    isServerConnected
  } = useProjects();

  const [searchQuery, setSearchQuery] = useState('');
  const [editingProject, setEditingProject] = useState(null); // null when not open, or project object
  const [isNew, setIsNew] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Form State
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
    badge: "Master Cut",
    summary: '',
    sound: 'Dolby Atmos 5.1 Surround',
    tags: 'Commercial, High Pacing',
  });

  if (!dashboardOpen) return null;

  // Filter projects by search query
  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        setFormData((prev) => ({
          ...prev,
          thumbnail: serverUrl,
        }));
        setUploadingImage(false);
        return;
      }
    } catch (err) {
      console.warn('Server upload fallback:', err);
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

  const handleSaveProject = (e) => {
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
      addProject(projectPayload);
    } else {
      updateProject(editingProject.id, projectPayload);
    }

    setEditingProject(null);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to permanently delete "${title}" from the portfolio?`)) {
      deleteProject(id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={() => setDashboardOpen(false)} />

      <div
        className="relative z-10 w-full max-w-6xl max-h-[92vh] overflow-hidden bg-white border border-zinc-200 rounded-2xl shadow-2xl flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dashboard Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 border-b border-zinc-200 bg-zinc-50 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold shadow-sm">
              <Film className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-zinc-950 tracking-tight">
                  Studio Video CMS
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Admin Active
                </span>
                {isServerConnected ? (
                  <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                    Real Backend Live
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-700 text-[10px] font-medium">
                    Local Sync Active
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 font-medium">
                Client Dashboard — Add, update, and manage public portfolio videos
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={openAddModal}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              Add New Video
            </button>

            <button
              onClick={resetToDefaults}
              className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 text-xs font-semibold transition-colors flex items-center gap-1"
              title="Reset to 7 original default projects"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={logout}
              className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-200 text-zinc-600 hover:text-red-700 text-xs font-semibold transition-colors flex items-center gap-1"
              title="Log out of CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>

            <button
              onClick={() => setDashboardOpen(false)}
              className="p-2 rounded-xl bg-zinc-200 hover:bg-zinc-300 text-zinc-700 hover:text-zinc-950 transition-colors"
              title="Close and view live site"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar & Project Count */}
        <div className="p-4 sm:px-6 border-b border-zinc-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search videos by title, client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
            />
          </div>

          <div className="text-xs font-semibold text-zinc-500">
            Showing <strong className="text-zinc-900">{filtered.length}</strong> of {projects.length} portfolio films
          </div>
        </div>

        {/* Projects Table / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-zinc-50/60">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8">
              <Film className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-zinc-900 mb-1">No videos found</h4>
              <p className="text-xs text-zinc-500 mb-4">
                No matching projects found. Try searching a different keyword or add a new video.
              </p>
              <button
                onClick={openAddModal}
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold inline-flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 text-amber-400" />
                Add Your First Video
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-subtle hover:border-zinc-300 hover:shadow-card transition-all"
                >
                  {/* Left: Thumbnail & Meta */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-zinc-200">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/70 text-[9px] font-mono text-white">
                        {project.runtime}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                          {project.categoryLabel || project.category}
                        </span>
                        {project.badge && (
                          <span className="px-1.5 py-0.5 rounded bg-zinc-100 text-[10px] font-bold text-zinc-700">
                            {project.badge}
                          </span>
                        )}
                        <span className="text-[11px] text-zinc-400">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs text-zinc-500">
                        {project.client} • <span className="text-zinc-700 font-medium">{project.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => onPreviewProject(project)}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      title="Preview Screening"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-600" />
                      Preview
                    </button>

                    <button
                      onClick={() => openEditModal(project)}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                      title="Edit project details"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(project.id, project.title)}
                      className="p-2 rounded-lg bg-white border border-zinc-200 hover:bg-red-50 hover:border-red-200 text-zinc-500 hover:text-red-700 transition-colors"
                      title="Delete video"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-zinc-200 bg-white text-xs text-zinc-500 flex items-center justify-between">
          <span>All updates are automatically saved to your browser session.</span>
          <button
            onClick={() => setDashboardOpen(false)}
            className="text-zinc-900 font-bold hover:underline"
          >
            Done / Close Dashboard →
          </button>
        </div>
      </div>

      {/* Add / Edit Project Sub-Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
          <div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
                  {isNew ? <Plus className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-zinc-950">
                    {isNew ? 'Add New Portfolio Film' : 'Edit Project Details'}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Fill in the project details below to update the public showcase.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditingProject(null)}
                className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
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
                    Client / Brand Name
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

              {/* Thumbnail Image Picker (File Upload + Presets + Custom URL) */}
              <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                <label className="block font-bold uppercase tracking-wider text-zinc-800 mb-2">
                  Thumbnail Image *
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
                  {/* Thumbnail Preview */}
                  <div className="w-28 h-18 rounded-lg overflow-hidden bg-black shrink-0 border border-zinc-200 shadow-sm">
                    <img
                      src={formData.thumbnail}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 w-full space-y-2">
                    {/* Direct File Upload */}
                    <label className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-800 font-bold text-xs shadow-subtle w-full sm:w-auto">
                      <Upload className="w-3.5 h-3.5 text-amber-600" />
                      <span>Upload Image from Device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="hidden"
                      />
                    </label>

                    {/* Choose from existing cinema stills */}
                    <div>
                      <span className="text-[10px] text-zinc-500 font-medium block mb-1">
                        Or select from existing cinema stills:
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
                    placeholder="https://example.com/image.jpg"
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-900 text-xs"
                  />
                </div>
              </div>

              {/* Summary / Synopsis */}
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


              {/* Tags */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="Automotive, High Pacing, HDR Grade"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs"
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
                  {isNew ? 'Add Film to Portfolio' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
