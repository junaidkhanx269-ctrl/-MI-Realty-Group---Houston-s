import React, { useState } from 'react';
import { Play, Pause, Heart, MessageCircle, Share2, Bookmark, Music2, Sparkles, Volume2, VolumeX, ExternalLink, Calendar } from 'lucide-react';
import { TIKTOK_TOURS } from '../data/tours';
import { TikTokTour } from '../types';

interface VideoToursProps {
  onScheduleTour: (tourTitle: string) => void;
  onOpenVideoModal: (tour: TikTokTour) => void;
}

export const VideoTours: React.FC<VideoToursProps> = ({ onScheduleTour, onOpenVideoModal }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="video-tours" className="py-20 sm:py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Viral Houston Model Walkthroughs</span>
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Video Tours
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mt-2">
              Experience Sugar Land's most breathtaking new builds right from your phone. Follow our TikTok channel for daily unreleased walkthroughs and builder pricing breakdowns.
            </p>
          </div>

          {/* Social Follow Link */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/mi.realty.group.houston"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-black/60 hover:bg-black border border-[#D4AF37]/50 hover:border-[#D4AF37] px-4 py-2.5 rounded-xl transition-all shadow-md"
            >
              <span>@mi.realty.group.houston</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>
          </div>
        </div>

        {/* Vertical TikTok Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIKTOK_TOURS.map((tour) => {
            const isPlaying = playingId === tour.id;

            return (
              <div
                key={tour.id}
                id={`tiktok-card-${tour.id}`}
                onClick={() => onOpenVideoModal(tour)}
                className="group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Media Container: Video preview or high-res thumbnail */}
                <div className="absolute inset-0 z-0 bg-neutral-900">
                  {isPlaying && tour.videoPreviewUrl ? (
                    <video
                      src={tour.videoPreviewUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted={muted}
                      playsInline
                    />
                  ) : (
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                      loading="lazy"
                    />
                  )}
                  {/* Subtle TikTok vertical vignette overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
                </div>

                {/* Top Overlay: TikTok handle and Views pill */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      {tour.views} views
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMuted(!muted);
                    }}
                    className="p-1.5 rounded-full bg-black/60 text-white/80 hover:text-white border border-white/10 transition-colors"
                    title={muted ? 'Unmute' : 'Mute'}
                  >
                    {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </button>
                </div>

                {/* Center Play/Pause Trigger */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <button
                    onClick={(e) => togglePlay(tour.id, e)}
                    className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all cursor-pointer"
                    aria-label={isPlaying ? 'Pause video tour' : 'Play video tour'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    )}
                  </button>
                </div>

                {/* TikTok UI Overlay: Right Sidebar & Bottom Caption */}
                <div className="relative z-10 p-4 pt-0 flex items-end justify-between gap-3">
                  {/* Bottom Caption & Handle */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                      <span className="text-[#D4AF37]">@mi.realty.group.houston</span>
                      <span className="text-[10px] bg-[#D4AF37] text-black font-extrabold px-1 rounded">VIP</span>
                    </div>

                    <p className="text-xs text-white/95 line-clamp-3 font-medium leading-snug drop-shadow-md mb-2">
                      {tour.title}
                    </p>

                    {/* Music track ticker */}
                    <div className="flex items-center gap-1.5 text-[10px] text-white/70 overflow-hidden">
                      <Music2 className="w-3 h-3 text-[#D4AF37] shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="truncate">{tour.sound}</span>
                    </div>

                    {/* Quick Schedule button on card */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onScheduleTour(tour.title);
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#E5C158] text-black py-2 rounded-lg transition-all shadow-md"
                    >
                      <Calendar className="w-3 h-3 text-black" />
                      <span>Tour This Home</span>
                    </button>
                  </div>

                  {/* Right Action Icons (TikTok Style) */}
                  <div className="flex flex-col items-center gap-3 shrink-0 text-white/90">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold mt-0.5">{tour.likes}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:text-amber-300 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold mt-0.5">{tour.comments}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:text-amber-300 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold mt-0.5">Save</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:text-amber-300 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold mt-0.5">{tour.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Follow us banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-white/60">
            Want to see a specific model home in Riverstone, Aliana, or Telfair?{' '}
            <a
              href="https://instagram.com/mi.realty.group.houston"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] font-semibold hover:underline"
            >
              DM us on Instagram @mi.realty.group.houston
            </a>{' '}
            for an on-demand custom video walkthrough!
          </p>
        </div>
      </div>
    </section>
  );
};
