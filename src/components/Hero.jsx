import React from 'react';
import { Play, ArrowDown, Sparkles, Award, Film, Clock, ExternalLink } from 'lucide-react';
import { STATS } from '../data/films';

export default function Hero({ onOpenShowreel, onSelectProject }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambient Glows (Clean & Cinematic, not muddy) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-dark-800 text-xs text-dark-300 font-medium mb-6 shadow-sm hover:border-gold-500/40 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="text-dark-200">Cinematic Storyteller & Film Editor</span>
            <span className="text-dark-500">•</span>
            <span className="text-gold-400 font-semibold">Mumbai & Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Crafting Films That <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-gold-400 bg-clip-text text-transparent">
              Command Attention.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-dark-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Hello, I'm <strong className="text-white font-semibold">Pankaj Regar</strong>. I direct and edit high-impact commercial spots, narrative shorts, music videos, and cinematic brand stories with obsessive attention to rhythm, cut precision, and color science.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#works"
              className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-base transition-all shadow-glow hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Explore Selected Works
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenShowreel}
              className="px-6 py-3.5 rounded-xl bg-dark-900 hover:bg-dark-850 border border-dark-800 hover:border-gold-500/40 text-white font-semibold text-base transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-full bg-gold-500/10 group-hover:bg-gold-500/20 text-gold-400 flex items-center justify-center transition-colors">
                <Play className="w-3.5 h-3.5 fill-gold-400" />
              </div>
              Watch 2026 Showreel
            </button>
          </div>
        </div>

        {/* Featured Reel Showcase Card */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div
            onClick={onOpenShowreel}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-dark-800 bg-dark-900 shadow-2xl transition-all duration-300 hover:border-gold-500/50 hover:shadow-glow"
          >
            {/* Thumbnail Poster */}
            <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-dark-950">
              <img
                src="/assets/images/nocturn_speed_of_shadows.jpg"
                alt="Pankaj Regar - Featured Cinematic Showreel"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

              {/* Big Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-500/90 text-dark-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-gold-400 transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-dark-950 translate-x-0.5" />
                </div>
              </div>

              {/* Badges on Video Card */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  Featured Reel
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-xs font-medium text-dark-300">
                  4K DCI • 2.39:1
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-xs font-mono text-dark-300">
                  02:48
                </span>
              </div>

              {/* Bottom Card Meta */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                    Bavaria Motorwerks Campaign
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    Nocturn: Speed of Shadows (Director's Cut)
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-dark-300">
                  <span>Click to play screening</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
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
              className="p-5 rounded-2xl bg-dark-900/60 border border-dark-800 text-center hover:border-dark-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 font-sans">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-dark-200 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-dark-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
