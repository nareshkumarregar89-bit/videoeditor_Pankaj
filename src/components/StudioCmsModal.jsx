import React, { useState } from 'react';
import { useStudioCms } from '../context/StudioCmsContext';

export default function StudioCmsModal() {
  const { isOpen, closeCMS } = useStudioCms();
  const [token, setToken] = useState('PR-2026-NOCTURN-CUT3');
  const [key, setKey] = useState('••••••••••••');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Dailies Portal Authenticated: Welcome, Somesuch / W+K Production Team.');
    setTimeout(() => {
      setMessage('');
      closeCMS();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="relative w-full max-w-md bg-surface-container-low rounded-xl p-6 shadow-2xl border border-white/10 flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-headline-md text-base uppercase text-on-surface font-semibold">
              Studio Dailies CMS
            </span>
          </div>
          <button
            onClick={closeCMS}
            className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-high flex items-center justify-center text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <p className="font-body-sm text-xs text-on-surface-variant">
          Enter your encrypted client review code or Frame.io project key to access secure uncompressed DCI dailies, proxy cuts, and timecode annotation passes.
        </p>

        {message ? (
          <div className="p-3 bg-secondary-container text-on-secondary-container rounded text-xs font-meta-timecode text-center">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider block mb-1">
                Project Passcode / Token
              </label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full bg-surface-container px-3 py-2 text-sm text-on-surface font-label-code rounded border border-white/10 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label className="font-label-caps text-[10px] uppercase text-on-surface-variant tracking-wider block mb-1">
                Production House Key
              </label>
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full bg-surface-container px-3 py-2 text-sm text-on-surface font-label-code rounded border border-white/10 focus:outline-none focus:border-secondary"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2.5 bg-primary-container hover:bg-secondary text-on-primary hover:text-on-secondary font-label-caps text-xs uppercase tracking-widest font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">key</span> Decrypt &amp; Enter Suite
            </button>
          </form>
        )}

        <div className="pt-2 border-t border-white/5 flex items-center justify-between font-meta-timecode text-[10px] text-on-surface-variant">
          <span>SECURITY: AES-256 GCM</span>
          <span>BLACKFRAME CMS V4.8</span>
        </div>
      </div>
    </div>
  );
}
