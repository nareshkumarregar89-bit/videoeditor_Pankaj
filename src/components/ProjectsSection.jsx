import React, { useState } from 'react';
import { CATEGORIES } from '../data/films';
import { useProjects } from '../context/ProjectsContext';
import ProjectCard from './ProjectCard';
import { Sparkles, Lock, ArrowUpRight, Plus, ShieldCheck } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const { projects, isAdmin, setDashboardOpen, setAdminModalOpen } = useProjects();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleAdminTrigger = () => {
    if (isAdmin) {
      setDashboardOpen(true);
    } else {
      setAdminModalOpen(true);
    }
  };

  return (
    <section id="works" className="py-24 border-t border-zinc-200 relative bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Portfolio Catalog
              </span>

              {isAdmin && (
                <button
                  onClick={handleAdminTrigger}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-sm hover:bg-black transition-colors"
                >
                  <Plus className="w-3 h-3 text-amber-400" />
                  Add Video
                </button>
              )}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
              Selected Works
            </h2>
          </div>

          <p className="text-zinc-600 text-sm sm:text-base max-w-md">
            Cinematic video editing and post-production work across global automotive brands, record labels, fashion houses, and narrative festivals.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/90 shadow-subtle'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8">
            <h4 className="text-base font-bold text-zinc-950 mb-1">No videos in this category yet</h4>
            <p className="text-xs text-zinc-500 mb-4">
              Use the Studio CMS to add a new project under this category.
            </p>
            <button
              onClick={handleAdminTrigger}
              className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold inline-flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              Add Project
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        )}

        {/* Unreleased / Private Reel Notice & Client CMS Quick Access */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-zinc-950">
                Studio Client Video Management
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                Client can add, edit, or delete portfolio videos anytime with their admin passkey.
              </p>
            </div>
          </div>

          <button
            onClick={handleAdminTrigger}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs sm:text-sm font-bold border border-zinc-200 transition-colors shrink-0"
          >
            {isAdmin ? 'Open CMS Dashboard' : 'Open Admin Panel'}
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </button>
        </div>

      </div>
    </section>
  );
}
