import React from 'react';
import { Link } from 'react-router-dom';
import PulseCanvas from '../components/PulseCanvas';
import { useSmpteTimecode } from '../hooks/useSmpteTimecode';

export default function AboutPipeline() {
  const timecode = useSmpteTimecode();

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-gutter py-8 sm:py-12 flex flex-col gap-12 sm:gap-16">

        {/* Hero: Statement & Editorial Suite Card */}
        <div className="relative w-full rounded-xl bg-surface-container-low p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-surface-variant/30 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Statement Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                  EDITOR'S STATEMENT // SEQ. 001
                </span>
              </div>

              <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-on-surface leading-tight tracking-tight uppercase font-semibold">
                “A CUT IS NOT JUST A PUNCTUATION MARK. IT IS A <span className="text-secondary">PULSE</span>.”
              </h1>

              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Pankaj Regar operates at the intersection of raw human kinetic rhythm and uncompromising cinematic color science, shaping narrative gravity for visionary luxury brands, automotive campaigns, and independent cinema.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary transition-all font-label-caps text-xs uppercase tracking-widest font-semibold rounded-full shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Request Master Reel Deck &amp; CV
                </Link>
                <div className="px-3 py-1.5 bg-surface-container-highest rounded text-on-surface-variant font-label-code text-xs flex items-center gap-1.5 border border-white/5">
                  <span>LUT:</span>
                  <span className="text-on-surface font-semibold">PR-35MM-ACEScc</span>
                </div>
              </div>
            </div>

            {/* Right: Editor Grading Suite Stills */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-lg overflow-hidden bg-surface-container shadow-2xl border border-white/10">
                <img
                  alt="Pankaj Regar in post-production grading suite"
                  className="w-full aspect-[4/3] object-cover object-center filter contrast-105 brightness-95"
                  src="/assets/images/pankaj_regar_portrait.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-error rec-pulse"></span>
                  <span className="font-meta-timecode text-xs text-on-surface tracking-widest">
                    {timecode}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row md:items-end justify-between gap-3 p-4 bg-surface-container-lowest/90 backdrop-blur-md rounded border border-white/10">
                  <div>
                    <span className="font-meta-timecode text-[10px] text-secondary tracking-widest uppercase font-bold">
                      Lead Editorial &amp; Finisher
                    </span>
                    <p className="font-headline-md text-lg text-on-surface font-semibold">Pankaj Regar</p>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      London / Mumbai / Remote High-Security Stream
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-code text-xs px-2.5 py-1 bg-surface-container-high rounded text-on-surface border border-white/5">
                      COLORIST
                    </span>
                    <span className="font-label-code text-xs px-2.5 py-1 bg-surface-container-high rounded text-on-surface border border-white/5">
                      SUPERVISING EDITOR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Scoreboard (Stats Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-lg bg-surface-container-low shadow-sm flex flex-col justify-between border border-white/5">
            <span className="font-meta-timecode text-[11px] text-secondary uppercase tracking-widest font-bold">
              Industry Tenure
            </span>
            <span className="font-headline-xl text-3xl sm:text-5xl text-on-surface my-2 font-semibold">8+</span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              Years direct cutting &amp; post direction
            </span>
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low shadow-sm flex flex-col justify-between border border-white/5">
            <span className="font-meta-timecode text-[11px] text-secondary uppercase tracking-widest font-bold">
              Delivered Reels
            </span>
            <span className="font-headline-xl text-3xl sm:text-5xl text-on-surface my-2 font-semibold">140+</span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              Commercial, automotive &amp; music masters
            </span>
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low shadow-sm flex flex-col justify-between border border-white/5">
            <span className="font-meta-timecode text-[11px] text-secondary uppercase tracking-widest font-bold">
              Streaming Reach
            </span>
            <span className="font-headline-xl text-3xl sm:text-5xl text-on-surface my-2 font-semibold">12M+</span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              Organic audience visual impressions
            </span>
          </div>
          <div className="p-6 rounded-lg bg-surface-container-low shadow-sm flex flex-col justify-between border border-white/5">
            <span className="font-meta-timecode text-[11px] text-secondary uppercase tracking-widest font-bold">
              Jury Honors
            </span>
            <span className="font-headline-xl text-3xl sm:text-5xl text-on-surface my-2 font-semibold">06</span>
            <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              Cannes Lions &amp; Berlin Commercial Shortlists
            </span>
          </div>
        </div>

        {/* Origin & Trajectory with Dynamic Waveform Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                ORIGIN &amp; TRAJECTORY
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface uppercase font-semibold">
              From boutique cutting rooms to global broadcast airwaves.
            </h2>
            <div className="p-4 bg-surface-container-lowest rounded-lg shadow-sm border border-white/5 flex flex-col gap-2">
              <div className="flex items-center justify-between text-on-surface-variant text-xs">
                <span className="font-label-code">PULSE / RHYTHMIC DENSITY</span>
                <span className="font-label-code text-secondary font-bold">24.000 FPS</span>
              </div>
              <PulseCanvas />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 text-on-surface-variant font-body-md text-sm sm:text-base leading-relaxed">
            <p>
              Trained within dark offline boutique edit suites in New Delhi and polished through demanding post pipelines in Soho, London, Pankaj approaches the editing timeline as a musical staff. Rhythm is not merely matching cuts on action; it is choreographing tension, subverting gaze, and releasing breath precisely when the audience anticipates certainty.
            </p>
            <p>
              Specializing in premium automotive films, music videos, luxury brand manifestos, and psychological narrative shorts, his work is identified by its tactile sound-driven pacing, deliberate pauses, and analog-authentic color depth. Every sequence is scrutinized frame-by-frame under true DCI reference monitoring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-surface-container-low rounded border border-white/5">
                <span className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-semibold">
                  Psychological Pacing
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Calibrated temporal compression to evoke visceral empathy and heightened kinetic response.
                </p>
              </div>
              <div className="p-4 bg-surface-container-low rounded border border-white/5">
                <span className="font-label-caps text-xs text-on-surface uppercase block mb-1 font-semibold">
                  Invisible Continuum
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Seamless sound design interaction where SFX transitions dictate visual reveals without mechanical jarring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Collaborative Workflow */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/5 pb-3">
            <div>
              <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface uppercase font-semibold">
                The 4-Step Collaborative Workflow
              </h2>
            </div>
            <span className="font-label-code text-xs text-on-surface-variant">
              END-TO-END POST PIPELINE SPEC // V4.8
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-meta-timecode text-xs px-2.5 py-1 bg-surface-container-highest rounded text-on-surface font-bold">
                    STEP 01
                  </span>
                  <span className="material-symbols-outlined text-secondary text-2xl">cloud_upload</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-semibold">Ingestion &amp; Vision</h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  High-speed camera card checksum ingestion, Frame.io project integration, script notes breakdown, and lookbook alignment with client creative leads.
                </p>
              </div>
              <div className="mt-6 pt-3 flex items-center justify-between font-label-code text-xs text-on-surface-variant border-t border-white/5">
                <span>TOOLS</span>
                <span className="text-secondary font-bold">Silverstack / Frame.io</span>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-meta-timecode text-xs px-2.5 py-1 bg-surface-container-highest rounded text-on-surface font-bold">
                    STEP 02
                  </span>
                  <span className="material-symbols-outlined text-secondary text-2xl">movie_filter</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-semibold">Assembly &amp; Cut</h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Offline rough cut construction, structural rhythm experimentation, alternate takes comparison, and synchronized temp score arrangement.
                </p>
              </div>
              <div className="mt-6 pt-3 flex items-center justify-between font-label-code text-xs text-on-surface-variant border-t border-white/5">
                <span>TOOLS</span>
                <span className="text-secondary font-bold">Premiere Pro / Avid</span>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-meta-timecode text-xs px-2.5 py-1 bg-surface-container-highest rounded text-on-surface font-bold">
                    STEP 03
                  </span>
                  <span className="material-symbols-outlined text-secondary text-2xl">palette</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-semibold">Sound &amp; Color</h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Full roundtrip to DaVinci Resolve Studio in ACEScc, custom film grain print passes, Foley track sweetening, and Dolby Atmos audio bed mastering.
                </p>
              </div>
              <div className="mt-6 pt-3 flex items-center justify-between font-label-code text-xs text-on-surface-variant border-t border-white/5">
                <span>TOOLS</span>
                <span className="text-secondary font-bold">Resolve / ProTools</span>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low rounded-lg shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-meta-timecode text-xs px-2.5 py-1 bg-surface-container-highest rounded text-on-surface font-bold">
                    STEP 04
                  </span>
                  <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                </div>
                <h3 className="font-headline-md text-lg text-on-surface mb-2 font-semibold">Master Delivery</h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  ProRes 4444 XQ uncompressed outputs, SMPTE DCI-compliant theatrical DCP packages, and customized 9:16 / 1:1 multi-platform social deliverables.
                </p>
              </div>
              <div className="mt-6 pt-3 flex items-center justify-between font-label-code text-xs text-on-surface-variant border-t border-white/5">
                <span>TOOLS</span>
                <span className="text-secondary font-bold">DCP-o-matic / FFmpeg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post-Production Technical Suite Console Specs */}
        <div className="rounded-xl bg-surface-container-low p-6 sm:p-10 shadow-lg flex flex-col gap-8 border border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/5 pb-4">
            <div>
              <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                CONSOLE SPECIFICATION
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface uppercase font-semibold">
                Post-Production Technical Suite
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest rounded border border-white/5">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-meta-timecode text-xs text-on-surface tracking-wider font-bold">
                CALIBRATED REC.709 &amp; DCI-P3
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 bg-surface-container-lowest rounded-lg flex flex-col gap-2 border border-white/5">
              <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
              <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">Workstation Rig</span>
              <p className="font-headline-md text-lg text-on-surface font-semibold">Apple Mac Studio</p>
              <ul className="font-body-sm text-xs text-on-surface-variant space-y-1 mt-1">
                <li>• M2 Ultra 24-core CPU / 76-core GPU</li>
                <li>• 128GB Unified High-Bandwidth Memory</li>
                <li>• DaVinci Resolve Advanced Surface</li>
                <li>• Avid Artist Mix Motorized Faders</li>
              </ul>
            </div>

            <div className="p-5 bg-surface-container-lowest rounded-lg flex flex-col gap-2 border border-white/5">
              <span className="material-symbols-outlined text-secondary text-3xl">tv</span>
              <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">Reference Vision</span>
              <p className="font-headline-md text-lg text-on-surface font-semibold">Sony BVM-HX310</p>
              <ul className="font-body-sm text-xs text-on-surface-variant space-y-1 mt-1">
                <li>• 31-inch 4K HDR Critical Reference</li>
                <li>• 1,000 Nits True Black Dual-Layer LCD</li>
                <li>• Calman Hardware 3D LUT Profiles</li>
                <li>• UltraStudio 4K Extreme 12G-SDI</li>
              </ul>
            </div>

            <div className="p-5 bg-surface-container-lowest rounded-lg flex flex-col gap-2 border border-white/5">
              <span className="material-symbols-outlined text-secondary text-3xl">hard_drive</span>
              <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">Storage Matrix</span>
              <p className="font-headline-md text-lg text-on-surface font-semibold">120TB NVMe RAID</p>
              <ul className="font-body-sm text-xs text-on-surface-variant space-y-1 mt-1">
                <li>• 10GbE Fibre Channel Direct Backbone</li>
                <li>• 2,800 MB/s Sustained Read/Write</li>
                <li>• Encrypted LTO-8 Archival Tape Vault</li>
                <li>• Offsite Real-Time Cloud Replication</li>
              </ul>
            </div>

            <div className="p-5 bg-surface-container-lowest rounded-lg flex flex-col gap-2 border border-white/5">
              <span className="material-symbols-outlined text-secondary text-3xl">movie</span>
              <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">Emulation Science</span>
              <p className="font-headline-md text-lg text-on-surface font-semibold">ACEScc Pipeline</p>
              <ul className="font-body-sm text-xs text-on-surface-variant space-y-1 mt-1">
                <li>• Kodak 2383 / Fuji 3513 Print Profiles</li>
                <li>• Custom Photochemical Halation Math</li>
                <li>• Seamless Alexa 35 &amp; RED V-Raptor Match</li>
                <li>• Scene-Referred Wide Gamut Grading</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Editorial Collaboration & Availability CTA */}
        <div className="p-6 sm:p-10 rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="flex flex-col gap-1">
            <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
              POST-PRODUCTION COLLABORATION &amp; AVAILABILITY
            </span>
            <h3 className="font-headline-lg text-2xl text-on-surface uppercase font-semibold">
              Ready to shape your next picture?
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              Now locking dates for Q3 commercial campaigns, international music videos, and cinematic series editing.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary transition-colors font-label-caps text-xs uppercase tracking-widest font-semibold rounded-full shadow-md"
            >
              Request Suite Availability
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
