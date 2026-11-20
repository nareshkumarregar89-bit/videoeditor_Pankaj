import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSmpteTimecode } from '../hooks/useSmpteTimecode';

export default function ServicesRates() {
  const timecode = useSmpteTimecode();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqItems = [
    {
      q: 'How does the remote review workflow function internationally?',
      a: 'Sessions are hosted over Frame.io for asynchronous timestamped feedback and annotations. For real-time grading, live NDI feeds or calibrated Louper streams provide sub-second latency directly to your desktop or iPad Pro with Rec.709 color fidelity.',
    },
    {
      q: 'What is the typical turnaround timeline for a 60-second commercial spot?',
      a: 'Standard offline assembly is typically delivered within 3-4 working days from raw footage ingest. Full online conforms, final color passes, and sound mastering complete within 2-3 days following lock, totaling 6-7 business days for an uncompromised master.',
    },
    {
      q: 'What is your revision and fine-tuning policy?',
      a: 'All standard commercial bookings include 2 structured revision cycles post-rough cut. Revisions are tracked via timecoded markers on Frame.io to ensure unambiguous creative clarity and zero wasted iterations.',
    },
    {
      q: 'Can you handle raw camera footage ingestion from high-speed film shoots?',
      a: 'Yes. Our studio maintains high-speed 10GbE network storage arrays and dual LTO-8 tape archiving. We routinely handle 8K Cinema RAW, REDCODE RAW, Phantom Flex 4K, and 16-bit uncompressed DPX/TIFF scans from photochemically processed 35mm film stock.',
    },
    {
      q: 'How are audio deliverables handled for international broadcast standards?',
      a: 'Audio mixes are delivered fully compliant with EBU R128 (-23 LUFS) for Europe, ATSC A/85 (-24 LUFS) for North America, and -14 LUFS for streaming platforms (YouTube, Spotify, Apple). All discrete stems (Dialogue, Music, SFX) are exported at 24-bit 48kHz WAV.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Section 01: Post-Production Disciplines */}
      <section className="w-full px-4 sm:px-gutter py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs uppercase text-secondary tracking-[0.2em] font-bold">
                [ 01 ] POST-PRODUCTION CAPABILITIES
              </span>
              <span className="font-meta-timecode text-xs text-on-surface-variant uppercase">
                {timecode}
              </span>
            </div>
            <div className="h-0.5 w-full bg-surface-container-high"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01 Lead Editorial */}
            <div className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 sm:p-8 rounded flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[360px] border border-white/5">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-headline-xl text-[120px] select-none text-on-surface font-bold">
                01
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                    DISCIPLINE // TEMPORAL
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">content_cut</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  Lead Editorial &amp; Direction
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Narrative shaping, rhythm calibration, and structural pacing. Specialized in precision offline assemblies, high-velocity music video syncs, and cinematic commercial cutdowns.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 mt-6 pt-4 bg-surface-container-lowest/60 p-3 rounded relative z-10 border border-white/5">
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>TOOLCHAIN</span>
                  <span className="text-on-surface font-semibold">PREMIERE PRO / DAVINCI</span>
                </div>
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>TIMECODE ACCURACY</span>
                  <span className="text-secondary font-semibold">SUB-FRAME SAMPLE SYNC</span>
                </div>
              </div>
            </div>

            {/* 02 Master Color Grading */}
            <div className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 sm:p-8 rounded flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[360px] border border-white/5">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-headline-xl text-[120px] select-none text-on-surface font-bold">
                02
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                    DISCIPLINE // CHROMATIC
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">palette</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  Master Color Grading
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  HDR10 and Dolby Vision certified suites. Full color-managed pipeline, precision film stock emulation (Kodak 5219 / 250D), proprietary split-toning, and tactile halation synthesis.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 mt-6 pt-4 bg-surface-container-lowest/60 p-3 rounded relative z-10 border border-white/5">
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>CERTIFICATION</span>
                  <span className="text-on-surface font-semibold">DOLBY VISION / ACES 1.3</span>
                </div>
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>MONITORING</span>
                  <span className="text-secondary font-semibold">1000 NIT MASTER REC.2020</span>
                </div>
              </div>
            </div>

            {/* 03 Sound Design */}
            <div className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 sm:p-8 rounded flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[360px] border border-white/5">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-headline-xl text-[120px] select-none text-on-surface font-bold">
                03
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                    DISCIPLINE // ACOUSTIC
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">graphic_eq</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  Sound Design &amp; Sonic Mix
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Tactile foley layering, modular sub-bass pulses, and spatial sonic worldbuilding. Broadcast-compliant dialogue isolation, LUFS normalization (EBU R128 / ITU-R BS.1770-4), and discrete stem delivery.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 mt-6 pt-4 bg-surface-container-lowest/60 p-3 rounded relative z-10 border border-white/5">
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>STANDARDS</span>
                  <span className="text-on-surface font-semibold">-23 LUFS / -14 LUFS STREAM</span>
                </div>
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>DELIVERY FORMAT</span>
                  <span className="text-secondary font-semibold">5.1 SURROUND &amp; STEREO</span>
                </div>
              </div>
            </div>

            {/* 04 Motion Design */}
            <div className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 sm:p-8 rounded flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[360px] border border-white/5">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-headline-xl text-[120px] select-none text-on-surface font-bold">
                04
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                    DISCIPLINE // KINETIC
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">animation</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  Motion &amp; Film Typography
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Bespoke opening titles, typographic framing, 3D title identities, and microscopic technical HUD overlays. Dynamic visual pacing designed strictly to serve the filmic atmosphere without visual clutter.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 mt-6 pt-4 bg-surface-container-lowest/60 p-3 rounded relative z-10 border border-white/5">
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>SOFTWARE</span>
                  <span className="text-on-surface font-semibold">AFTER EFFECTS / BLENDER</span>
                </div>
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>RENDERING</span>
                  <span className="text-secondary font-semibold">32-BIT LINEAR OPENEXR</span>
                </div>
              </div>
            </div>

            {/* 05 DIT & On-Set Editorial */}
            <div className="group bg-surface-container hover:bg-surface-container-high transition-all p-6 sm:p-8 rounded flex flex-col justify-between relative overflow-hidden shadow-xl min-h-[360px] md:col-span-2 border border-white/5">
              <div className="absolute -right-6 -bottom-6 opacity-5 font-headline-xl text-[120px] select-none text-on-surface font-bold">
                05
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-meta-timecode text-xs text-secondary tracking-widest uppercase font-bold">
                    DISCIPLINE // PRODUCTION INTEGRATION
                  </span>
                  <span className="material-symbols-outlined text-primary text-[24px]">memory</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  DIT &amp; On-Set Editorial Consultation
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  Live-grade CDL workflows directly from cinema camera systems to client and production monitors. Checksum verification (Silverstack), fast H.264 / ProRes proxy pipelines for same-day assemblies, ensuring the vision captured on set transitions seamlessly to the final color conform.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 bg-surface-container-lowest/60 p-3 rounded relative z-10 border border-white/5">
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>LIVE GRADING</span>
                  <span className="text-on-surface font-semibold">POMFORT LIVEGRADE PRO</span>
                </div>
                <div className="flex items-center justify-between font-label-code text-xs text-on-surface-variant">
                  <span>CHECKSUM ARCHIVING</span>
                  <span className="text-secondary font-semibold">XXHASH64 &amp; MD5 VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Engagement Models & Rates Overview */}
      <section className="w-full px-4 sm:px-gutter py-16 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-[0.2em]">
                [ 02 ] ENGAGEMENT MODELS &amp; RATES
              </span>
              <span className="font-meta-timecode text-xs text-secondary uppercase font-bold">
                STANDARDIZED RATE TARIFF
              </span>
            </div>
            <div className="h-0.5 w-full bg-surface-container-high"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Commercial Day Rate */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-xl relative border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs text-secondary uppercase tracking-widest font-bold">
                    SPRINT ENGAGEMENT
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-high font-meta-timecode text-[10px] text-on-surface rounded uppercase font-bold">
                    FLEXIBLE
                  </span>
                </div>
                <h4 className="font-headline-md text-2xl text-on-surface font-semibold">
                  Commercial Day Rate
                </h4>
                <div className="flex items-baseline gap-2 my-1">
                  <span className="font-headline-xl text-3xl sm:text-4xl text-primary font-bold">₹35,000</span>
                  <span className="font-meta-timecode text-[11px] text-on-surface-variant uppercase">
                    / 10-HR SUITE DAY
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Ideal for commercial spots, brand anthems, and quick-turn agency revisions. Includes dedicated studio access, live Frame.io scrubbing, and high-priority turnarounds.
                </p>
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Dedicated offline or color grading session</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Live streaming color reviews (NDI / Louper)</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Same-day revision sync via Frame.io</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-primary-container text-on-primary font-label-caps text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-secondary hover:text-on-secondary transition-colors rounded shadow-md"
                >
                  <span>Book Day Sprints</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Feature / Narrative Flat */}
            <div className="bg-surface-container-high p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-2xl relative border border-secondary/30">
              <div className="absolute top-0 right-0 px-3 py-1 bg-secondary text-on-secondary font-meta-timecode text-[10px] uppercase tracking-widest font-bold rounded-bl">
                SIGNATURE SUITE
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs text-secondary-fixed uppercase tracking-widest font-bold">
                    NARRATIVE FULL-CYCLE
                  </span>
                </div>
                <h4 className="font-headline-md text-2xl text-on-surface font-semibold">
                  Feature &amp; Narrative Retainer
                </h4>
                <div className="flex items-baseline gap-2 my-1">
                  <span className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold">
                    Custom
                  </span>
                  <span className="font-meta-timecode text-[11px] text-on-surface-variant uppercase">
                    / RETAINER ARCHITECTURE
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface leading-relaxed">
                  Complete post supervision from assembly lock through color pass, acoustic mixing, and final theatrical DCP mastering. Bespoke workflows for productions demanding total craftsmanship.
                </p>
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Full script breakdown &amp; assembly alignment</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Cinema DCI-P3 grade &amp; Dolby Atmos conform</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Theatrical DCI-compliant DCP packaging</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-on-surface text-surface font-label-caps text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-secondary hover:text-on-secondary transition-colors rounded shadow-lg"
                >
                  <span>Request Treatment Quote</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Rush Pipeline */}
            <div className="bg-surface-container p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-xl relative border border-white/5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-xs text-error uppercase tracking-widest font-bold">
                    CRITICAL BROADCAST
                  </span>
                  <span className="px-2 py-0.5 bg-error-container font-meta-timecode text-[10px] text-error rounded uppercase font-bold">
                    48-HR WINDOW
                  </span>
                </div>
                <h4 className="font-headline-md text-2xl text-on-surface font-semibold">
                  Rush Turnaround Pipeline
                </h4>
                <div className="flex items-baseline gap-2 my-1">
                  <span className="font-headline-xl text-3xl sm:text-4xl text-primary font-bold">+50%</span>
                  <span className="font-meta-timecode text-[11px] text-on-surface-variant uppercase">
                    BASE STANDARD TARIFF
                  </span>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Emergency broadcast deadlines, midnight cutdowns, and rapid campaign launches. Dedicated round-the-clock machine allocation with real-time editorial delivery.
                </p>
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Continuous 24/7 cutting room cycles</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Immediate master stems exports (ProRes 4444)</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface font-body-sm text-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                    <span>Dedicated encrypted high-speed Aspera pipeline</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 bg-surface-container-high text-on-surface font-label-caps text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-secondary hover:text-on-secondary transition-colors rounded border border-white/5"
                >
                  <span>Activate Rush Pipeline</span>
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Deliverables Specification Guarantee */}
      <section className="w-full px-4 sm:px-gutter py-16 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-[0.2em]">
                [ 03 ] DELIVERABLES SPECIFICATION
              </span>
              <span className="font-meta-timecode text-xs text-secondary uppercase font-bold">
                100% UNCOMPROMISED ARCHIVE
              </span>
            </div>
            <div className="h-0.5 w-full bg-surface-container-high"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container rounded-lg flex flex-col gap-3 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="font-meta-timecode text-xs text-secondary font-bold">DELIV // 01</span>
                <span className="material-symbols-outlined text-primary text-2xl">videocam</span>
              </div>
              <h5 className="font-headline-md text-lg text-on-surface font-semibold">ProRes 4444 XQ</h5>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Master archival grade with uncompressed 12-bit RGB 4:4:4 color channels and embedded clean audio tracks.
              </p>
              <span className="font-label-code text-xs text-primary mt-auto pt-2 border-t border-white/5">
                Clean &amp; Texted Masters
              </span>
            </div>

            <div className="p-6 bg-surface-container rounded-lg flex flex-col gap-3 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="font-meta-timecode text-xs text-secondary font-bold">DELIV // 02</span>
                <span className="material-symbols-outlined text-primary text-2xl">aspect_ratio</span>
              </div>
              <h5 className="font-headline-md text-lg text-on-surface font-semibold">Multi-Ratio Assets</h5>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Individually re-framed, dynamically re-composed deliverables in 9:16 vertical, 1:1 square, and 4:5 mobile formats.
              </p>
              <span className="font-label-code text-xs text-primary mt-auto pt-2 border-t border-white/5">
                9:16 / 1:1 / 4:5 Re-Framed
              </span>
            </div>

            <div className="p-6 bg-surface-container rounded-lg flex flex-col gap-3 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="font-meta-timecode text-xs text-secondary font-bold">DELIV // 03</span>
                <span className="material-symbols-outlined text-primary text-2xl">new_window</span>
              </div>
              <h5 className="font-headline-md text-lg text-on-surface font-semibold">Full Stem Archives</h5>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Discrete 24-bit 48kHz WAV exports for Dialogue, Sound Effects (SFX), Foley, Ambient Atmosphere, and Music (M&amp;E).
              </p>
              <span className="font-label-code text-xs text-primary mt-auto pt-2 border-t border-white/5">
                Broadcast Ready Mixes
              </span>
            </div>

            <div className="p-6 bg-surface-container rounded-lg flex flex-col gap-3 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="font-meta-timecode text-xs text-secondary font-bold">DELIV // 04</span>
                <span className="material-symbols-outlined text-primary text-2xl">code</span>
              </div>
              <h5 className="font-headline-md text-lg text-on-surface font-semibold">Timeline XML &amp; EDL</h5>
              <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                Standard Final Cut XML, CMX 3600 EDL, and DaVinci Resolve Project Archives (.dra) for total studio interoperability.
              </p>
              <span className="font-label-code text-xs text-primary mt-auto pt-2 border-t border-white/5">
                Pure Studio Conforms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Interactive FAQ Accordion */}
      <section className="w-full px-4 sm:px-gutter py-16 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-[0.2em]">
                [ 04 ] WORKFLOW PROTOCOLS &amp; FAQ
              </span>
              <span className="font-meta-timecode text-xs text-secondary uppercase font-bold">
                OPERATIONAL DETAILS
              </span>
            </div>
            <div className="h-0.5 w-full bg-surface-container-high"></div>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl mx-auto w-full">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-surface-container rounded-lg overflow-hidden border border-white/5"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    type="button"
                  >
                    <span className="font-headline-md text-base sm:text-lg text-on-surface font-medium">
                      {item.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-secondary transition-transform duration-300 text-xl ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 border-t border-white/5 pt-3 animate-fadeIn">
                      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Editorial Commission Callout */}
      <section className="w-full px-4 sm:px-gutter py-16">
        <div className="max-w-7xl mx-auto p-6 sm:p-10 md:p-12 bg-surface-container-low rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-meta-timecode text-xs text-secondary uppercase tracking-[0.25em] font-bold">
              Booking &amp; Scheduling
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl uppercase text-on-surface tracking-tight font-semibold">
              Require custom post-production scoping?
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              Submit your treatment deck or project timeline to receive a calibrated tariff breakdown and availability schedule within 12 hours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary transition-colors font-label-caps text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg"
            >
              Start Project Brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
