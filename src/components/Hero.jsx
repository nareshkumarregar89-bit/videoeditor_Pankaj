import React from 'react';
import { Play, ArrowDown, Sparkles, ExternalLink } from 'lucide-react';
import { STATS } from '../data/films';

export default function Hero({ onOpenShowreel, onSelectProject }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Soft Ambient Light Gradients */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-sky-100/30 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs text-zinc-700 font-medium mb-6 shadow-subtle hover:border-amber-500/40 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-zinc-800 font-medium">Cinematic Video Editor & Colorist</span>
            <span className="text-zinc-400">•</span>
            <span className="text-amber-700 font-semibold">Mumbai & Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
            Crafting Films That <br />
            <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-amber-600 bg-clip-text text-transparent">
              Command Attention.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Hello, I'm <strong className="text-zinc-950 font-semibold">Pankaj Regar</strong>. I edit and finish high-impact commercial spots, narrative shorts, music videos, and cinematic brand stories with obsessive attention to rhythm, cut precision, and color science.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#works"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Explore Selected Works
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenShowreel}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-zinc-900 font-semibold text-base transition-all shadow-sm hover:shadow hover:-translate-y-0.5 inline-flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/15 group-hover:bg-amber-500/25 text-amber-600 flex items-center justify-center transition-colors">
                <Play className="w-3.5 h-3.5 fill-amber-600" />
              </div>
              Watch 2026 Showreel
            </button>
          </div>
        </div>

        {/* Featured Reel Showcase Card */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div
            onClick={onOpenShowreel}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-amber-500/40"
          >
            {/* Thumbnail Poster */}
            <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-zinc-900">
              <img
                src="/assets/images/nocturn_speed_of_shadows.jpg"
                alt="Pankaj Regar - Featured Cinematic Showreel"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

              {/* Big Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Badges on Video Card */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/50 text-xs font-semibold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Featured Reel
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/50 text-xs font-medium text-zinc-700 shadow-sm">
                  4K DCI • 2.39:1
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  02:48
                </span>
              </div>

              {/* Bottom Card Meta */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                    Bavaria Motorwerks Campaign
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    Nocturn: Speed of Shadows (Master Edit)
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <span>Click to play screening</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-subtle text-center hover:border-zinc-300 hover:shadow-card transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-zinc-950 mb-1 font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-zinc-800 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
