import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin, Sparkles, Calendar, Eye, FileText, ChevronRight } from 'lucide-react';
import { FEATURED_PROPERTIES, SUGAR_LAND_COMMUNITIES } from '../data/properties';
import { NewBuildHome } from '../types';

interface FeaturedBuildsProps {
  onScheduleTour: (home: NewBuildHome) => void;
  onOpenGallery: (home: NewBuildHome, imageIndex: number) => void;
  onGetList: () => void;
}

export const FeaturedBuilds: React.FC<FeaturedBuildsProps> = ({
  onScheduleTour,
  onOpenGallery,
  onGetList
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sugar-land' | 'luxury'>('all');

  const filteredProperties = FEATURED_PROPERTIES.filter((home) => {
    if (activeTab === 'sugar-land') return home.price <= 600000;
    if (activeTab === 'luxury') return home.price > 600000;
    return true;
  });

  return (
    <section id="featured-builds" className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Builder Allocations</span>
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured New Builds
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mt-2">
              Hand-selected move-in ready and designer spec homes across Sugar Land, Riverstone, and Aliana with negotiated buyer incentives.
            </p>
          </div>

          {/* Filter Tabs & Lead Button */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              All Builds (3)
            </button>
            <button
              onClick={() => setActiveTab('sugar-land')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'sugar-land'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Starting $506K
            </button>
            <button
              onClick={() => setActiveTab('luxury')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                activeTab === 'luxury'
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Luxury Estates $600K+
            </button>
          </div>
        </div>

        {/* 3 Houses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProperties.map((home) => (
            <article
              key={home.id}
              id={`property-card-${home.id}`}
              className="group bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900">
                <img
                  src={home.images[0]}
                  alt={`${home.title} in ${home.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Status & Incentive Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                  <span className="inline-flex items-center text-[11px] font-bold tracking-wider uppercase bg-black/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-amber-300/40 shadow-sm">
                    {home.status}
                  </span>
                  {home.badge && (
                    <span className="inline-flex items-center text-[11px] font-extrabold tracking-wider bg-red-600/90 text-white px-2.5 py-1 rounded-full shadow-md animate-pulse">
                      {home.badge}
                    </span>
                  )}
                </div>

                {/* Hero Badge for Sovereign if present */}
                {home.heroBadge && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block text-[11px] sm:text-xs font-bold text-amber-200 bg-black/85 backdrop-blur-md px-3 py-1 rounded-lg border border-[#D4AF37]/50 shadow-md">
                      ✨ {home.heroBadge}
                    </span>
                  </div>
                )}

                {/* Quick Gallery Hover Button */}
                <button
                  onClick={() => onOpenGallery(home, 0)}
                  aria-label={`View photo gallery for ${home.title}`}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/80 hover:bg-[#D4AF37] text-white hover:text-black transition-colors cursor-pointer"
                  title="View Photos"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Community & Location */}
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{home.community} • {home.city}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-luxury text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-2">
                    {home.title}
                  </h3>

                  {/* Price Bar */}
                  <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-white/50 block">Special Price</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">
                        {home.formattedPrice}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-emerald-400 font-semibold block">
                        Est. ${home.estimatedPayment}
                      </span>
                      <span className="text-[10px] text-white/50">Builder: {home.builder}</span>
                    </div>
                  </div>

                  {/* Specs Pill Grid: Beds, Baths, SQFT */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-black/40 rounded-xl border border-white/5 text-center mb-4">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-white/60 mb-0.5">
                        <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[11px] uppercase tracking-wider">Beds</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white">{home.beds}</span>
                    </div>

                    <div className="border-x border-white/10">
                      <div className="flex items-center justify-center gap-1 text-white/60 mb-0.5">
                        <Bath className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[11px] uppercase tracking-wider">Baths</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white">{home.baths}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1 text-white/60 mb-0.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-[11px] uppercase tracking-wider">SQFT</span>
                      </div>
                      <span className="text-base sm:text-lg font-bold text-white">{home.sqft.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Key Highlights Bullet list */}
                  <ul className="space-y-1.5 text-xs text-white/80 mb-5">
                    {home.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold text-sm leading-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onScheduleTour(home)}
                    className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8972E] hover:brightness-110 active:scale-98 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-black" />
                    <span>Schedule Private Tour</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenGallery(home, 0)}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{home.images.length} Photos</span>
                    </button>

                    <button
                      onClick={onGetList}
                      className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-amber-300 hover:text-amber-200 bg-amber-950/20 hover:bg-amber-950/40 border border-[#D4AF37]/30 py-2 rounded-lg transition-all cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Spec Sheet</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Communities Quick Bar & Get Full List Trigger */}
        <div className="mt-16 bg-[#121212] border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
              Looking for a different layout or neighborhood?
            </span>
            <h3 className="font-luxury text-xl sm:text-2xl font-bold text-white">
              Access 50+ Off-Market & Inventory Sugar Land New Builds
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {SUGAR_LAND_COMMUNITIES.map((c) => (
                <span
                  key={c.name}
                  className="text-xs text-white/70 bg-black/60 px-3 py-1 rounded-full border border-white/10"
                >
                  <strong className="text-amber-300">{c.name}:</strong> {c.homesCount} ({c.priceFrom})
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onGetList}
            id="featured-get-all-list-btn"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] px-6 py-3.5 rounded-xl transition-all shadow-lg cursor-pointer active:scale-95"
          >
            <span>Get Complete List</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
