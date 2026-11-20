import React from 'react';
import { Link } from 'react-router-dom';
import { Clapperboard, CheckCircle2, FileText, ArrowRight, Camera, Film, Sliders } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      title: 'Kinetic Rhythm & Pacing',
      desc: 'Obsessive frame-level timing synced to musical downbeats, sub-bass impacts, and actor breathing.'
    },
    {
      title: 'ACES 1.3 Color Pipeline',
      desc: 'Mastery in wide-gamut scene-referred color science, maintaining highlight roll-off and skin tones.'
    },
    {
      title: 'Photochemical Film Emulation',
      desc: 'Expertise in Kodak Vision3 5219 and 2383 print film emulation curves, halation, and gate weave.'
    },
    {
      title: 'Hybrid Directing & Post Mindset',
      desc: 'Directing on-set with the editorial timeline in mind, saving production hours and avoiding missing coverage.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Clapperboard className="w-3.5 h-3.5 text-amber-600" />
            About the Director
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-4">
            Vision, Rhythm & Precision
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Bridging emotional storytelling with high-end post-production discipline. Over eight years shaping commercial and narrative films.
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Portrait & Cutting Suite */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Director Portrait with Ambient Aura & Clean Gradient Blend (Zero Text Over Photo) */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-sky-400/25 via-amber-300/20 to-indigo-400/20 rounded-3xl blur-xl pointer-events-none" />
                
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 bg-gradient-to-b from-zinc-100 to-white shadow-2xl aspect-[3/4] group">
                  <img
                    src="/assets/images/pankaj_regar_portrait.jpg"
                    alt="Pankaj Regar"
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </div>

              {/* Experience Badge Placed Cleanly Below Photo */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-800 flex items-center justify-center font-black text-lg">
                    8+
                  </div>
                  <div>
                    <h4 className="text-zinc-950 font-bold text-sm">Years in Cinematic Video Editing</h4>
                    <p className="text-xs text-zinc-500">45+ commercial & narrative credits</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Statement & Bio */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 tracking-tight mb-6">
                "Every single cut must earn its place in the timeline."
              </h2>

              <div className="space-y-5 text-zinc-700 text-base leading-relaxed">
                <p>
                  I am a Senior Cinematic Video Editor collaborating with commercial agencies, automotive brands, and independent film productions.
                </p>
                <p>
                  My work spans high-velocity automotive commercials, underground music videos, sensitive observational documentaries, and atmospheric narrative shorts. Having shaped projects with precision cutting and atmospheric color grading, I bring a unique holistic sensibility to every frame.
                </p>
                <p>
                  In the edit suite, I treat pacing like musical tempo. Every cut is calculated against the emotional curve of the scene, actor performance micro-beats, and sonic impacts. In the color grade, I employ scene-referred ACES color pipelines and authentic Kodak film stocks to give every picture cinematic gravity and tactile texture.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-zinc-950 mb-4">
                Core Storytelling Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                      <h4 className="text-sm font-bold text-zinc-950">{item.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                Explore Services & Rates
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold text-sm transition-all shadow-subtle"
              >
                Inquire For Booking
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}