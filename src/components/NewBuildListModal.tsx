import React, { useState } from 'react';
import { X, Download, CheckCircle, Flame, Shield, Phone, Sparkles } from 'lucide-react';
import { LeadFormData } from '../types';

interface NewBuildListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSuccess: (data: LeadFormData) => void;
}

export const NewBuildListModal: React.FC<NewBuildListModalProps> = ({
  isOpen,
  onClose,
  onLeadSuccess
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('$500,000 - $650,000');
  const [downloadReady, setDownloadReady] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDownloadReady(true);
      onLeadSuccess({ name, phone, budget });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141414] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {downloadReady ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-luxury text-2xl font-bold text-white">
              Your Sugar Land New Build List Is Ready!
            </h3>

            <p className="text-xs sm:text-sm text-white/80">
              We dispatched the custom inventory link and the <strong className="text-amber-300">$10,000 Closing Cost Voucher</strong> via SMS to <strong className="text-white">{phone}</strong>.
            </p>

            {/* Simulated Live List Card */}
            <div className="bg-black/60 border border-[#D4AF37]/40 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300">Sugar_Land_New_Builds_Report.pdf</span>
                <span className="text-[10px] bg-[#D4AF37]/20 text-amber-200 px-2 py-0.5 rounded">Ready to View</span>
              </div>
              <p className="text-[11px] text-white/70">
                • 14 Riverstone 4-Beds (starting $506,990)<br />
                • 19 Aliana & Harvest Green Designer Spec Builds<br />
                • Official $10,000 Closing Cost Credit Authorization
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:8325574001"
                className="flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] py-3 rounded-xl shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call (832) 557-4001</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 py-3 rounded-xl border border-white/20 transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded-full bg-red-600/30 border border-red-500">
                <Flame className="w-3.5 h-3.5 text-amber-300" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                Exclusive Builder Inventory
              </span>
            </div>

            <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              Get List of Available New Builds
            </h3>

            <p className="text-xs sm:text-sm text-white/70 mb-5">
              Instantly receive the private unadvertised list of move-in ready homes in Sugar Land, Riverstone, and Aliana, including our <strong className="text-amber-200">$10,000 Closing Cost Assistance Voucher</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                  Phone Number (for SMS dispatch) <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(832) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-1">
                  Target Price Range <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-white text-xs outline-none cursor-pointer"
                >
                  <option value="$450,000 - $550,000">$450,000 - $550,000 (Hero $506K Riverstone Model)</option>
                  <option value="$550,000 - $700,000">$550,000 - $700,000 (Grandview & Aliana)</option>
                  <option value="$700,000 - $900,000">$700,000 - $900,000 (Telfair / Sweetwater)</option>
                  <option value="$900,000+">$900,000+ (Luxury Estate Custom Builds)</option>
                </select>
              </div>

              {/* Incentive Highlight */}
              <div className="p-3 rounded-xl bg-amber-950/20 border border-[#D4AF37]/40 text-[11px] text-amber-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Includes $10,000 Closing Cost Builder Incentive Certificate.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 py-4 rounded-xl shadow-xl transition-all cursor-pointer"
              >
                {loading ? (
                  <span>Preparing List...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-black" />
                    <span>Get List of Available New Builds</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/50 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>MI Realty Group Houston • No broker spam guarantee</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
