import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { NewBuildHome, TourBookingData } from '../types';
import { FEATURED_PROPERTIES } from '../data/properties';

interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedHome?: NewBuildHome | null;
  defaultNote?: string;
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
  selectedHome,
  defaultNote
}) => {
  const [formData, setFormData] = useState<TourBookingData>({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '2:00 PM - 3:30 PM (Afternoon VIP)',
    propertyId: selectedHome ? selectedHome.id : 'general-tour',
    preApproved: 'Yes, pre-approved'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedHome) {
      setFormData((prev) => ({
        ...prev,
        propertyId: selectedHome.id
      }));
    }
  }, [selectedHome]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-luxury text-2xl font-bold text-white">
              Private Tour Confirmed!
            </h3>
            <p className="text-sm text-white/80">
              Thank you, <strong className="text-amber-300">{formData.name}</strong>. Your private new build VIP tour has been scheduled for <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.timeSlot}</strong>.
            </p>
            <p className="text-xs text-white/60">
              An MI Realty Group specialist will text your meeting point at Sugar Land Town Square / Builder Model Park and verify $10,000 builder incentives before arrival.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="tel:8325574001"
                className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] py-3 rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: (832) 557-4001</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-white/60 hover:text-white underline py-2"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                VIP Model Walkthrough
              </span>
              <h3 className="font-luxury text-2xl font-bold text-white">
                Schedule Private Tour
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Zero pressure, dedicated buyer advocacy. We review builder structural plans and negotiate on your behalf.
              </p>
            </div>

            {selectedHome && (
              <div className="bg-black/50 border border-[#D4AF37]/30 rounded-xl p-3.5 flex items-center gap-3 mb-5">
                <img
                  src={selectedHome.images[0]}
                  alt={selectedHome.title}
                  className="w-16 h-12 object-cover rounded-lg shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[11px] text-[#D4AF37] font-semibold block truncate">
                    {selectedHome.community}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate">
                    {selectedHome.title}
                  </h4>
                  <span className="text-xs font-extrabold text-amber-200">
                    {selectedHome.formattedPrice} • {selectedHome.beds} Beds • {selectedHome.sqft} SQFT
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                  Home of Interest
                </label>
                <select
                  value={formData.propertyId}
                  onChange={(e) => setFormData({ ...formData, propertyId: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-white text-xs outline-none"
                >
                  <option value="sugar-land-sovereign">The Sovereign at Riverstone ($506,990 - 4 Beds)</option>
                  <option value="aliane-grandview">The Grandview Modern ($629,000 - 5 Beds)</option>
                  <option value="telfair-avalon">The Avalon Estate ($749,500 - 5 Beds)</option>
                  <option value="general-tour">Custom Multi-Home Sugar Land Tour (3-4 models)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                    Cell Phone <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(832) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-white text-xs outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-white text-xs outline-none"
                  >
                    <option value="10:00 AM - 11:30 AM (Morning)">10:00 AM - 11:30 AM (Morning)</option>
                    <option value="2:00 PM - 3:30 PM (Afternoon VIP)">2:00 PM - 3:30 PM (Afternoon)</option>
                    <option value="5:30 PM - 7:00 PM (Twilight Tour)">5:30 PM - 7:00 PM (Twilight Tour)</option>
                    <option value="Weekend Flexible">Weekend Flexible</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 py-3.5 rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Private Tour Appointment</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/50 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Free Buyer Service • The builder pays our commission</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
