import React from 'react';
import { EXPERIENCES, SKILLS, TESTIMONIALS } from '../data/skills';
import { Briefcase, Calendar, Globe, CheckCircle, Cpu, Sliders, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperiencePage() {
  const hardwarePipeline = [
    { label: 'Primary NLE & Grade Suite', val: 'DaVinci Resolve Studio 19 + Micro Panel' },
    { label: 'Monitoring Calibration', val: 'Sony BVM-HX310 4K HDR (1000 nits) & LG C3 OLED' },
    { label: 'Storage & I/O Bandwidth', val: '128TB RAID 0 High-Speed NVMe Scratch Array (4200 MB/s)' },
    { label: 'Remote Review & Dailies', val: 'Frame.io C2C (Camera to Cloud), Louper & NDI Low-Latency' },
  ];

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            Career & Technical Toolkit
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-4">
            Experience & Arsenal
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Eight years of post-production discipline, commercial cutting room leadership, and hardware engineering.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="max-w-4xl mx-auto relative mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-2">
              Career Timeline
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Key agency, studio, and commercial editorial roles.
            </p>
          </div>

          <div className="absolute left-4 sm:left-1/2 top-16 bottom-4 w-px bg-zinc-200 -translate-x-1/2 hidden sm:block" />

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
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-500 items-center justify-center z-10 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  </div>

                  <div className="w-full sm:w-[calc(50%-2rem)] text-left">
                    <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all shadow-subtle hover:shadow-card">
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

                      <div className="space-y-1.5 pt-3 border-t border-zinc-200/80">
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

        {/* Software & Technical Arsenal Grid */}
        <div className="mb-24 text-left">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Software Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950">
              NLE Suites & Color Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SKILLS.map((group, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-4 flex items-center gap-2 border-b border-zinc-200 pb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {group.category}
                  </h3>

                  <div className="space-y-4">
                    {group.items.map((tool, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-zinc-800 group-hover/item:text-amber-700 transition-colors">
                            {tool.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-amber-800 font-mono font-bold shadow-subtle">
                            {tool.level}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600">
                          {tool.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hardware Monitoring Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white shadow-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              Studio Hardware & Monitoring Infrastructure
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {hardwarePipeline.map((item, i) => (
                <div key={i} className="border-l-2 border-amber-500/60 pl-3">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1 font-medium">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Endorsements */}
        <div className="mb-16 text-left">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-2">
              Client Endorsements
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Verified feedback from global commercial agencies, producers, and brand heads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-zinc-800 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200">
                  <p className="text-zinc-950 font-bold text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-zinc-600">
                    {t.role} • <span className="text-zinc-900 font-bold">{t.company}</span>
                  </p>
                  <div className="mt-2.5 inline-block px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] text-amber-800 font-mono font-bold shadow-subtle">
                    Ref: {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
