import React, { createContext, useContext, useState, useEffect } from 'react';
import { FILM_DATABASE } from '../data/films';

const FilmModalContext = createContext();

export function FilmModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilm, setActiveFilm] = useState(FILM_DATABASE['nocturn']);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0.24); // 0 to 1
  const [aspectRatio, setAspectRatio] = useState('2.39:1');

  const aspectRatios = ['2.39:1', '16:9', '4:3'];

  const openFilm = (filmId) => {
    const film = FILM_DATABASE[filmId] || FILM_DATABASE['nocturn'];
    setActiveFilm(film);
    setAspectRatio(film.aspect || '2.39:1');
    setProgress(0.24);
    setIsPlaying(false);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFilm = () => {
    setIsPlaying(false);
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleAspectRatio = () => {
    const currentIdx = aspectRatios.indexOf(aspectRatio);
    const nextIdx = (currentIdx + 1) % aspectRatios.length;
    setAspectRatio(aspectRatios[nextIdx]);
  };

  const restartReel = () => {
    setProgress(0);
    setIsPlaying(true);
  };

  // Playback timer ticker
  useEffect(() => {
    let timer = null;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 1) return 0;
          return prev + 0.005;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen]);

  // Global keydown (Spacebar for play/pause, Escape to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        closeFilm();
      }
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayback();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Formatted current timecode
  const totalSec = activeFilm?.totalSeconds || 168;
  const currentSec = Math.floor(progress * totalSec);
  const m = String(Math.floor(currentSec / 60)).padStart(2, '0');
  const s = String(currentSec % 60).padStart(2, '0');
  const f = String(Math.floor((progress * totalSec * 24) % 24)).padStart(2, '0');
  const liveTimecode = `00:${m}:${s}:${f}`;

  return (
    <FilmModalContext.Provider
      value={{
        isOpen,
        activeFilm,
        isPlaying,
        isMuted,
        progress,
        setProgress,
        aspectRatio,
        liveTimecode,
        openFilm,
        closeFilm,
        togglePlayback,
        toggleMute,
        toggleAspectRatio,
        restartReel,
      }}
    >
      {children}
    </FilmModalContext.Provider>
  );
}

export function useFilmModal() {
  return useContext(FilmModalContext);
}
