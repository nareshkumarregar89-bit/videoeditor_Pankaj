import React, { useState } from 'react';
import { useSmpteTimecode } from '../hooks/useSmpteTimecode';

export default function ContactBooking() {
  const timecode = useSmpteTimecode();

  const [formData, setFormData] = useState({
    agency: '',
    producer: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    deliveryWindow: '',
    budgetTier: '₹50k-₹1.5L',
    deckLink: '',
    creativeVision: '',
    ndaAccepted: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('PR-9482');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRef = 'PR-' + Math.floor(1000 + Math.random() * 9000);
    setRefId(newRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      agency: '',
      producer: '',
      email: '',
      phone: '',
      projectType: 'Commercial',
      deliveryWindow: '',
      budgetTier: '₹50k-₹1.5L',
      deckLink: '',
      creativeVision: '',
      ndaAccepted: true,
    });
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner & Title */}
      <section className="w-full px-4 sm:px-gutter pt-8 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-meta-timecode text-xs text-secondary uppercase tracking-[0.25em] font-bold">
              PROJECT TRANSMISSION // EDITORIAL DISPATCH
            </span>
          </div>
          <h1 className="font-headline-xl text-3xl sm:text-5xl text-on-surface uppercase tracking-tight font-semibold">
            Initiate Production Brief
          </h1>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl">
            Booking lead editorial direction, offline commercial montage, and master ACES color passes for late Q2 through Q4 2026.
          </p>
        </div>
      </section>

      {/* Main Layout: Form (8 cols) & Studio Dossier (4 cols) */}
      <section className="w-full px-4 sm:px-gutter py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Editorial Dispatch Interactive Form (8 cols) */}
          <div className="lg:col-span-8 flex flex-col bg-surface-container-low rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="flex items-center justify-between pb-3 mb-6 bg-surface-container px-4 py-2.5 rounded border border-white/5">
              <div className="flex items-center gap-2 font-label-code text-xs text-primary uppercase font-bold">
                <span className="material-symbols-outlined text-base text-secondary">tune</span>
                <span>EDITORIAL DISPATCH • FORM VER 4.8</span>
              </div>
              <div className="font-meta-timecode text-xs text-on-surface-variant uppercase">
                {timecode}
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-4 shadow-xl border border-secondary/30">
                  <span className="material-symbols-outlined text-3xl text-secondary">check</span>
                </div>
                <h3 className="font-headline-md text-2xl uppercase text-on-surface mb-2 font-semibold">
                  Editorial Brief Transmitted
                </h3>
                <p className="font-meta-timecode text-xs text-secondary tracking-widest uppercase mb-2">
                  LOG REFERENCE // DISPATCH-REF #{refId}
                </p>
                <p className="font-body-md text-sm text-primary max-w-md mx-auto mb-6 leading-relaxed">
                  Log reference assigned. Pankaj or blackframe exec management will respond within 12 hours with availability slate &amp; call confirmation.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-surface-container text-on-surface hover:bg-surface-container-high font-label-code text-xs uppercase tracking-wider rounded border border-white/5 cursor-pointer"
                >
                  Transmit Another Record
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Identity Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider flex items-center justify-between">
                      <span>01. Agency / Production Company</span>
                      <span className="text-secondary font-meta-timecode font-bold">*REQ</span>
                    </label>
                    <input
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      className="w-full bg-surface-container px-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="e.g. Somesuch / Wieden+Kennedy"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider flex items-center justify-between">
                      <span>02. Producer or Creative Lead</span>
                      <span className="text-secondary font-meta-timecode font-bold">*REQ</span>
                    </label>
                    <input
                      value={formData.producer}
                      onChange={(e) => setFormData({ ...formData, producer: e.target.value })}
                      className="w-full bg-surface-container px-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="Full Name &amp; Role"
                      required
                      type="text"
                    />
                  </div>
                </div>

                {/* Comms Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider flex items-center justify-between">
                      <span>03. Direct Email Address</span>
                      <span className="text-secondary font-meta-timecode font-bold">*REQ</span>
                    </label>
                    <input
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-container px-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="producer@agency.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider">
                      <span>04. WhatsApp / Phone / Signal</span>
                    </label>
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface-container px-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="+44 / +91 / +1 (Direct contact)"
                      type="tel"
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider">
                    <span>05. Project Classification</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {['Commercial', 'Music Video', 'Documentary', 'Fashion Film', 'Narrative / Ep'].map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`flex flex-col items-center justify-center p-3 rounded cursor-pointer transition-all border ${
                            isSelected
                              ? 'bg-secondary-container border-secondary text-on-secondary-container'
                              : 'bg-surface-container border-white/5 hover:bg-surface-container-high text-on-surface'
                          }`}
                        >
                          <span className="material-symbols-outlined text-xl mb-1">
                            {type === 'Commercial'
                              ? 'movie_filter'
                              : type === 'Music Video'
                              ? 'audiotrack'
                              : type === 'Documentary'
                              ? 'camera'
                              : type === 'Fashion Film'
                              ? 'styler'
                              : 'more_horiz'}
                          </span>
                          <span className="font-label-code text-[11px] uppercase tracking-wider text-center">
                            {type}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider">
                      <span>06. Target Delivery / Premiere Window</span>
                    </label>
                    <input
                      value={formData.deliveryWindow}
                      onChange={(e) => setFormData({ ...formData, deliveryWindow: e.target.value })}
                      className="w-full bg-surface-container px-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="e.g. Q3 2026 / Mid-September Cut Lock"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider">
                      <span>07. Estimated Production Budget Tier</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { tier: '₹25k-₹50k', sub: 'Post / Quick Cut' },
                        { tier: '₹50k-₹1.5L', sub: 'Commercial Cut' },
                        { tier: '₹1.5L+', sub: 'Full Master Suite' },
                      ].map((b) => {
                        const isSelected = formData.budgetTier === b.tier;
                        return (
                          <button
                            key={b.tier}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetTier: b.tier })}
                            className={`flex flex-col items-center justify-center p-2.5 rounded cursor-pointer border ${
                              isSelected
                                ? 'bg-secondary-container border-secondary text-on-secondary-container'
                                : 'bg-surface-container border-white/5 hover:bg-surface-container-high text-on-surface'
                            }`}
                          >
                            <span className="font-label-code text-xs font-bold">{b.tier}</span>
                            <span className="font-meta-timecode text-[9px] text-on-surface-variant">
                              {b.sub}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Brief / Cloud Link */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider flex items-center justify-between">
                    <span>08. Treatment / Deck / Dropbox / Notion Link</span>
                    <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                      PWD-PROTECTED PREFERRED
                    </span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-lg">
                      link
                    </span>
                    <input
                      value={formData.deckLink}
                      onChange={(e) => setFormData({ ...formData, deckLink: e.target.value })}
                      className="w-full bg-surface-container pl-10 pr-4 py-3 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="https://notion.so/... or https://dropbox.com/s/..."
                      type="url"
                    />
                  </div>
                </div>

                {/* Project Vision Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-on-surface-variant tracking-wider flex items-center justify-between">
                    <span>09. Creative Vision, Tone &amp; Editorial Expectations</span>
                    <span className="text-secondary font-meta-timecode font-bold">*REQ</span>
                  </label>
                  <textarea
                    value={formData.creativeVision}
                    onChange={(e) => setFormData({ ...formData, creativeVision: e.target.value })}
                    className="w-full bg-surface-container p-4 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 rounded border border-white/5 focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Outline the narrative arc, visual references, pacing expectations, soundtrack concept, or intended color profile..."
                    required
                    rows="4"
                  ></textarea>
                </div>

                {/* Production Protocol Checklist */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-container p-3.5 rounded border border-white/5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      checked={formData.ndaAccepted}
                      onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
                      className="w-4 h-4 rounded bg-surface-container-lowest text-secondary focus:ring-0"
                      type="checkbox"
                    />
                    <span className="font-meta-timecode text-[10px] sm:text-xs text-on-surface uppercase">
                      Direct Non-Disclosure Agreement (NDA) on file prior to review
                    </span>
                  </label>
                  <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase">
                    SECURITY: AES-256
                  </span>
                </div>

                {/* Submission Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase tracking-widest">
                      DIRECT TO CUTTING ROOM PAGER
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary-container text-on-primary hover:bg-secondary hover:text-on-secondary transition-all font-label-caps text-xs uppercase tracking-widest font-semibold rounded flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <span>SEND EDITORIAL BRIEF</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: Direct Studio Dossier & Coordinates (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Live Suite Card */}
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-3 shadow-md border border-white/5">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="font-label-caps text-xs uppercase text-secondary tracking-widest font-bold">
                  TRANSMISSION CHANNELS
                </span>
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              </div>
              <div className="flex flex-col gap-1 bg-surface-container p-3 rounded border border-white/5">
                <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase font-bold">
                  Direct Inquiries
                </span>
                <a
                  className="font-label-code text-xs text-on-surface hover:text-secondary transition-colors font-medium"
                  href="mailto:contact@pankajregar.com"
                >
                  contact@pankajregar.com
                </a>
              </div>
              <div className="flex flex-col gap-1 bg-surface-container p-3 rounded border border-white/5">
                <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase font-bold">
                  Bookings &amp; Agency Slate
                </span>
                <a
                  className="font-label-code text-xs text-on-surface hover:text-secondary transition-colors font-medium"
                  href="mailto:bookings@pankajregar.com"
                >
                  bookings@pankajregar.com
                </a>
              </div>
              <div className="flex flex-col gap-1 bg-surface-container p-3 rounded border border-white/5">
                <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase font-bold">
                  Typical Latency
                </span>
                <span className="font-body-md text-xs text-primary">
                  &lt; 12 Hours (Commercial priority)
                </span>
              </div>
            </div>

            {/* Workflow & Availability */}
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-3 shadow-md border border-white/5">
              <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-widest font-bold">
                POST-PRODUCTION SUITE
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">terminal</span>
                  <div className="flex flex-col">
                    <span className="font-label-code text-xs text-on-surface font-semibold">
                      Master Editorial & Finishing Suite
                    </span>
                    <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                      Dedicated Timeline & Grading Rig
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">public</span>
                  <div className="flex flex-col">
                    <span className="font-label-code text-xs text-on-surface font-semibold">
                      Live Review & Frame.io Sessions
                    </span>
                    <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                      Real-time client streaming
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">flight_takeoff</span>
                  <div className="flex flex-col">
                    <span className="font-label-code text-xs text-on-surface font-semibold">
                      On-Set DIT / Editorial Suite Flyout
                    </span>
                    <span className="font-meta-timecode text-[10px] text-on-surface-variant">
                      Worldwide deployment on 48h notice
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social & Registry Links */}
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col gap-3 shadow-md border border-white/5">
              <span className="font-label-caps text-xs uppercase text-on-surface-variant tracking-widest font-bold">
                EDITORIAL &amp; SOCIAL CHANNELS
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  className="flex items-center justify-between p-2.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors border border-white/5"
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-label-code text-[11px] uppercase">Vimeo Pro</span>
                  <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors border border-white/5"
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-label-code text-[11px] uppercase">Behance</span>
                  <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors border border-white/5"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-label-code text-[11px] uppercase">LinkedIn</span>
                  <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors border border-white/5"
                  href="https://www.instagram.com/pach.motion_1909/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-label-code text-[11px] uppercase">Instagram (@pach.motion_1909)</span>
                  <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
                </a>
                <a
                  className="col-span-2 flex items-center justify-between p-2.5 bg-surface-container hover:bg-surface-container-high rounded text-on-surface transition-colors border border-white/5"
                  href="https://imdb.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-label-code text-[11px] uppercase">IMDb Archive Profile</span>
                  <span className="material-symbols-outlined text-xs text-secondary">open_in_new</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials & Endorsements Section */}
      <section className="w-full px-4 sm:px-gutter py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="font-label-caps text-xs uppercase text-secondary tracking-widest font-bold">
                // COLLABORATOR DISPATCH
              </span>
              <span className="font-meta-timecode text-xs text-on-surface-variant">
                [AGENCY &amp; STUDIO TESTIMONIALS]
              </span>
            </div>
            <span className="font-meta-timecode text-xs text-on-surface-variant hidden sm:inline">
              VERIFIED PROD LOGS 2024-2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-md relative border border-white/5">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-secondary text-3xl">format_quote</span>
                <p className="font-body-md text-sm text-primary italic leading-relaxed">
                  “Pankaj approaches editorial rhythm with the mathematical discipline of an architect and the intuition of a poet. His cut gave our global automotive spot its hypnotic gravity.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 bg-surface-container px-3 py-2 rounded border border-white/5">
                <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center font-label-code text-xs text-secondary font-bold">
                  AK
                </div>
                <div className="flex flex-col">
                  <span className="font-label-code text-xs text-on-surface font-semibold">Arjun Kapoor</span>
                  <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase">
                    Executive Producer • Commercial Films
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-md relative border border-white/5">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-secondary text-3xl">format_quote</span>
                <p className="font-body-md text-sm text-primary italic leading-relaxed">
                  “Turnaround was exceptional under an impossible 72-hour broadcast deadline. Pankaj preserved narrative coherence while elevating our brand look into high-concept cinema.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 bg-surface-container px-3 py-2 rounded border border-white/5">
                <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center font-label-code text-xs text-secondary font-bold">
                  EL
                </div>
                <div className="flex flex-col">
                  <span className="font-label-code text-xs text-on-surface font-semibold">Elena Lindqvist</span>
                  <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase">
                    Head of Creative • Nord House Berlin
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-md relative border border-white/5">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-outlined text-secondary text-3xl">format_quote</span>
                <p className="font-body-md text-sm text-primary italic leading-relaxed">
                  “Working with Pankaj on our artist's visual album was effortless. He has an innate pulse for sound sync and knows exactly when to hold a frame to let emotion land.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 mt-4 bg-surface-container px-3 py-2 rounded border border-white/5">
                <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center font-label-code text-xs text-secondary font-bold">
                  VS
                </div>
                <div className="flex flex-col">
                  <span className="font-label-code text-xs text-on-surface font-semibold">Vikram Sen</span>
                  <span className="font-meta-timecode text-[10px] text-on-surface-variant uppercase">
                    Head of Content • Sony Music Entertainment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
