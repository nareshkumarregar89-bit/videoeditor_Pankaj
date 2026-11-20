import React from 'react';
import { EXPERIENCES } from '../data/skills';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-dark-800 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience & Milestones
          </h2>
          <p className="text-dark-400 text-sm sm:text-base">
            Over eight years of commercial post-production leadership, on-set directing, and collaborative storytelling.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto relative">
          {/* Subtle Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-dark-800 -translate-x-1/2 hidden sm:block" />

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
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-950 border-2 border-gold-400 items-center justify-center z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-dark-800 hover:border-dark-700 transition-all shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-gold-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-dark-400">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>

                      <h4 className="text-xs uppercase tracking-wider font-semibold text-dark-300 mb-4">
                        {exp.company}
                      </h4>

                      <p className="text-sm text-dark-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-dark-800/80">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-dark-300">
                            <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
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
