import React from 'react';
import { Phone, Calendar, Sparkles, MapPin, CheckCircle, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScheduleTour: () => void;
  onGetList: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleTour, onGetList }) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-[#D4AF37]/30">
      {/* Background: Modern luxury Texas house image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
          alt="Modern Luxury Texas New Build Home in Sugar Land"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          fetchPriority="high"
        />
        {/* Luxury multi-layer dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/95" />
      </div>

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        
        {/* Location / Authority Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 text-xs sm:text-sm font-semibold text-[#D4AF37] mb-6 shadow-xl">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>SUGAR LAND, TEXAS • GREATER HOUSTON NEW CONSTRUCTION</span>
        </div>

        {/* Required Badge: "Flex Room Downstairs + Huge Game Room Upstairs" */}
        <div
          id="hero-flex-game-badge"
          className="mb-5 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#E5C158]/30 to-[#D4AF37]/20 border border-[#D4AF37] backdrop-blur-md text-white text-xs sm:text-sm md:text-base font-bold tracking-wide shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-amber-100">
            Flex Room Downstairs + Huge Game Room Upstairs
          </span>
        </div>

        {/* Headline: "🔥 $10,000 Towards Closing Costs - Sugar Land New Build Alert!" */}
        <h1
          id="hero-headline"
          className="font-luxury text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none max-w-4xl drop-shadow-md mb-6"
        >
          <span className="inline-block mr-2">🔥</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-100">
            $10,000 Towards Closing Costs
          </span>
          <span className="block text-white text-2xl sm:text-4xl md:text-5xl mt-2 font-serif font-bold">
            — Sugar Land New Build Alert!
          </span>
        </h1>

        {/* Sub: "4 Beds | 3.5 Baths | 2,829 SQFT | Starting from $506,990" */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-white/95 max-w-3xl mb-8 drop-shadow bg-black/40 px-4 sm:px-6 py-2.5 rounded-xl border border-white/10"
        >
          <span className="text-amber-300 font-bold">4 Beds</span>
          <span className="mx-2 text-[#D4AF37]">|</span>
          <span className="text-amber-300 font-bold">3.5 Baths</span>
          <span className="mx-2 text-[#D4AF37]">|</span>
          <span className="text-amber-300 font-bold">2,829 SQFT</span>
          <span className="mx-2 text-[#D4AF37]">|</span>
          <span className="text-white font-extrabold">Starting from $506,990</span>
        </p>

        {/* Value Points Pill Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-3xl w-full mb-10 text-xs sm:text-sm text-white/90">
          <div className="flex items-center justify-center gap-2 bg-black/50 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Highland / Toll Brothers Quality</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/50 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Fort Bend ISD Top Ranked Schools</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/50 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Zero Buyer Agent Fees To You</span>
          </div>
        </div>

        {/* Required Hero Buttons: "Call (832) 557-4001" + "Schedule Private Tour" */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-md sm:max-w-lg mb-6">
          <a
            href="tel:8325574001"
            id="hero-call-button"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 active:scale-98 px-6 py-4 rounded-xl shadow-xl shadow-[#D4AF37]/20 transition-all cursor-pointer border border-[#F5D77F]"
          >
            <Phone className="w-5 h-5 text-black shrink-0" />
            <span>Call (832) 557-4001</span>
          </a>

          <button
            onClick={onScheduleTour}
            id="hero-schedule-tour-button"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#141414]/90 hover:bg-[#1f1f1f] active:scale-98 border-2 border-[#D4AF37] hover:border-[#E5C158] px-6 py-4 rounded-xl shadow-xl transition-all cursor-pointer backdrop-blur-md"
          >
            <Calendar className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <span>Schedule Private Tour</span>
          </button>
        </div>

        {/* Lead Form Trigger Prompt */}
        <button
          onClick={onGetList}
          id="hero-get-list-link"
          className="text-xs sm:text-sm font-semibold tracking-wider text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-[#D4AF37]/60 hover:decoration-[#D4AF37] transition-all cursor-pointer"
        >
          Or click here to receive the Complete List of Available Sugar Land New Builds →
        </button>

        {/* Subtle Scroll Indicator */}
        <a
          href="#featured-builds"
          aria-label="Scroll to Featured New Builds"
          className="mt-12 inline-flex flex-col items-center gap-1 text-white/50 hover:text-[#D4AF37] transition-colors"
        >
          <span className="text-[10px] tracking-widest uppercase">Explore Inventory</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </a>
      </div>
    </section>
  );
};
