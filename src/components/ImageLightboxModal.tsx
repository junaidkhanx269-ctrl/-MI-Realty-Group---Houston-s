import React from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Phone } from 'lucide-react';
import { NewBuildHome } from '../types';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  home: NewBuildHome | null;
  initialIndex?: number;
  onScheduleTour: (home: NewBuildHome) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  home,
  initialIndex = 0,
  onScheduleTour
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, home]);

  if (!isOpen || !home) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? home.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === home.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-full max-h-[92vh] flex flex-col justify-between">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
              {home.community} • {home.city}
            </span>
            <h3 className="font-luxury text-base sm:text-xl font-bold text-white truncate max-w-md">
              {home.title} ({home.formattedPrice})
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60">
              {currentIndex + 1} / {home.images.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close photo gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Photo Area with Prev/Next Controls */}
        <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-950">
          <img
            src={home.images[currentIndex]}
            alt={`${home.title} view ${currentIndex + 1}`}
            className="w-full h-full object-contain max-h-[70vh]"
          />

          {/* Nav Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Thumbnails & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
          {/* Thumbnails */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {home.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border transition-all cursor-pointer ${
                  currentIndex === idx ? 'border-[#D4AF37] scale-105' : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Quick CTAs */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href="tel:8325574001"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-neutral-900 border border-white/20 hover:border-[#D4AF37] px-4 py-2.5 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>(832) 557-4001</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onScheduleTour(home);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] px-5 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Tour</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
