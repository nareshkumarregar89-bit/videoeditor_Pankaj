import React from 'react';
import { SKILLS } from '../data/skills';
import { Cpu, Check, Layers, Sliders } from 'lucide-react';

export default function SkillsSection() {
  const hardwarePipeline = [
    { label: 'Primary NLE & Grade Suite', val: 'DaVinci Resolve Studio 19 + Micro Panel' },
    { label: 'Monitoring Calibration', val: 'Sony BVM-HX310 4K HDR (1000 nits) & LG C3 OLED' },
    { label: 'Storage & I/O Bandwidth', val: '128TB RAID 0 High-Speed NVMe Scratch Array (4200 MB/s)' },
    { label: 'Remote Review & Dailies', val: 'Frame.io C2C (Camera to Cloud), Louper & NDI Low-Latency' },
  ];

  return (
    <section id="toolkit" className="py-24 border-t border-dark-800 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Software & Post Pipeline
            </h2>
          </div>

          <p className="text-dark-400 text-sm sm:text-base max-w-md">
            Mastery across industry-standard NLEs, cinema camera sensors, color-managed workflows, and high-fidelity sound engines.
          </p>
        </div>

        {/* 3 Columns by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILLS.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-dark-900 border border-dark-800 hover:border-dark-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-800 pb-3">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  {group.category}
                </h3>

                <div className="space-y-4">
                  {group.items.map((tool, idx) => (
                    <div key={idx} className="group/item">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-dark-200 group-hover/item:text-gold-300 transition-colors">
                          {tool.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-dark-800 text-gold-400 font-mono font-medium">
                          {tool.level}
                        </span>
                      </div>
                      <p className="text-xs text-dark-400">
                        {tool.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monitoring & Remote Infrastructure Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-950 border border-dark-800">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 flex items-center gap-2">
            <Sliders className="w-4 h-4" />
            Studio Hardware & Remote Collaboration Standard
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {hardwarePipeline.map((item, i) => (
              <div key={i} className="border-l-2 border-gold-500/40 pl-3">
                <span className="text-[11px] text-dark-400 uppercase tracking-wider block mb-1">
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
