import React from 'react';
import { SERVICES } from '../data/skills';
import { Clapperboard, Film, Palette, Volume2, ArrowRight, Check } from 'lucide-react';

const iconMap = {
  Clapperboard: Clapperboard,
  Film: Film,
  Palette: Palette,
  Volume2: Volume2,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 border-t border-zinc-200 relative bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            Capabilities & Deliverables
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Services & Expertise
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            From raw production rushes and narrative assembly to meticulous offline/online editing and theater-ready color mastering.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Film;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between shadow-subtle"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-zinc-300 group-hover:text-amber-500/60 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-950 mb-1 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3">
                    Key Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 group-hover:text-amber-600 transition-colors"
                  >
                    Inquire for this service
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
