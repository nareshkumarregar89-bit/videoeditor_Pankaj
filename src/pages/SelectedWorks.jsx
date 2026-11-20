import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilmModal } from '../context/FilmModalContext';
import { useSmpteTimecode } from '../hooks/useSmpteTimecode';
import { FILM_DATABASE, FILM_LIST } from '../data/films';

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { openFilm } = useFilmModal();
  const timecode = useSmpteTimecode();

  const nocturn = FILM_DATABASE['nocturn'];
  const projectCards = FILM_LIST.filter((f) => f.id !== 'nocturn');

  const filteredProjects = projectCards.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  const filterTabs = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'commercial', label: 'Commercial / Luxury' },
    { id: 'narrative', label: 'Narrative & Short' },
    { id: 'music', label: 'Music Videos' },
    { id: 'doc', label: 'Documentary' },
    { id: 'grade', label: 'Color Grade Reel' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Header & Filter HUD */}
      <section className="w-full px-4 sm:px-gutter pt-8 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
          {/* Metadata Breadcrumb & Real-time Live SMPTE Timecode */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container-lowest text-secondary font-meta-timecode text-[11px] rounded border border-secondary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                ARCHIVE // 35MM &amp; DCI MASTER
              </span>
              <span className="font-meta-timecode text-[11px] text-on-surface-variant tracking-widest hidden sm:inline">
                {timecode}
              </span>
            </div>
            <div className="flex items-center gap-space-md text-on-surface-variant font-label-code text-[11px]">
              <span>INDEX: 2024—2026</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span>CURATED CUTS: 07 MASTERS</span>
            </div>
          </div>

          {/* Main Title Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-[11px] uppercase tracking-[0.28em] text-secondary font-semibold">
                Filmography &amp; Directorial Vault
              </span>
              <h1 className="font-headline-xl text-3xl sm:text-5xl uppercase tracking-tight text-on-surface font-semibold">
                Selected Works
              </h1>
            </div>
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant max-w-md">
              Commercials, narrative shorts, automotive anthems, and visceral montage edits crafted across ARRI Alexa LF, RED V-Raptor, and photochemical film scan pipelines.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-semibold shadow-md'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Master Reel Showcase: Nocturn (Automotive) */}
      <section className="w-full px-4 sm:px-gutter py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-1">
          {/* Featured Bar Status Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-surface-container-lowest text-on-surface-variant rounded-t border border-white/5 border-b-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-error rec-pulse"></span>
              <span className="font-meta-timecode text-[11px] tracking-widest uppercase text-on-surface font-bold">
                FEATURED MASTER / CLIENT: {nocturn.clientShort}
              </span>
            </div>
            <span className="font-label-code text-[11px] text-secondary tracking-widest hidden md:inline">
              ARRI ALEXA LF • 2.39:1 ANAMORPHIC
            </span>
          </div>

          {/* Master Player Card with Glow Scrim & Interactive Trigger */}
          <div
            onClick={() => openFilm('nocturn')}
            className="relative w-full aspect-[21/9] min-h-[360px] md:min-h-[500px] rounded-b overflow-hidden shadow-2xl bg-surface-container-lowest group cursor-pointer border border-white/5 border-t-0"
          >
            <img
              alt={nocturn.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src={nocturn.img}
            />

            {/* Matte Vignette & HUD overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-surface-container-lowest/60"></div>
            <div className="scanlines absolute inset-0 opacity-20"></div>

            {/* ARRI Crosshair Frame Guides */}
            <div className="absolute inset-4 md:inset-8 pointer-events-none flex flex-col justify-between opacity-70">
              <div className="flex justify-between font-meta-timecode text-[10px] text-primary">
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur">[ SAFE 90% ]</span>
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                  PRORES 4444 XQ // 24.000 FPS
                </span>
              </div>
              <div className="flex justify-between font-meta-timecode text-[10px] text-on-surface-variant">
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                  LUT: {nocturn.lut}
                </span>
                <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur">
                  {nocturn.audio}
                </span>
              </div>
            </div>

            {/* Center Magnetic Playhead Trigger */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-container/90 text-on-primary flex items-center justify-center shadow-2xl backdrop-blur group-hover:scale-110 group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                <span
                  className="material-symbols-outlined text-[36px] md:text-[44px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>

            {/* Bottom Spec HUD Rail */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-surface-container-high text-secondary font-meta-timecode text-[10px] rounded uppercase font-bold">
                    {nocturn.badge}
                  </span>
                  <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                    DUR {nocturn.duration}
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase text-on-surface tracking-tight font-semibold">
                  {nocturn.title}
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-primary-fixed-dim line-clamp-2">
                  {nocturn.summary}
                </p>
              </div>
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-1 font-label-code text-xs text-on-surface-variant">
                <span className="text-on-surface font-semibold">{nocturn.role}</span>
                <span>POST HOUSE: {nocturn.postHouse}</span>
                <span className="text-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer font-bold">
                  WATCH FULL MASTER <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid Section: Bento & Cinematic Rails */}
      <section className="w-full px-4 sm:px-gutter py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-3">
              <span className="font-meta-timecode text-[11px] text-secondary tracking-[0.2em] uppercase font-bold">
                Project Index
              </span>
              <span className="font-headline-md text-xl sm:text-2xl uppercase text-on-surface font-semibold">
                Curated Releases
              </span>
            </div>
            <span className="font-label-code text-xs text-on-surface-variant hidden sm:inline">
              SORT: CHRONOLOGICAL // DCI 4K
            </span>
          </div>

          {/* Projects Container (Filtered via State) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item) => (
              <article
                key={item.id}
                onClick={() => openFilm(item.id)}
                className="flex flex-col bg-surface-container-low rounded overflow-hidden shadow-lg group hover:bg-surface-container transition-all cursor-pointer razor-card"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-lowest">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2 py-0.5 bg-surface-container-lowest/80 text-secondary font-meta-timecode text-[10px] rounded backdrop-blur border border-white/5">
                      {item.badge}
                    </span>
                    <span className="font-meta-timecode text-[10px] text-primary bg-surface-container-lowest/80 px-2 py-0.5 rounded backdrop-blur">
                      {item.timeDisplay}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl">
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
                      <span>CLIENT: {item.clientShort}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-headline-md text-lg sm:text-xl text-on-surface uppercase tracking-tight group-hover:text-primary transition-colors font-semibold">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                      {item.summary}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-on-surface-variant border-t border-white/5">
                    <span className="font-meta-timecode text-[10px] text-secondary">
                      {item.role}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openFilm(item.id);
                      }}
                      className="font-label-caps text-xs uppercase text-on-surface flex items-center gap-1 group-hover:text-secondary transition-colors cursor-pointer"
                    >
                      Watch Cut <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Pipeline & Directorial Workflow Overview (Bento Grid) */}
      <section className="w-full px-4 sm:px-gutter py-12 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-meta-timecode text-[11px] text-secondary uppercase tracking-[0.25em] font-bold">
                Cutting Suite Standard
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface uppercase font-semibold">
                Post-Production Architecture
              </h2>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>CALIBRATED TO ACES 1.3 &amp; DCI-P3</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Cell 1 */}
            <div className="p-6 bg-surface-container rounded flex flex-col justify-between gap-6 shadow-md border border-white/5 hover:border-secondary/30 transition-all">
              <div className="flex flex-col gap-2">
                <span className="font-meta-timecode text-[11px] text-secondary tracking-widest font-bold">
                  [ 01 / COLOR SUITE ]
                </span>
                <h3 className="font-headline-md text-xl text-on-surface uppercase font-semibold">
                  Photochemical Print Emulation
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant">
                  Proprietary grain matrices derived from Kodak 5219 Vision3 scans. In-house node trees built in DaVinci Resolve Studio with precision halation and density curves.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 font-label-code text-xs text-primary border-t border-white/5">
                <span>RESOLVE STUDIO 19</span>
                <span className="text-outline-variant">•</span>
                <span>SONY BVM-HX310</span>
              </div>
            </div>

            {/* Bento Cell 2 */}
            <div className="p-6 bg-surface-container rounded flex flex-col justify-between gap-6 shadow-md border border-white/5 hover:border-secondary/30 transition-all">
              <div className="flex flex-col gap-2">
                <span className="font-meta-timecode text-[11px] text-secondary tracking-widest font-bold">
                  [ 02 / MONTAGE DISCIPLINE ]
                </span>
                <h3 className="font-headline-md text-xl text-on-surface uppercase font-semibold">
                  Rhythmic Tension
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant">
                  Every edit cut is musically engineered. Micro-timing adjustments down to individual frames ensure maximum emotional resonance for commercial hooks and long-form drama.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 font-label-code text-xs text-primary border-t border-white/5">
                <span>PREMIERE PRO</span>
                <span className="text-outline-variant">•</span>
                <span>AVID MEDIA COMPOSER</span>
              </div>
            </div>

            {/* Bento Cell 3 */}
            <div className="p-6 bg-surface-container rounded flex flex-col justify-between gap-6 shadow-md border border-white/5 hover:border-secondary/30 transition-all">
              <div className="flex flex-col gap-2">
                <span className="font-meta-timecode text-[11px] text-secondary tracking-widest font-bold">
                  [ 03 / SONIC INTEGRATION ]
                </span>
                <h3 className="font-headline-md text-xl text-on-surface uppercase font-semibold">
                  Bespoke Foley &amp; Score Alignment
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant">
                  Full coordination with sound design teams to lock visual transients to custom soundscapes, transient stereo width manipulation, and sub-harmonic low-end impact.
                </p>
              </div>
              <div className="flex items-center gap-2 pt-2 font-label-code text-xs text-primary border-t border-white/5">
                <span>PRO TOOLS ULTIMATE</span>
                <span className="text-outline-variant">•</span>
                <span>DOLBY ATMOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Directorial Commission Callout */}
      <section className="w-full px-4 sm:px-gutter py-16">
        <div className="max-w-7xl mx-auto p-6 sm:p-10 md:p-12 bg-surface-container-low rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-meta-timecode text-xs text-secondary uppercase tracking-[0.25em] font-bold">
              Commercial &amp; Feature Booking
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase text-on-surface tracking-tight font-semibold">
              Have a script, commercial brief, or offline cut ready?
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Accepting select directorial commissions and lead offline editing projects for late Q2 through Q4 2026.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-6 py-3 bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary transition-colors font-label-caps text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg"
            >
              Start Project Brief
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto text-center px-5 py-3 bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-caps text-xs uppercase tracking-wider rounded-full border border-white/5"
            >
              Rate Card &amp; Specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
