import React from 'react';
import { TESTIMONIALS } from '../data/skills';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 border-t border-dark-800 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Creators & Agencies
          </h2>
          <p className="text-dark-400 text-sm sm:text-base">
            Feedback from international commercial producers, automotive heads, and record labels.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-dark-900 border border-dark-800 hover:border-dark-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-dark-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-dark-800/80">
                <p className="text-white font-bold text-sm">
                  {t.author}
                </p>
                <p className="text-xs text-dark-400">
                  {t.role} • <span className="text-dark-300 font-medium">{t.company}</span>
                </p>
                <div className="mt-2 inline-block px-2 py-0.5 rounded bg-dark-800 text-[10px] text-gold-400 font-mono">
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
