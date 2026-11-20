import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Film, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name with Director Avatar */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="/assets/images/pankaj_regar_portrait.jpg"
                alt="Pankaj Regar"
                className="w-10 h-10 rounded-xl object-cover object-[center_12%] border border-zinc-200/90 shadow-subtle group-hover:border-amber-500/60 group-hover:scale-105 transition-all"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500/30" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-950 group-hover:text-amber-600 transition-colors">
                Pankaj Regar
              </span>
              <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                Director & Film Editor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 border border-zinc-200/90 rounded-full px-3 py-1.5 backdrop-blur-sm shadow-subtle">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? 'bg-white text-zinc-950 font-bold shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Availability Badge & Contact CTA (NO Admin Button on Public UI) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Projects
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-zinc-900 hover:bg-black text-white font-semibold text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
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
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-2 px-3 py-2 mb-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Commercials & Films 2026
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-white'
                      : 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-sm shadow-sm"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
