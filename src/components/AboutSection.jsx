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
      title: 'Cinematic Story & Editorial Mindset',
      desc: 'Approaching every edit with deep narrative vision, structuring pacing, rhythm, and emotional arcs to maximize impact.'
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-200 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Studio Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait with Clean Gradient Blend */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 bg-gradient-to-b from-zinc-100 to-white shadow-2xl aspect-[3/4] group">
                <img
                  src="/assets/images/pankaj_regar_portrait.jpg"
                  alt="Pankaj Regar"
                  className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
              </div>

              {/* Floating Experience Badge Placed Cleanly Outside Image */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-zinc-200/90 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-700 flex items-center justify-center font-black text-lg">
                    8+
                  </div>
                  <div>
                    <p className="text-zinc-950 font-bold text-sm">Years in Cinematic Video Editing</p>
                    <p className="text-xs text-zinc-500">Over 45+ commercial & narrative credits</p>
                  </div>
                </div>
              </div>

              {/* Studio Suite Thumbnail */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-xl">
                <img
                  src="/assets/images/cutting_room_suite.jpg"
                  alt="Color Grading Suite"
                  className="w-full h-28 object-cover"
                />
                <div className="p-2 text-[10px] text-center font-mono text-zinc-700 bg-zinc-50 border-t border-zinc-200">
                  Suite 01 • DaVinci Studio
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
              <Film className="w-3.5 h-3.5 text-amber-600" />
              Editor's Statement
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight mb-6">
              "Every single cut must earn its place in the timeline."
            </h2>

            <div className="space-y-4 text-zinc-700 text-base leading-relaxed mb-8">
              <p>
                I am a Cinematic Video Editor and Senior Colorist with over eight years of experience shaping high-impact automotive commercials, music videos, narrative shorts, and branded documentaries.
              </p>
              <p>
                Having spent years refining the art of visual rhythm in the cutting room, I bridge the crucial gap between production rushes and final cinema delivery. I believe an edit should do more than assemble footage—it should hypnotize the viewer, dictate their pulse, and linger in memory long after the credits roll.
              </p>
              <p>
                From handling native 8K multi-camera raw rushes to crafting custom Kodak 35mm photochemical grain profiles, my post-production pipeline is engineered for supreme visual punch and broadcast fidelity.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <h4 className="text-sm font-bold text-zinc-950">{item.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action & Editorial Credentials */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Book an Editorial Consultation
              </a>
              <a
                href="#toolkit"
                className="px-5 py-3 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold text-sm transition-all inline-flex items-center gap-2 shadow-subtle hover:border-zinc-300"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                View Technical Workflow
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
