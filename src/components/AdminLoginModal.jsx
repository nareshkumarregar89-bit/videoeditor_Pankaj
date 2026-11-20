import React, { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';
import { Lock, Eye, EyeOff, X, KeyRound, ShieldAlert } from 'lucide-react';

export default function AdminLoginModal() {
  const { adminModalOpen, setAdminModalOpen, login, DEFAULT_PASSWORD } = useProjects();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!adminModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = login(password);
    if (!res.success) {
      setError(res.message);
    } else {
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={() => setAdminModalOpen(false)} />

      <div
        className="relative z-10 w-full max-w-md bg-white border border-zinc-200 rounded-2xl shadow-2xl p-7 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700 shadow-subtle">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-zinc-950 tracking-tight">
                Studio CMS Admin
              </h3>
              <p className="text-xs text-zinc-500 font-medium">
                Client Video Management Portal
              </p>
            </div>
          </div>

          <button
            onClick={() => setAdminModalOpen(false)}
            className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
          Please enter your admin passkey to access the video management dashboard. From there you can add new films, edit project details, and remove videos.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
              Security Passkey
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoFocus
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full pl-4 pr-11 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors tracking-wider"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAdminModalOpen(false)}
              className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:shadow-lg"
            >
              Unlock Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
