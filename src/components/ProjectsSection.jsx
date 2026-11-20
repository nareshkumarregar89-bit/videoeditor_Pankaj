import React, { useState } from 'react';
import { CATEGORIES, PROJECTS } from '../data/films';
import ProjectCard from './ProjectCard';
import { Sparkles, Lock, ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="py-24 border-t border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Portfolio Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          <p className="text-dark-400 text-sm sm:text-base max-w-md">
            Directing and post-production work across global automotive brands, record labels, fashion houses, and narrative festivals.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-500 text-dark-950 font-bold shadow-md'
                    : 'bg-dark-900 text-dark-300 hover:text-white hover:bg-dark-850 border border-dark-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-dark-950/20 text-dark-950' : 'bg-dark-800 text-dark-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Unreleased / Private Reel Notice */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-900 to-dark-850 border border-dark-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Looking for unreleased NDA commercial cuts?
              </h4>
              <p className="text-xs sm:text-sm text-dark-400">
                Additional private director reels and client password-protected cuts are available upon request.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-white text-xs sm:text-sm font-semibold border border-dark-700 transition-colors shrink-0"
          >
            Request Private Reels
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
