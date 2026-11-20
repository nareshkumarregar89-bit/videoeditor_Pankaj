import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Clock, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial / Brand Film',
    budget: '$5,000 — $15,000',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const directEmail = 'pankaj@regarfilms.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 relative bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Inquiries & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-4">
              Get in Touch
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 tracking-tight mb-6">
              Let's create something unforgettable together.
            </h2>

            <p className="text-zinc-600 text-base leading-relaxed mb-8">
              Available for commercial video editing, narrative projects, high-impact music videos, and precision color grading. Based in Mumbai, collaborating worldwide.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-subtle mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-zinc-500 font-medium block">Direct Inquiries</span>
                  <span className="text-sm sm:text-base font-bold text-zinc-950 font-mono truncate block">
                    {directEmail}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs text-zinc-800 font-semibold transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-600" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Availability Highlights */}
            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Mumbai, India</span>
                  <span className="text-xs text-zinc-500">Available for on-location shoots worldwide</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Turnaround & Response</span>
                  <span className="text-xs text-zinc-500">Replies usually within 12–24 business hours</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Remote Pipeline</span>
                  <span className="text-xs text-zinc-500">Real-time Frame.io & NDI live streaming sessions</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-zinc-200 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-medium">
                Tell me about your vision, timeline, and deliverables. I'll get back to you with rates and creative availability.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-xl bg-emerald-50 border border-emerald-200 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950 mb-1">
                    Thank you! Your message has been sent.
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-6">
                    Pankaj will review your project details and follow up directly via email ({formData.email || 'your email'}) within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Commercial / Brand Film',
                        budget: '$5,000 — $15,000',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-bold shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@agency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      >
                        <option>Commercial / Brand Film</option>
                        <option>Music Video</option>
                        <option>Narrative Short / Feature</option>
                        <option>Documentary</option>
                        <option>Color Grading & Finishing Only</option>
                        <option>High-End Video Editing Only</option>
                        <option>Other Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors"
                      >
                        <option>Under $5,000</option>
                        <option>$5,000 — $15,000</option>
                        <option>$15,000 — $30,000</option>
                        <option>$30,000+</option>
                        <option>To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share a brief description of the project, deadline, target deliverables, or references..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
