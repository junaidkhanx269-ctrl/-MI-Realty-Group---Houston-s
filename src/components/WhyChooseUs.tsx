import React from 'react';
import { Award, DollarSign, Compass, ShieldCheck, Check, Phone, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onScheduleTour: () => void;
  onGetList: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onScheduleTour, onGetList }) => {
  const pillars = [
    {
      id: 'specialist',
      icon: Award,
      title: 'Houston New Build Specialist',
      tagline: "Builder Relationships That Work For You",
      description: "Navigating new construction requires specialized expertise. We work directly with top Houston & Sugar Land builders weekly, giving you access to unreleased lots, off-market inventory, and insider incentives before they hit the open market.",
      benefits: [
        'Direct access to Highland, Toll Brothers, Coventry & Perry Homes models',
        'Early-bird access to newly released cul-de-sac & waterfront homesites',
        '100% Free Buyer Representation — the builder covers our fee, never you',
        'Expert guidance on builder contracts, warranties & construction timelines'
      ]
    },
    {
      id: 'closing-cost',
      icon: DollarSign,
      title: 'Closing Cost Help & Builder Incentives',
      tagline: "Save Up To $10,000+ In Real Money",
      description: "Builders rarely discount list prices on paper, but we specialize in negotiating massive financing concessions. From our current $10,000 closing cost credit to 2-1 interest rate buy-downs, we maximize your purchasing power.",
      benefits: [
        '$10,000 towards closing costs on select Sugar Land inventory',
        'Permanent & temporary interest rate buy-down strategies (down to 4.99%*)',
        'Free builder upgrades negotiated (refrigerators, blinds, washer/dryers)',
        'Full review of builder lender versus independent mortgage broker rates'
      ]
    },
    {
      id: 'private-tours',
      icon: Compass,
      title: 'VIP Private Tours & Inspections',
      tagline: "No High-Pressure Sales Reps. Just Facts.",
      description: "Touring alone means facing builder sales agents whose fiduciary duty is to the builder. We escort you on private, zero-pressure walkthroughs and provide independent third-party inspection oversight at every stage.",
      benefits: [
        'Private chauffeured or VIP-scheduled model home walkthroughs',
        'Pre-pour foundation, pre-drywall, and final blue-tape punch-list audits',
        'Custom high-definition 4K video walkthroughs for busy or remote buyers',
        'Unbiased advice on resale value, lot elevation, and HOA restrictions'
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#0A0A0A] relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The MI Realty Group Advantage</span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Never walk into a builder sales office unrepresented. Here is how Houston's dedicated new construction team protects your wallet and your investment.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={`why-us-${pillar.id}`}
                className="bg-[#121212] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/50 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors shadow-lg">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300/80 block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {pillar.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#D4AF37]" />
                        </div>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onScheduleTour}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white bg-black/60 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Learn More About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner: Representation is 100% Free to Buyers */}
        <div className="bg-gradient-to-r from-[#141414] via-[#1c1a14] to-[#141414] border border-[#D4AF37] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black font-black flex items-center justify-center text-xl shrink-0">
              $0
            </div>
            <div>
              <h4 className="font-luxury text-lg sm:text-xl font-bold text-white">
                Buyer Representation Costs You Absolutely Nothing
              </h4>
              <p className="text-xs sm:text-sm text-white/70">
                In Texas, builder commissions are already factored into home prices. If you go alone, the builder keeps the savings—while leaving you without an advocate.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:8325574001"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-black border border-[#D4AF37] hover:bg-neutral-900 px-5 py-3 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>(832) 557-4001</span>
            </a>
            <button
              onClick={onGetList}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Get Free List</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
