import React from 'react';
import { Phone, Calendar, Download } from 'lucide-react';

interface StickyCallBarProps {
  onScheduleClick: () => void;
  onGetListClick: () => void;
}

export const StickyCallBar: React.FC<StickyCallBarProps> = ({
  onScheduleClick,
  onGetListClick
}) => {
  return (
    <div
      id="sticky-call-bottom-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#D4AF37]/40 py-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Side: Brand hint on desktop */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white/80 font-medium">New Build Specialists On Call:</span>
          <span className="text-[#D4AF37] font-bold">Sugar Land & Greater Houston</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          {/* Direct Phone Call Button */}
          <a
            href="tel:8325574001"
            id="sticky-bottom-call-btn"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 active:scale-95 px-5 py-3 rounded-xl shadow-lg shadow-[#D4AF37]/25 transition-all min-h-[44px]"
          >
            <Phone className="w-4 h-4 text-black animate-pulse" />
            <span>Call (832) 557-4001</span>
          </a>

          {/* Schedule Tour Button */}
          <button
            onClick={onScheduleClick}
            id="sticky-bottom-schedule-btn"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#242424] border border-[#D4AF37]/60 active:scale-95 px-4 py-3 rounded-xl shadow-md transition-all min-h-[44px] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span className="whitespace-nowrap">Schedule Tour</span>
          </button>

          {/* Quick List Button (Desktop only to prevent clutter) */}
          <button
            onClick={onGetListClick}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white bg-black/50 border border-white/10 px-3.5 py-3 rounded-xl hover:border-[#D4AF37] transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Get $10k List</span>
          </button>
        </div>
      </div>
    </div>
  );
};
