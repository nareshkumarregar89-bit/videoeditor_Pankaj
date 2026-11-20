import React, { useState } from 'react';
import { CATEGORIES } from '../data/films';
import { useProjects } from '../context/ProjectsContext';
import ProjectCard from '../components/ProjectCard';
import { Sparkles, Lock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorksPage({ onSelectProject }) {
  const { projects } = useProjects();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-zinc-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Selected Works Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-4">
            Commercials, Films & Visuals
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            A comprehensive catalog of cinematic editing projects, high-impact commercial spots, music videos, narrative shorts, and documentary cinema.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
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
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200 p-8 max-w-md mx-auto">
            <h4 className="text-base font-bold text-zinc-950 mb-1">No films in this category</h4>
            <p className="text-xs text-zinc-500 mb-4">
              Select another category above to view completed projects.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold"
            >
              View All Works
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 items-stretch">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        )}

        {/* Confidential / Unreleased Private Reel Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1">
                Looking for unreleased brand campaigns or NDA master cuts?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                Direct client review links, festival screeners, and private commercial rough cuts are available upon confidential request.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md transition-all shrink-0"
          >
            Request Private Reels
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </div>
  );
}
