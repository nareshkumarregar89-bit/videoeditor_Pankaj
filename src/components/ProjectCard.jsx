import React from 'react';
import { Play, Clock, Award, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden hover:border-dark-700 hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-dark-950">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Floating Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-14 h-14 rounded-full bg-gold-500/90 text-dark-950 flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 fill-dark-950 translate-x-0.5" />
          </div>
        </div>

        {/* Category Pill (Top Left) */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white uppercase tracking-wider">
            {project.categoryLabel}
          </span>
        </div>

        {/* Duration / Format Pill (Top Right) */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
          {project.badge && (
            <span className="px-2 py-0.5 rounded-full bg-gold-500/90 text-dark-950 text-[10px] font-bold uppercase tracking-wider">
              {project.badge}
            </span>
          )}
          <span className="px-2 py-0.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-dark-300 flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-400" />
            {project.runtime}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-dark-400 mb-2">
            <span className="font-semibold text-gold-400/90 uppercase tracking-wider">
              {project.client}
            </span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-2 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div>
          <div className="pt-4 border-t border-dark-800/80 flex items-center justify-between text-xs">
            <span className="text-dark-300 font-medium truncate max-w-[200px]">
              {project.role}
            </span>
            <span className="text-gold-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              Watch Film
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
