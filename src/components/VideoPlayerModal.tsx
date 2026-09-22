import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, Calendar, Phone, ExternalLink } from 'lucide-react';
import { TikTokTour } from '../types';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: TikTokTour | null;
  onScheduleTour: (title: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  tour,
  onScheduleTour
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm sm:max-w-md h-[88vh] max-h-[780px] bg-black border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 text-white/80 hover:text-white rounded-full bg-black/60 hover:bg-black border border-white/20 transition-colors cursor-pointer"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Media Canvas */}
        <div className="absolute inset-0 z-0 bg-neutral-950">
          {tour.videoPreviewUrl ? (
            <video
              src={tour.videoPreviewUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />
          ) : (
            <img
              src={tour.thumbnail}
              alt={tour.title}
              className="w-full h-full object-cover brightness-90"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none" />
        </div>

        {/* Top Header */}
        <div className="relative z-10 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-bold text-white tracking-wide">
              TikTok Tour • {tour.views} views
            </span>
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-full bg-black/60 text-white border border-white/20 mr-10"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
          </button>
        </div>

        {/* Center Play Button Overlay */}
        <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-black/70 border-2 border-[#D4AF37] flex items-center justify-center text-white">
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </div>
          )}
        </div>

        {/* Bottom TikTok UI & Action Bar */}
        <div className="relative z-10 p-5 pt-0 flex items-end justify-between gap-4">
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-[#D4AF37]">@mi.realty.group.houston</span>
              <span className="text-[10px] bg-[#D4AF37] text-black font-extrabold px-1.5 py-0.2 rounded">VIP</span>
            </div>

            <p className="text-xs sm:text-sm text-white font-medium leading-snug drop-shadow-md mb-2">
              {tour.title}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 text-[10px] text-amber-200/80 mb-3">
              {tour.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  onScheduleTour(tour.title);
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] py-3 rounded-xl transition-all shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Schedule Tour Of This Home</span>
              </button>

              <a
                href="https://instagram.com/mi.realty.group.houston"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white/80 hover:text-white bg-black/60 border border-white/20 py-2 rounded-lg"
              >
                <span>Follow @mi.realty.group.houston</span>
                <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* Right Action Stack */}
          <div className="flex flex-col items-center gap-3 shrink-0 text-white">
            <button
              onClick={() => setLiked(!liked)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-full bg-black/70 flex items-center justify-center border border-white/10 ${liked ? 'text-red-500' : 'text-white'}`}>
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              </div>
              <span className="text-[10px] font-bold mt-0.5">{tour.likes}</span>
            </button>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center border border-white/10">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold mt-0.5">{tour.comments}</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center border border-white/10">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold mt-0.5">{tour.shares}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
