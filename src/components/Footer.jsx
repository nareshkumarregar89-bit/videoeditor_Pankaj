import React from 'react';
import { Film, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'Vimeo', href: 'https://vimeo.com' },
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'IMDb', href: 'https://imdb.com' },
  ];

  return (
    <footer className="border-t border-dark-800 bg-dark-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight block">
                Pankaj Regar
              </span>
              <span className="text-xs text-dark-400">
                Director & Lead Film Editor
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-300">
            <a href="#works" className="hover:text-gold-400 transition-colors">Works</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="#toolkit" className="hover:text-gold-400 transition-colors">Toolkit</a>
            <a href="#experience" className="hover:text-gold-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-dark-900 border border-dark-800 text-dark-300 hover:text-white hover:border-gold-500/40 transition-all flex items-center gap-2 text-xs"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-500">
          <p>© {new Date().getFullYear()} Pankaj Regar. All rights reserved.</p>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-dark-300 transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          <p className="flex items-center gap-1">
            Built for Cinematic Showcase
          </p>
        </div>
      </div>
    </footer>
  );
}
