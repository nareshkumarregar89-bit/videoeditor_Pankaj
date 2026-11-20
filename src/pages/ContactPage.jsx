import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Clock, Globe, Instagram, ArrowUpRight } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';

export default function ContactPage() {
  const { submitInquiry } = useProjects();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial / Brand Film',
    budget: '₹25,000 — ₹75,000',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const directEmail = 'pankajdangriwal54@gmail.com';
  const instaUrl = 'https://www.instagram.com/pach.motion_1909/';
  const instaHandle = '@pach.motion_1909';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await submitInquiry(formData);
    setLoading(false);
    if (res?.success) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-zinc-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 tracking-tight mb-4">
            Video Editing Bookings & Inquiries
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Available for commercial campaigns, high-impact music videos, narrative shorts, and color grading for clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-4">
              Let's create something unforgettable.
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-8">
              Whether you need high-impact commercial editing, festival narrative cuts, or precision timeline finishing, reach out with your project parameters.
            </p>

            {/* Direct Email Card */}
            <div className="p-5 rounded-3xl bg-white border border-zinc-200 shadow-subtle mb-8 flex items-center justify-between gap-4">
              <a
                href={`mailto:${directEmail}`}
                className="flex items-center gap-3 truncate group/mail"
                title="Send email to Pankaj"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 group-hover/mail:bg-amber-500 group-hover/mail:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-zinc-500 font-medium block">Direct Email</span>
                  <span className="text-sm sm:text-base font-bold text-zinc-950 font-mono truncate block group-hover/mail:text-amber-600 transition-colors">
                    {directEmail}
                  </span>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs text-zinc-800 font-bold transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-600" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Instagram Card */}
            <div className="p-5 rounded-3xl bg-white border border-zinc-200 shadow-subtle mb-8 flex items-center justify-between gap-4">
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 truncate group/insta"
                title={`Open Instagram profile ${instaHandle}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500/10 via-pink-500/15 to-purple-500/15 border border-pink-500/20 text-pink-600 flex items-center justify-center shrink-0 group-hover/insta:bg-gradient-to-tr group-hover/insta:from-amber-500 group-hover/insta:to-pink-600 group-hover/insta:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-zinc-500 font-medium block">Instagram Direct</span>
                  <span className="text-sm sm:text-base font-bold text-zinc-950 font-mono truncate block group-hover/insta:text-pink-600 transition-colors">
                    {instaHandle}
                  </span>
                </div>
              </a>

              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs text-zinc-800 font-bold transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>DM</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            </div>

            {/* Availability details */}
            <div className="space-y-4 text-sm text-zinc-600">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Editorial & Finishing Studio</span>
                  <span className="text-xs text-zinc-500">Collaborating with commercial agencies & directors</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Response Time</span>
                  <span className="text-xs text-zinc-500">Replies usually within 12–24 business hours</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-amber-600 shrink-0 shadow-subtle">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-950 font-bold block">Remote Sessions</span>
                  <span className="text-xs text-zinc-500">Real-time Frame.io & NDI live streaming</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 text-left">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-zinc-500 mb-6 font-medium">
                Share your deliverables, timeline, and scope to initiate booking.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 animate-fadeIn">
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
                        budget: '₹25,000 — ₹75,000',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold shadow-sm"
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
                        <option>Under ₹25,000</option>
                        <option>₹25,000 — ₹75,000</option>
                        <option>₹75,000 — ₹1,50,000</option>
                        <option>₹1,50,000 — ₹3,00,000</option>
                        <option>₹3,00,000+ (High-End Master)</option>
                        <option>To be discussed / Flexible</option>
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
                    className="w-full py-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50"
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
    </div>
  );
}
