import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Tag, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onBookLook: (lookTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onBookLook,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (currentIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, handleKeyDown]);

  if (!currentItem) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 cursor-pointer"
        aria-label="Cerrar visor de imagen"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 cursor-pointer"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-50 cursor-pointer"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div 
        className="relative max-w-5xl max-h-[92vh] w-full flex flex-col md:flex-row bg-[#1F191B] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Photograph */}
        <div className="flex-1 max-h-[60vh] md:max-h-[85vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Sidebar Info */}
        <div className="w-full md:w-80 p-6 sm:p-7 flex flex-col justify-between text-left bg-[#261F21] text-white border-t md:border-t-0 md:border-l border-white/10 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-[#8A384A] text-white text-[10px] uppercase tracking-widest font-semibold">
                {currentItem.categoryLabel}
              </span>
              <span className="text-[11px] text-white/50">
                {(currentIndex ?? 0) + 1} de {items.length}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-editorial font-normal leading-snug">
              {currentItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Tags */}
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-[#E8B4B8] font-medium">
                <Tag className="w-3 h-3" />
                <span>Detalles y etiquetas:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentItem.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-white/10 text-white/80 text-[11px]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                onClose();
                onBookLook(currentItem.title);
              }}
              className="w-full py-3 rounded-full bg-[#8A384A] hover:bg-[#A8455B] text-white text-xs uppercase tracking-[0.15em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E8B4B8]" />
              <span>Quiero este look</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
