import React from 'react';
import { TESTIMONIALS } from '../data/skills';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 border-t border-zinc-200 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
            Trusted by Creators & Agencies
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Feedback from international commercial producers, automotive heads, and record labels.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:shadow-card transition-all flex flex-col justify-between shadow-subtle"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
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
    </section>
  );
}
