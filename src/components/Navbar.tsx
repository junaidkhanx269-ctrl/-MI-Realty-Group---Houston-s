import React, { useState } from 'react';
import { Phone, Calendar, Instagram, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onScheduleClick: () => void;
  onGetListClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick, onGetListClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/25 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-brand-link">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1A1A1A] via-[#121212] to-[#0A0A0A] border border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:border-[#E5C158] transition-colors">
              <span className="font-luxury font-black text-xl text-[#D4AF37] tracking-tighter">
                MI
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-luxury text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                MI REALTY GROUP
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#D4AF37] uppercase font-medium">
                Houston's New Build Experts
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#featured-builds"
              className="text-xs tracking-widest uppercase text-white/80 hover:text-[#D4AF37] transition-colors font-medium"
            >
              Featured Builds
            </a>
            <a
              href="#why-choose-us"
              className="text-xs tracking-widest uppercase text-white/80 hover:text-[#D4AF37] transition-colors font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#video-tours"
              className="text-xs tracking-widest uppercase text-white/80 hover:text-[#D4AF37] transition-colors font-medium"
            >
              Video Tours
            </a>
            <a
              href="#contact-section"
              className="text-xs tracking-widest uppercase text-white/80 hover:text-[#D4AF37] transition-colors font-medium"
            >
              Sugar Land & Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://instagram.com/mi.realty.group.houston"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @mi.realty.group.houston"
              className="p-2 rounded-lg text-white/70 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              title="@mi.realty.group.houston"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="tel:8325574001"
              id="nav-call-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#1f1f1f] border border-[#D4AF37]/50 hover:border-[#D4AF37] px-4 py-2.5 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>(832) 557-4001</span>
            </a>

            <button
              onClick={onScheduleClick}
              id="nav-schedule-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8972E] hover:brightness-110 active:scale-95 px-4 py-2.5 rounded-lg transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Tour</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:8325574001"
              className="p-2 text-[#D4AF37] bg-white/5 rounded-lg border border-[#D4AF37]/30"
              aria-label="Call (832) 557-4001"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0F0F0F] border-b border-[#D4AF37]/30 px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-amber-200">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Houston's Certified New Build Specialists</span>
          </div>
          <div className="flex flex-col space-y-3 font-medium text-sm tracking-wide">
            <a
              href="#featured-builds"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-[#D4AF37] py-1"
            >
              Featured New Builds
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-[#D4AF37] py-1"
            >
              Why Choose MI Realty
            </a>
            <a
              href="#video-tours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-[#D4AF37] py-1"
            >
              TikTok Video Tours
            </a>
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-[#D4AF37] py-1"
            >
              Sugar Land Map & Contact
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:8325574001"
              className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#1A1A1A] border border-[#D4AF37] py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call (832) 557-4001</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="flex items-center justify-center gap-2 text-sm font-bold text-black bg-[#D4AF37] py-3 rounded-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Private Tour</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGetListClick();
              }}
              className="text-xs text-center text-amber-300 underline py-1"
            >
              Get List of Available New Builds
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
