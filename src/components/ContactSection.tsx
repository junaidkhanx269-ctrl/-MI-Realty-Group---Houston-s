import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Mail, CheckCircle2, Download, Send, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  onLeadSuccess: (data: LeadFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onLeadSuccess }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    budget: '$500,000 - $650,000',
    timeline: 'Within 30-60 Days',
    desiredBeds: '4+ Bedrooms',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onLeadSuccess(formData);
    }, 600);
  };

  const instagramPosts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      caption: 'Another $10,000 closing credit secured for our clients in Sugar Land! 🍾🔑',
      likes: '1,420',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
      caption: 'Chef kitchen dreams in Riverstone. 4 beds, 3.5 baths, move-in ready! ✨',
      likes: '2,105',
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80',
      caption: 'Huge game room upstairs + downstairs flex office. Ask for the floor plan! 🎯',
      likes: '1,890',
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      caption: 'Toll Brothers modern elevation in Aliana. Private tours this weekend! 🏡',
      likes: '3,210',
    }
  ];

  return (
    <section id="contact-section" className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Builder Inventory & Private Tours</span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Connect With Houston's New Build Experts
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Tell us your criteria to receive the curated list of unadvertised Sugar Land new construction homes, pricing sheets, and $10,000 closing credit qualifications.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Form & Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Lead Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                  Exclusive Instant Access
                </span>
                <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white">
                  Get List of Available New Builds
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-200 bg-amber-950/40 border border-[#D4AF37]/40 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero Spam Guarantee</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-luxury text-2xl font-bold text-white">
                  List Sent To Your Phone & Ready!
                </h4>
                <p className="text-sm text-white/80 max-w-md mx-auto">
                  Thank you, <strong className="text-amber-300">{formData.name}</strong>. An MI Realty Group New Build Specialist will text your custom Sugar Land inventory list with the $10,000 closing credit vouchers to <strong className="text-white">{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:8325574001"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] px-6 py-3 rounded-xl shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now (832) 557-4001</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-white/60 hover:text-white underline py-2"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="lead-capture-form">
                
                {/* Form Fields: Name, Phone, Budget */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                    Your Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="e.g. Michael Jordan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-phone" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                      Cell Phone Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="(832) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-4 py-3 text-white placeholder-white/40 text-sm outline-none transition-all"
                    />
                    <span className="text-[10px] text-white/50 mt-1 block">
                      We will SMS the direct MLS & spec PDF to this number.
                    </span>
                  </div>

                  <div>
                    <label htmlFor="lead-budget" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                      Target Budget <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      id="lead-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-xl px-4 py-3 text-white text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="$450,000 - $550,000">$450,000 - $550,000 (Hero Model Range)</option>
                      <option value="$550,000 - $700,000">$550,000 - $700,000 (Riverstone / Aliana)</option>
                      <option value="$700,000 - $900,000">$700,000 - $900,000 (Telfair / Imperial)</option>
                      <option value="$900,000+">$900,000+ Luxury Custom Builds</option>
                      <option value="Under $450,000">Under $450,000 Houston Outskirts</option>
                    </select>
                  </div>
                </div>

                {/* Additional criteria */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-timeline" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                      Move-In Timeline
                    </label>
                    <select
                      id="lead-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-white text-sm outline-none cursor-pointer"
                    >
                      <option value="Immediate (Move-in ready)">Immediate (Move-in ready 0-30 days)</option>
                      <option value="Within 30-60 Days">30 - 60 Days</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Just Browsing New Builds">Just Browsing Available Models</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-beds" className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1.5">
                      Bedrooms Needed
                    </label>
                    <select
                      id="lead-beds"
                      value={formData.desiredBeds}
                      onChange={(e) => setFormData({ ...formData, desiredBeds: e.target.value })}
                      className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-white text-sm outline-none cursor-pointer"
                    >
                      <option value="4+ Bedrooms">4+ Beds (with Game Room)</option>
                      <option value="3 Bedrooms">3 Bedrooms</option>
                      <option value="5+ Bedrooms">5+ Bedrooms Luxury Estate</option>
                    </select>
                  </div>
                </div>

                {/* Closing Cost Checkbox */}
                <div className="bg-black/40 border border-[#D4AF37]/30 p-3.5 rounded-xl flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="incentive-check"
                    defaultChecked
                    className="mt-1 accent-[#D4AF37] w-4 h-4 rounded"
                  />
                  <label htmlFor="incentive-check" className="text-xs text-white/90 cursor-pointer">
                    <strong className="text-amber-300">Yes! Include the $10,000 Closing Cost Voucher</strong> and builder rate buy-down eligibility with my new build list.
                  </label>
                </div>

                {/* Primary Button: "Get List of Available New Builds" */}
                <button
                  type="submit"
                  id="lead-submit-btn"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 active:scale-98 py-4 rounded-xl shadow-xl shadow-[#D4AF37]/20 transition-all cursor-pointer"
                >
                  {submitting ? (
                    <span>Generating Custom List...</span>
                  ) : (
                    <>
                      <Download className="w-5 h-5 text-black" />
                      <span>Get List of Available New Builds</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-white/50 pt-2">
                  <span>🔒 Direct builder inventory • No spam</span>
                  <span>Call directly: (832) 557-4001</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Sugar Land Map & Office Contact Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Sugar Land Map Card */}
            <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    Territory Headquarters
                  </span>
                  <h4 className="font-luxury text-lg font-bold text-white">
                    Sugar Land, TX & Surrounding Corridor
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Fort Bend County</span>
                </div>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative aspect-[4/3] w-full bg-neutral-900">
                <iframe
                  title="Sugar Land TX Real Estate Territory Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110996.34751433292!2d-95.70014605051939!3d29.589833658597372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e4f48ffdc2e9%3A0x7d6a5035e4e8992e!2sSugar%20Land%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0 filter grayscale-[20%] contrast-110"
                  loading="lazy"
                  allowFullScreen
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md px-3 py-2 rounded-xl border border-[#D4AF37]/30 text-[11px] text-white/90 flex items-center justify-between">
                  <span>📍 Covering Riverstone, Aliana, Telfair & Missouri City</span>
                  <a
                    href="https://maps.google.com/?q=Sugar+Land+TX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] font-bold hover:underline inline-flex items-center gap-0.5"
                  >
                    Open <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone & Contact Info */}
              <div className="p-5 space-y-3 bg-[#171717]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Direct Real Estate Hotline</span>
                    <a
                      href="tel:8325574001"
                      className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      (832) 557-4001
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Official Instagram Channel</span>
                    <a
                      href="https://instagram.com/mi.realty.group.houston"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      @mi.realty.group.houston
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Office Location</span>
                    <span className="text-xs text-white/80">
                      Sugar Land Town Square, Sugar Land, TX 77479
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Instagram Feed Showcase & Link */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                <Instagram className="w-4 h-4" />
                <span>Instagram Feed</span>
              </div>
              <h3 className="font-luxury text-2xl font-bold text-white">
                Follow @mi.realty.group.houston
              </h3>
            </div>

            <a
              href="https://instagram.com/mi.realty.group.houston"
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-feed-main-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 px-5 py-2.5 rounded-xl transition-all shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4-Image Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/mi.realty.group.houston"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 block shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-medium line-clamp-2 mb-1">
                      {post.caption}
                    </p>
                    <span className="text-[11px] text-amber-300 font-bold">
                      ♥ {post.likes} likes
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
