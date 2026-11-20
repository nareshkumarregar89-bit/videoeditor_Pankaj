import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  ArrowRight,
  Sparkles,
  Award,
  Film,
  CheckCircle2,
  ArrowUpRight,
  Camera,
  Compass,
  Star,
  Quote,
  Sliders,
  Check,
  Clapperboard
} from 'lucide-react';
import { STATS } from '../data/films';
import { TESTIMONIALS } from '../data/skills';
import { useProjects } from '../context/ProjectsContext';
import ProjectCard from '../components/ProjectCard';

export default function HomePage({ onOpenShowreel, onSelectProject }) {
  const { projects } = useProjects();
  const featured = projects[0] || null;
  const recentProjects = projects.slice(0, 3);

  const craftPillars = [
    {
      title: 'Kinetic Rhythm & Pacing',
      desc: 'Obsessive frame-level timing locked to musical downbeats, sub-bass impacts, and actor breathing.'
    },
    {
      title: 'ACES 1.3 Color Pipeline',
      desc: 'Scene-referred color science preserving subtle skin tones, highlight roll-off, and cinematic depth.'
    },
    {
      title: 'Photochemical Film Emulation',
      desc: 'Authentic Kodak Vision3 5219 and 2383 print stock emulation curves, halation, and organic grain.'
    },
    {
      title: 'Directing With Editorial Foresight',
      desc: 'Directing on-set with the editorial timeline in mind, saving production hours and maximizing impact.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      
      {/* Hero Section with Cinematic Director Showcase Card */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white">
        {/* Ambient Mountain Mist & Sunrise Glows (Inspired by Scenic Shoot Photo) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-gradient-to-tr from-sky-200/30 via-indigo-100/20 to-amber-200/25 blur-[150px] pointer-events-none rounded-full" />
        
        {/* Soft Background Gradient Derived from Photo's Atmosphere */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full overflow-hidden blur-[130px] opacity-25 pointer-events-none">
          <img src="/assets/images/pankaj_regar_portrait.jpg" alt="" className="w-full h-full object-cover scale-150" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Hero Copy & CTAs */}
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs text-zinc-700 font-medium mb-6 shadow-subtle hover:border-amber-500/40 transition-colors">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-zinc-900 font-semibold">Film Director & Senior Video Editor</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.08]">
                Crafting Films That <br />
                <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-amber-600 bg-clip-text text-transparent">
                  Command Attention.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl mb-8">
                Welcome to the official portfolio of <strong className="text-zinc-950 font-bold">Pankaj Regar</strong>. Commercial Director, Senior Video Editor, and Colorist shaping high-velocity commercial campaigns, music videos, narrative shorts, and branded cinema with obsessive attention to rhythm and visual poetry.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/works"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Explore Selected Works
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenShowreel}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 text-zinc-900 font-semibold text-sm sm:text-base transition-all shadow-subtle hover:shadow hover:-translate-y-0.5 inline-flex items-center gap-2 group"
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500/15 group-hover:bg-amber-500/25 text-amber-600 flex items-center justify-center transition-colors">
                    <Play className="w-3.5 h-3.5 fill-amber-600" />
                  </div>
                  Watch 2026 Showreel
                </button>
              </div>

              {/* Quick Credentials Tick-list */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  ARRI Alexa & RED 8K Raw Pipelines
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  DaVinci Resolve ACES 1.3
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  Commercial & Narrative Finish
                </span>
              </div>
            </div>

            {/* Right Column: PURE CLIENT PORTRAIT (NO TEXT, NO BADGES, SOFT GRADIENT BLEND) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Luminous Ambient Background Gradient Aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/30 via-amber-300/25 to-indigo-400/25 rounded-3xl blur-2xl animate-auraPulse pointer-events-none" />

                {/* Pure Photo Frame with Smooth Gradient Blend — Only Photo, Zero Text */}
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-white shadow-2xl aspect-[4/5] group">
                  <img
                    src="/assets/images/pankaj_regar_portrait.jpg"
                    alt="Pankaj Regar"
                    className="w-full h-full object-cover object-[center_12%] animate-faceReveal transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Soft Background Gradient Blend across bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Subtle Inner Border Ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credibility Stats Bar */}
      <section className="py-8 bg-zinc-50/80 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-subtle text-center hover:border-zinc-300 hover:shadow-card transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black text-zinc-950 mb-1 font-sans">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-zinc-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Master Showreel Preview */}
      {featured && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto mb-10">
              <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest inline-block mb-3">
                Featured Presentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight mb-3">
                2026 Master Cinematic Showreel
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base">
                Click below to launch the interactive screening room with custom aspect ratio control and technical mastering telemetry.
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div
                onClick={() => onSelectProject(featured)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-2xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-glow"
              >
                <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={featured.thumbnail}
                    alt={featured.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/50 text-xs font-semibold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Featured Master
                    </span>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white text-left">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                        {featured.client}
                      </p>
                      <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {featured.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-300">
                      <span>Click to screen film</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Selected Works Highlights (Preview of first 3 items) */}
      <section className="py-20 bg-zinc-50/60 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest inline-block mb-3">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                Recent Projects
              </h2>
            </div>

            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-amber-600 transition-colors"
            >
              <span>View All {projects.length} Works Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 items-stretch">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Browse Complete Film Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Director's Vision & Craftsmanship Section */}
      <section className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/50 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Stylized Director Photo & Suite */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Framed Portrait with Seamless Gradient Blend — Clean & Cinematic */}
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 bg-gradient-to-b from-zinc-100 to-white shadow-2xl aspect-[4/5] group">
                  <img
                    src="/assets/images/pankaj_regar_portrait.jpg"
                    alt="Pankaj Regar"
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Column: Statement, Philosophy & 4 Craft Pillars */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
                <Clapperboard className="w-3.5 h-3.5 text-amber-600" />
                Cinematic Editorial Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight mb-6 leading-tight">
                "Every single cut must earn its place in the timeline."
              </h2>

              <p className="text-base text-zinc-600 leading-relaxed mb-8">
                With over eight years shaping commercial spots, narrative shorts, and high-impact music videos, I bridge the crucial gap between on-set camera direction and the post-production finish. From raw 8K RED and ARRI rushes to fine color curves and sound design, every visual is calibrated for emotional resonance and cinema fidelity.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {craftPillars.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 hover:bg-white hover:shadow-subtle transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <h4 className="text-sm font-bold text-zinc-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  Full Bio & Pipeline Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold text-sm transition-all shadow-subtle inline-flex items-center gap-2"
                >
                  Explore Rates & Turnaround
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-zinc-50/70 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest inline-block mb-3">
              Industry Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight mb-3">
              Client & Producer Testimonials
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base">
              Direct feedback from commercial agency leaders, automotive producers, and label commissioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-subtle hover:shadow-card hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-zinc-300 mb-3" />
                  <p className="text-sm text-zinc-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">{t.author}</h4>
                    <p className="text-xs text-zinc-500">{t.role} • {t.company}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">
                    {t.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Teaser Banner */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />
            
            <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest inline-block mb-4">
              Booking 2026 Productions
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Have a commercial or film project in mind?
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Available for commercial directing, fine editorial cuts, music videos, and precision color grading worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-glow hover:-translate-y-0.5"
              >
                Inquire For Booking
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                Explore Services & Deliverables
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}