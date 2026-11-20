import React, { useState } from 'react';
import { SERVICES } from '../data/skills';
import { Clapperboard, Film, Palette, Volume2, ArrowRight, Check, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Clapperboard,
  Film,
  Palette,
  Volume2,
};

const FAQS = [
  {
    q: 'What video codecs and raw rushes pipelines do you support?',
    a: 'We natively ingest and master all high-end cinema RAW codecs (REDCODE R3D, Sony Venice X-OCN, Blackmagic RAW), Apple ProRes 4444 XQ, Avid DNxHR, and 35mm / 16mm photochemical film scans.'
  },
  {
    q: 'How does remote editing and client review work?',
    a: 'We utilize Frame.io Camera-to-Cloud (C2C) for instant dailies ingestion and timecoded visual feedback. For real-time live grading and fine cut screening sessions, we broadcast ultra-low-latency 10-bit 4:2:2 NDI and Louper video streams directly to your browser or calibrated iPad Pro.'
  },
  {
    q: 'What is the standard turnaround time for commercial spots?',
    a: 'Standard commercial cuts (30s / 60s / 90s) typically see a first assembly rough cut within 48–72 hours of rushes delivery. Complete offline/online mastering, color grade, and multi-format delivery (16:9, 9:16, 4:5) are achieved within 5–7 business days depending on visual complexity.'
  },
  {
    q: 'What cinema color standards do you deliver in?',
    a: 'We master in wide-gamut calibrated color spaces and deliver DCI-P3 D65 (Cinema DCP), Rec.709 2.4 (Broadcast & Web), and HDR10 / Dolby Vision (1000 nits) mastering upon client specification.'
  }
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="pt-28 pb-24 bg-zinc-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Capabilities & Deliverables
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-4">
            Services & Rates
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            From raw rushes ingestion and narrative pacing to obsessive timeline rhythm and theater-ready color mastering.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Film;

            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between shadow-subtle text-left"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-3xl font-black text-zinc-200 group-hover:text-amber-500/50 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-950 mb-1 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3">
                    Deliverables Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-zinc-950 group-hover:text-amber-600 transition-colors"
                  >
                    Inquire For This Service
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Stage Post Workflow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-card mb-20 text-left">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
              Collaborative Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950">
              The 4-Stage Post-Production Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-amber-700 font-bold text-xs block mb-2">STAGE 01</span>
              <h4 className="font-bold text-zinc-950 mb-1 text-sm">Ingestion & Sync</h4>
              <p className="text-xs text-zinc-600">8K/4K raw ingestion, checksum verification, audio sync, and ProRes proxy generation.</p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-amber-700 font-bold text-xs block mb-2">STAGE 02</span>
              <h4 className="font-bold text-zinc-950 mb-1 text-sm">Assembly & Fine Cut</h4>
              <p className="text-xs text-zinc-600">Pacing passes, rhythm timing against score, match cuts, and fine-tuning review iterations.</p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-amber-700 font-bold text-xs block mb-2">STAGE 03</span>
              <h4 className="font-bold text-zinc-950 mb-1 text-sm">Color & Audio Finish</h4>
              <p className="text-xs text-zinc-600">Cinema color grading, film emulation, halation curves, and -14/-24 LUFS audio mix.</p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <span className="font-mono text-amber-700 font-bold text-xs block mb-2">STAGE 04</span>
              <h4 className="font-bold text-zinc-950 mb-1 text-sm">Cinema DCI Delivery</h4>
              <p className="text-xs text-zinc-600">Uncompressed ProRes 4444 XQ masters, social cutdowns (9:16, 4:5), and DCP cinema package.</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto text-left mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Protocols, technical standards, and international collaboration details.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-subtle transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-zinc-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Start an Editing Inquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
