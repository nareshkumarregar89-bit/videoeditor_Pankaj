import React from 'react';
import { Film, CheckCircle2, Award, Clapperboard, Compass, FileText } from 'lucide-react';

export default function AboutSection() {
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
    <section id="about" className="py-24 border-t border-dark-800 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Studio Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-dark-800 bg-dark-900 shadow-2xl aspect-[4/5]">
                <img
                  src="/assets/images/pankaj_regar_portrait.jpg"
                  alt="Pankaj Regar — Director & Editor"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-dark-900/90 backdrop-blur-md border border-dark-700/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-lg">
                      8+
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Years in Post & Directing</p>
                      <p className="text-xs text-dark-400">Over 45+ commercial & narrative credits</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Studio Suite Thumbnail */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 rounded-xl overflow-hidden border border-dark-700 bg-dark-900 shadow-2xl">
                <img
                  src="/assets/images/cutting_room_suite.jpg"
                  alt="Color Grading Suite"
                  className="w-full h-28 object-cover"
                />
                <div className="p-2 text-[10px] text-center font-mono text-dark-300 bg-dark-900">
                  Suite 01 • DaVinci Studio
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-dark-800 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-4">
              <Clapperboard className="w-3.5 h-3.5" />
              Director Statement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              "Every single cut must earn its place in the timeline."
            </h2>

            <div className="space-y-4 text-dark-300 text-base leading-relaxed mb-8">
              <p>
                I am a Director and Senior Film Editor with over eight years of experience steering high-impact automotive commercials, music videos, narrative shorts, and branded documentaries.
              </p>
              <p>
                Having spent years in both the director’s chair and the cutting room, I bridge the crucial gap between on-set vision and final DCP delivery. I believe an edit should do more than assemble footage—it should hypnotize the viewer, dictate their pulse, and linger in memory long after the credits roll.
              </p>
              <p>
                From handling native 8K RED and ARRI raw rushes to crafting custom Kodak 35mm photochemical grain profiles, my post-production pipeline is engineered for supreme visual punch and broadcast fidelity.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-dark-900/60 border border-dark-800 hover:border-dark-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-dark-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action & Direct Credentials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-dark-950 font-bold text-sm transition-all shadow-glow"
              >
                Book a Directorial Consultation
              </a>
              <a
                href="#toolkit"
                className="px-5 py-3 rounded-xl bg-dark-900 hover:bg-dark-850 border border-dark-800 text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-gold-400" />
                View Technical Workflow
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
