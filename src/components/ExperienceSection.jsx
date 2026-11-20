import React from 'react';
import { EXPERIENCES } from '../data/skills';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-zinc-200 relative bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Experience & Milestones
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Over eight years of commercial post-production leadership, cinematic video editing, and collaborative storytelling.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-zinc-200 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-500 items-center justify-center z-10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all shadow-subtle hover:shadow-card">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 mb-1">
                        {exp.role}
                      </h3>

                      <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-600 mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                            <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
