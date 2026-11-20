import React from 'react';
import { Play, Clock, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-card-hover transition-all duration-300 flex flex-col shadow-subtle"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Gradient dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Floating Play Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xl">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Category Pill (Top Left) */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/60 text-[11px] font-bold text-zinc-900 uppercase tracking-wider shadow-sm">
            {project.categoryLabel}
          </span>
        </div>

        {/* Duration / Format Pill (Top Right) */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
          {project.badge && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {project.badge}
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            {project.runtime}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
            <span className="font-bold text-amber-700 uppercase tracking-wider">
              {project.client}
            </span>
            <span className="font-medium text-zinc-400">{project.year}</span>
          </div>

          <h3 className="text-xl font-bold text-zinc-950 group-hover:text-amber-600 transition-colors mb-2 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div>
          <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
            <span className="text-zinc-700 font-semibold truncate max-w-[200px]">
              {project.role}
            </span>
            <span className="text-zinc-950 font-bold group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all inline-flex items-center gap-1">
              Watch Film
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
