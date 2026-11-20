import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFilmModal } from '../context/FilmModalContext';

export default function VideoPlayerModal() {
  const {
    isOpen,
    activeFilm,
    isPlaying,
    isMuted,
    progress,
    setProgress,
    aspectRatio,
    liveTimecode,
    closeFilm,
    togglePlayback,
    toggleMute,
    toggleAspectRatio,
    restartReel,
  } = useFilmModal();

  const timelineRef = useRef(null);
  const panelRef = useRef(null);

  if (!isOpen || !activeFilm) return null;

  const handleScrub = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    setProgress(newProgress);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (panelRef.current?.requestFullscreen) {
        panelRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const isAnamorphic = aspectRatio === '2.39:1';
  const isAcademy = aspectRatio === '4:3';

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 transition-opacity duration-300">
      <div
        ref={panelRef}
        className="relative w-full max-w-5xl bg-surface-container-low rounded-lg overflow-hidden flex flex-col shadow-2xl border border-white/10"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-lowest border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-error rec-pulse flex-shrink-0"></span>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-sm sm:text-base uppercase text-on-surface tracking-tight truncate font-semibold">
                  {activeFilm.title}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded font-meta-timecode text-[9px] bg-surface-container text-secondary font-bold">
                  {aspectRatio} MASTER
                </span>
              </div>
              <span className="font-label-code text-[10px] text-on-surface-variant truncate">
                {activeFilm.client}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-low font-meta-timecode text-[10px] text-secondary border border-secondary/20">
              <span className="material-symbols-outlined text-[12px]">lock</span> ACES DCI 4K PROXY
            </span>
            <button
              aria-label="Close modal"
              onClick={closeFilm}
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-bright text-on-surface flex items-center justify-center transition-colors cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Cinematic Letterbox Container */}
        <div
          className="relative w-full bg-black flex items-center justify-center overflow-hidden transition-all duration-300"
          style={{
            aspectRatio: isAnamorphic ? '2.39/1' : isAcademy ? '4/3' : '16/9',
            maxHeight: '60vh',
            minHeight: '260px',
          }}
        >
          {/* Film Letterbox Bars */}
          <div
            className={`absolute top-0 left-0 right-0 bg-black/95 z-20 pointer-events-none transition-all duration-300 ${
              isAnamorphic ? 'h-4' : 'h-0'
            }`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black/95 z-20 pointer-events-none transition-all duration-300 ${
              isAnamorphic ? 'h-4' : 'h-0'
            }`}
          ></div>

          {/* Video Frame Simulation */}
          <img
            alt={activeFilm.title}
            className="w-full h-full object-cover transition-transform duration-700"
            src={activeFilm.img}
          />
          <div className="scanlines absolute inset-0 opacity-20"></div>

          {/* Overlay HUD Camera Telemetry */}
          <div className="absolute inset-4 pointer-events-none flex flex-col justify-between z-20 opacity-70">
            <div className="flex justify-between font-meta-timecode text-[9px] sm:text-[10px] text-primary">
              <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">
                [REC: {isPlaying ? 'ACTIVE' : 'STANDBY'}]
              </span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">
                SHUTTER 180° • EI 800
              </span>
            </div>
            <div className="flex justify-between font-meta-timecode text-[9px] sm:text-[10px] text-on-surface-variant">
              <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">
                LUT: {activeFilm.lut || 'REC709_KODAK2383_PRINT'}
              </span>
              <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">
                {activeFilm.audio || 'DOLBY ATMOS 5.1 CH'}
              </span>
            </div>
          </div>

          {/* Center Play/Pause Badge */}
          <div
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
            onClick={togglePlayback}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-surface-container-lowest/80 text-secondary border border-secondary/40 flex items-center justify-center shadow-2xl backdrop-blur-md hover:scale-110 hover:bg-secondary hover:text-on-secondary transition-all ${
                isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
              }`}
            >
              <span
                className="material-symbols-outlined text-[36px] sm:text-[44px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </div>
          </div>

          {/* Floating Scrubber HUD Controls Rail */}
          <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-30 flex flex-col gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
            {/* Scrubber timeline track */}
            <div
              ref={timelineRef}
              onClick={handleScrub}
              className="relative w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-secondary rounded-full transition-all"
                style={{ width: `${progress * 100}%` }}
              ></div>
            </div>

            {/* Video Controls Rail */}
            <div className="flex items-center justify-between pt-1 text-on-surface">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlayback}
                  className="text-on-surface hover:text-secondary transition-colors cursor-pointer flex items-center"
                  title="Play / Pause (Space)"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button
                  onClick={toggleMute}
                  className="text-on-surface hover:text-secondary transition-colors cursor-pointer flex items-center"
                  title="Mute / Unmute"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>
                {/* Live TC Counter */}
                <span className="font-meta-timecode text-[11px] text-secondary tracking-widest pl-1">
                  {liveTimecode}
                </span>
                <span className="font-meta-timecode text-[11px] text-on-surface-variant">/</span>
                <span className="font-meta-timecode text-[11px] text-on-surface-variant tracking-widest">
                  {activeFilm.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 font-label-code text-[11px]">
                {/* Aspect Ratio Switcher */}
                <button
                  onClick={toggleAspectRatio}
                  className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  title="Switch Letterbox Aspect Ratio"
                >
                  <span className="material-symbols-outlined text-[14px]">aspect_ratio</span>
                  <span>{aspectRatio}</span>
                </button>
                <button
                  onClick={restartReel}
                  className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer flex items-center"
                  title="Restart"
                >
                  <span className="material-symbols-outlined text-[18px]">replay</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-on-surface-variant hover:text-secondary transition-colors cursor-pointer flex items-center"
                  title="Fullscreen"
                >
                  <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Spec Sheet */}
        <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-surface-container border-t border-white/10">
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="font-meta-timecode text-xs text-secondary tracking-widest font-bold">
                MASTER SPEC SHEET
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                {activeFilm.role}
              </span>
            </div>
            <span className="font-body-md text-xs sm:text-sm text-on-surface">
              {activeFilm.specs}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            <Link
              to="/contact"
              onClick={closeFilm}
              className="flex-1 md:flex-initial text-center px-4 py-2 bg-primary-container text-on-primary font-label-caps text-xs uppercase rounded-full hover:bg-secondary hover:text-on-secondary transition-colors font-semibold"
            >
              Request Treatment
            </Link>
            <button
              onClick={closeFilm}
              className="px-4 py-2 bg-surface-container-high text-on-surface font-label-caps text-xs uppercase rounded-full hover:bg-surface-bright transition-colors cursor-pointer"
            >
              Back to Reel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
