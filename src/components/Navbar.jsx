import React, { useState, useEffect } from 'react';
import { Film, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenShowreel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Toolkit', href: '#toolkit' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-subtle">
              <Film className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-950 group-hover:text-amber-600 transition-colors">
                Pankaj Regar
              </span>
              <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                Cinematic Video Editor
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 border border-zinc-200/90 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-subtle">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-white hover:shadow-sm rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Availability Badge & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Projects
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-950"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-zinc-200 px-4 pt-3 pb-6 mt-3 shadow-xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 px-3 py-2 mb-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Projects & Bookings
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShowreel();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-900 font-semibold text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                Watch Showreel 2026
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-sm shadow-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
