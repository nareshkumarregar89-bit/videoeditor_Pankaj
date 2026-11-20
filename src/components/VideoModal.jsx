import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Award } from 'lucide-react';

export default function VideoModal({ project, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('2.39'); // '2.39', '16:9', '4:3'
  const [progress, setProgress] = useState(25); // percentage
  const [currentTime, setCurrentTime] = useState(42); // seconds
  const modalRef = useRef(null);

  const totalDuration = 168; // in seconds approx

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Simulated playback timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev >= totalDuration ? 0 : prev + 1;
        setProgress((next / totalDuration) * 100);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatSeconds = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
    setCurrentTime(Math.floor((newProgress / 100) * totalDuration));
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white border border-zinc-200 rounded-2xl shadow-2xl flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 bg-zinc-50 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                {project.client} • {project.year} • {project.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Aspect Switcher */}
            <div className="hidden sm:flex items-center bg-zinc-200/80 rounded-lg p-0.5 text-xs text-zinc-600">
              <button
                onClick={() => setAspectRatio('2.39')}
                className={`px-2.5 py-1 rounded ${aspectRatio === '2.39' ? 'bg-white text-zinc-950 font-bold shadow-sm' : 'hover:text-zinc-950'}`}
                title="CinemaScope 2.39:1"
              >
                2.39:1
              </button>
              <button
                onClick={() => setAspectRatio('16:9')}
                className={`px-2.5 py-1 rounded ${aspectRatio === '16:9' ? 'bg-white text-zinc-950 font-bold shadow-sm' : 'hover:text-zinc-950'}`}
                title="Standard 16:9 DCI"
              >
                16:9
              </button>
              <button
                onClick={() => setAspectRatio('4:3')}
                className={`px-2.5 py-1 rounded ${aspectRatio === '4:3' ? 'bg-white text-zinc-950 font-bold shadow-sm' : 'hover:text-zinc-950'}`}
                title="Academy 4:3"
              >
                4:3
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-200/80 hover:bg-zinc-300 text-zinc-700 hover:text-zinc-950 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display Area (Black Cinema Screening Room) */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[420px]">
          {/* Active Container Sized with Selected Aspect Ratio */}
          <div
            className={`relative w-full transition-all duration-300 ${
              aspectRatio === '2.39'
                ? 'aspect-[2.39/1]'
                : aspectRatio === '4:3'
                ? 'aspect-[4/3] max-w-2xl'
                : 'aspect-video'
            }`}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-102' : 'scale-100'}`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Centered Play/Pause Overlay indicator on click */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
            >
              <div
                className={`w-16 h-16 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-xl transition-all duration-200 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 fill-current" />
                ) : (
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                )}
              </div>
            </button>

            {/* Bottom Player Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              {/* Scrubbable Timeline Track */}
              <div
                onClick={handleSeek}
                className="relative w-full h-2 bg-white/25 hover:h-2.5 rounded-full cursor-pointer mb-3 transition-all group/track"
              >
                <div
                  className="h-full bg-amber-500 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow opacity-0 group-hover/track:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Control Buttons & Timestamps */}
              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 hover:text-amber-400 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-amber-400 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <span className="font-mono text-zinc-300">
                    {formatSeconds(currentTime)} / {project.runtime}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-zinc-300">
                  <span className="hidden sm:inline font-mono text-[11px] px-2 py-0.5 rounded bg-white/10">
                    {project.aspect}
                  </span>
                  <span className="text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                    {project.badge || 'PRORES 4444'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Technical Specifications & Synopsis */}
        <div className="p-6 sm:p-8 bg-white border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                {project.awards && (
                  <span className="px-3 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {project.awards}
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-black text-zinc-950 mb-3">
                {project.title}
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-100 text-xs text-zinc-700 font-medium border border-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Gear Specs Column */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200 space-y-3 text-xs">
              <h4 className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-2">
                Production Specifications
              </h4>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Client & Role</span>
                <span className="text-zinc-900 font-bold">{project.client} — {project.role}</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Camera System</span>
                <span className="text-zinc-900 font-bold">{project.camera || 'ARRI Alexa LF'}</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Optics / Lenses</span>
                <span className="text-zinc-900 font-bold">{project.lenses || 'Anamorphic Primes'}</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Color Pipeline</span>
                <span className="text-zinc-900 font-bold">{project.colorSuite || 'DaVinci Resolve Studio (ACES)'}</span>
              </div>

              <div>
                <span className="text-zinc-500 block uppercase tracking-wider text-[10px] font-bold">Audio Format</span>
                <span className="text-zinc-900 font-bold">{project.sound || 'Dolby Atmos 5.1'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
