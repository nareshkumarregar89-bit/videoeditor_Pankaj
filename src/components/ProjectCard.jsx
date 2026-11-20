import React from 'react';
import { Play, Clock, ArrowUpRight, Film, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  if (!project) return null;

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer bg-white border border-zinc-200/90 rounded-2xl overflow-hidden hover:border-zinc-400/90 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full shadow-subtle hover:-translate-y-1.5"
    >
      {/* Cinematic Thumbnail Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 select-none">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent pointer-events-none" />

        {/* Floating Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Top-Left: Category Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200/80 text-[10px] font-bold text-zinc-900 uppercase tracking-widest shadow-sm">
            {project.categoryLabel || project.category}
          </span>
        </div>

        {/* Top-Right: Editorial Badge */}
        {project.badge && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="px-2.5 py-1 rounded-full bg-amber-500 text-zinc-950 text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-zinc-950" />
              {project.badge}
            </span>
          </div>
        )}

        {/* Bottom-Left: Aspect Ratio Stamp */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
            {project.aspect || '2.39:1'}
          </span>
        </div>

        {/* Bottom-Right: Duration Stamp */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-medium text-white flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" />
            {project.runtime}
          </span>
        </div>
      </div>

      {/* Card Editorial Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Client & Release Year Row */}
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
            <span className="font-bold text-amber-700 uppercase tracking-wider text-[11px]">
              {project.client}
            </span>
            <span className="font-mono text-zinc-400 text-xs font-medium">
              {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-black text-zinc-950 group-hover:text-amber-600 transition-colors mb-2 leading-tight line-clamp-1">
            {project.title}
          </h3>

          {/* Project Summary */}
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
            {project.summary}
          </p>

          {/* Tags Chips */}
          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/70 text-[10px] font-medium text-zinc-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Meta: Role & Action */}
        <div className="pt-3.5 border-t border-zinc-100 flex items-center justify-between text-xs mt-auto">
          <span className="text-zinc-600 font-medium text-[11px] truncate max-w-[190px] flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span className="truncate">{project.role}</span>
          </span>

          <span className="text-zinc-950 font-bold group-hover:text-amber-600 group-hover:translate-x-1 transition-all inline-flex items-center gap-1 shrink-0 text-xs">
            Watch Film
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
          </span>
        </div>
      </div>
    </div>
  );
}
