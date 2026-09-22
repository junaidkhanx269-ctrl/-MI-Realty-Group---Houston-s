import React from 'react';
import { Phone, Instagram, MapPin, Mail, Shield, Home } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-white border-t border-[#D4AF37]/30 pt-16 pb-28 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black border border-[#D4AF37] flex items-center justify-center">
                <span className="font-luxury font-black text-lg text-[#D4AF37]">MI</span>
              </div>
              <div>
                <span className="font-luxury text-lg font-bold tracking-wider text-white block">
                  MI REALTY GROUP HOUSTON
                </span>
                <span className="text-xs text-[#D4AF37] uppercase tracking-widest block">
                  Houston's New Build Experts
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
              Specializing exclusively in Sugar Land, Riverstone, Aliana, and Greater Houston luxury new construction. From securing $10,000 builder closing incentives to VIP private tours and pre-drywall audits.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://instagram.com/mi.realty.group.houston"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-amber-200 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@mi.realty.group.houston</span>
              </a>

              <span className="text-white/30">•</span>

              <a
                href="tel:8325574001"
                className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>(832) 557-4001</span>
              </a>
            </div>
          </div>

          {/* Key Sugar Land Communities */}
          <div>
            <h4 className="font-luxury text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#D4AF37]">
              Top Communities
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#featured-builds" className="hover:text-[#D4AF37] transition-colors">Riverstone Luxury Enclave</a></li>
              <li><a href="#featured-builds" className="hover:text-[#D4AF37] transition-colors">Aliana Master-Planned</a></li>
              <li><a href="#featured-builds" className="hover:text-[#D4AF37] transition-colors">Telfair Custom Reserve</a></li>
              <li><a href="#featured-builds" className="hover:text-[#D4AF37] transition-colors">Imperial Sugar Land</a></li>
              <li><a href="#featured-builds" className="hover:text-[#D4AF37] transition-colors">Sienna Waterfronts</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-luxury text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#D4AF37]">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Sugar Land Town Square, Sugar Land, TX 77479</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:8325574001" className="text-white font-bold hover:text-[#D4AF37]">
                  (832) 557-4001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="https://instagram.com/mi.realty.group.houston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37]"
                >
                  @mi.realty.group.houston
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Required Bottom Legal & Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div className="flex items-center gap-2">
            <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold text-white/80">
              MI Realty Group Houston | (832) 557-4001
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:text-right">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#D4AF37]" /> Equal Housing Opportunity
            </span>
            <span>TREC Information About Brokerage Services</span>
            <span>Consumer Protection Notice</span>
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
