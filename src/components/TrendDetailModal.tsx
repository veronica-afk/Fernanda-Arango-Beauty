import React from 'react';
import { X, Sparkles, Calendar, BookOpen, Check } from 'lucide-react';
import { TrendItem } from '../types';

interface TrendDetailModalProps {
  trend: TrendItem | null;
  onClose: () => void;
  onBookTrendStyle?: () => void;
}

export const TrendDetailModal: React.FC<TrendDetailModalProps> = ({
  trend,
  onClose,
  onBookTrendStyle,
}) => {
  if (!trend) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#292224]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F4] rounded-3xl shadow-2xl border border-[#E8D9D4] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner image */}
        <div className="relative h-60 sm:h-72 w-full bg-[#EAE0DC] overflow-hidden shrink-0">
          <img
            src={trend.image}
            alt={trend.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/85 via-[#292224]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#292224] transition-colors shadow-md z-10 cursor-pointer"
            aria-label="Cerrar artículo de tendencia"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Headline on image */}
          <div className="absolute bottom-5 left-6 right-6 text-white text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#8A384A] text-white px-2.5 py-0.5 rounded-full">
                {trend.category}
              </span>
              <span className="text-xs text-[#E8DDD8]">{trend.season}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-editorial font-normal leading-tight text-white">
              {trend.title}
            </h3>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          {/* Reading time */}
          <div className="flex items-center gap-2 text-xs text-[#8C767C]">
            <BookOpen className="w-3.5 h-3.5 text-[#8A384A]" />
            <span>{trend.readTime}</span>
            <span>•</span>
            <span>Edición Editorial Aura</span>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#59474C] leading-relaxed">
            {trend.fullContent.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key products */}
          <div className="p-4 rounded-2xl bg-white border border-[#EADBDF] space-y-2">
            <h4 className="text-xs font-semibold tracking-widest text-[#8A384A] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Imprescindibles para este acabado</span>
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {trend.keyProducts.map((prod, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-lg bg-[#FAF0ED] text-[#59474C] border border-[#EADBD7]">
                  {prod}
                </span>
              ))}
            </div>
          </div>

          {/* Pro tip */}
          <div className="p-4 rounded-2xl bg-[#FAF0ED] border-l-4 border-[#8A384A]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A384A] block mb-1">
              Consejo de Atelier
            </span>
            <p className="text-xs sm:text-sm italic text-[#59474C]">
              {trend.proTip}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#EADBDF] flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#7A646A] hover:text-[#292224] transition-colors"
          >
            ← Volver a tendencias
          </button>

          {onBookTrendStyle && (
            <button
              onClick={() => {
                onClose();
                onBookTrendStyle();
              }}
              className="px-6 py-2.5 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors"
            >
              Pedir este estilo en mi cita
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
