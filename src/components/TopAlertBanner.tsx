import React from 'react';
import { Flame, ArrowRight, Sparkles } from 'lucide-react';

interface TopAlertBannerProps {
  onClaimClick: () => void;
}

export const TopAlertBanner: React.FC<TopAlertBannerProps> = ({ onClaimClick }) => {
  return (
    <aside aria-label="Special Offer" id="top-red-alert-banner" className="relative z-50 bg-gradient-to-r from-red-700 via-red-600 to-rose-700 text-white shadow-md border-b border-red-500/30">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide">
          <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full animate-pulse">
            <Flame className="w-3.5 h-3.5 text-amber-300" />
          </span>
          <span className="uppercase tracking-wider font-extrabold text-amber-200">
            Limited Time:
          </span>
          <span className="text-white drop-shadow-sm font-bold">
            $10k Closing Costs on Sugar Land New Builds!
          </span>
          <span className="hidden md:inline-flex items-center text-xs font-normal text-white/90 bg-black/25 px-2 py-0.5 rounded-full">
            <Sparkles className="w-3 h-3 mr-1 text-amber-300" /> 3 Builder Allocations Left
          </span>
        </div>

        <button
          id="banner-claim-btn"
          onClick={onClaimClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/40 hover:bg-black/60 active:scale-95 text-amber-300 border border-amber-300/40 hover:border-amber-300 px-3.5 py-1 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer"
        >
          <span>Claim $10k Credit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
