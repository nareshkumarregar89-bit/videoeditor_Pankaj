import React from 'react';
import { SKILLS } from '../data/skills';
import { Cpu, Sliders } from 'lucide-react';

export default function SkillsSection() {
  const hardwarePipeline = [
    { label: 'Primary NLE & Grade Suite', val: 'DaVinci Resolve Studio 19 + Micro Panel' },
    { label: 'Monitoring Calibration', val: 'Sony BVM-HX310 4K HDR (1000 nits) & LG C3 OLED' },
    { label: 'Storage & I/O Bandwidth', val: '128TB RAID 0 High-Speed NVMe Scratch Array (4200 MB/s)' },
    { label: 'Remote Review & Dailies', val: 'Frame.io C2C (Camera to Cloud), Louper & NDI Low-Latency' },
  ];

  return (
    <section id="toolkit" className="py-24 border-t border-zinc-200 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5 text-amber-600" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
              Software & Post Pipeline
            </h2>
          </div>

          <p className="text-zinc-600 text-sm sm:text-base max-w-md">
            Mastery across industry-standard NLEs, cinema camera sensors, color-managed workflows, and high-fidelity sound engines.
          </p>
        </div>

        {/* 3 Columns by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILLS.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col justify-between shadow-subtle"
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

        {/* Monitoring & Remote Infrastructure Bar (High-Contrast Slate/Charcoal Panel) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 text-white shadow-xl">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            Studio Hardware & Remote Collaboration Standard
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {hardwarePipeline.map((item, i) => (
              <div key={i} className="border-l-2 border-amber-500/60 pl-3">
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block mb-1">
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
    </section>
  );
}
