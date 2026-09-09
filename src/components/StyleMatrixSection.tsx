import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Quote, 
  Layers, 
  Palette,
  Heart
} from 'lucide-react';
import { STYLE_CHAMELEON_DATA } from '../data/beautyData';
import { StyleLook } from '../types';

interface StyleMatrixSectionProps {
  onSelectStyleForBooking: (styleName: string) => void;
}

export const StyleMatrixSection: React.FC<StyleMatrixSectionProps> = ({
  onSelectStyleForBooking,
}) => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(STYLE_CHAMELEON_DATA[0].id);

  const currentStyle = STYLE_CHAMELEON_DATA.find(s => s.id === selectedStyleId) || STYLE_CHAMELEON_DATA[0];

  return (
    <section id="estilos" className="py-20 lg:py-28 bg-[#F4EDE8] relative overflow-hidden">
      {/* Background soft glow */}
      <div 
        className="absolute top-1/3 -right-24 w-96 h-96 bg-[#E8B4B8]/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3DD] border border-[#DFC9C0] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Palette className="w-3 h-3 text-[#B88E52]" />
            <span>Camaleón de Estilos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Tu estilo. <span className="italic text-[#8A384A]">Tus reglas.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            No imponemos un canon único ni fórmulas rígidas. Desde un acabado invisible <em>Clean Girl</em> hasta creaciones <em>Dark Gothic</em>, vanguardia editorial o producciones de fantasía: <strong>creamos exactamente el estilo que necesitas</strong>.
          </p>
        </div>

        {/* Style Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {STYLE_CHAMELEON_DATA.map((style) => {
            const isActive = style.id === selectedStyleId;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyleId(style.id)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#292224] text-white font-semibold shadow-md scale-102'
                    : 'bg-white/70 text-[#59474C] hover:bg-white hover:text-[#8A384A] border border-[#E0CFCA]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E8B4B8]' : 'bg-[#B0999E]'}`} />
                <span>{style.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Style Showcase Box (Editorial Two-Column Layout) */}
        <div className="bg-white rounded-[2.5rem] border border-[#E5D2CD] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-500">
          
          {/* Visual Left (5 cols on lg) */}
          <div className="lg:col-span-6 relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto min-h-[380px] sm:min-h-[460px] overflow-hidden bg-[#292224]">
            <img
              key={currentStyle.id}
              src={currentStyle.image}
              alt={currentStyle.name}
              className="w-full h-full object-cover object-center animate-in fade-in duration-500 scale-100 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/70 via-transparent to-transparent pointer-events-none" />

            {/* Floating watermark / subtitle badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 text-left shadow-lg">
              <span className="text-[10px] uppercase tracking-widest text-[#8A384A] font-bold block">
                Manifesto Estético
              </span>
              <p className="text-sm font-editorial text-[#292224] mt-0.5">
                {currentStyle.subtitle}
              </p>
            </div>
          </div>

          {/* Details Right (6 cols on lg) */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-5">
              {/* Category pill */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8A384A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Estilo Personalizado</span>
                </span>
                <span className="text-xs text-[#8C757B] italic">
                  Adaptable a tu fisionomía
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-editorial text-[#292224]">
                  {currentStyle.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A384A] font-medium tracking-wide mt-1">
                  Vibe: {currentStyle.vibe}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5C484D] leading-relaxed">
                {currentStyle.description}
              </p>

              {/* Highlights pills */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                  Puntos Clave del Look:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentStyle.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#FAF0ED] text-[#8A384A] text-xs font-medium border border-[#ECD7D3]"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Palette Inspiration */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#7A646A] font-semibold block mb-2">
                  Gama Cromática Referente:
                </span>
                <div className="flex items-center gap-2.5">
                  {currentStyle.colorPalette.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col items-center group cursor-default"
                      title={color}
                    >
                      <div 
                        className="w-7 h-7 rounded-full border border-black/10 shadow-xs group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] text-[#8C767C] mt-1 font-mono uppercase">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote card */}
              <div className="p-4 rounded-2xl bg-[#FDFBF9] border border-[#EADBDF] flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#C88E98] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm italic text-[#59474C] leading-relaxed">
                    {currentStyle.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Action to book this style */}
            <div className="pt-4 border-t border-[#EADBDF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-[#7A646A]">
                ¿Este es el look que imaginas para tu ocasión?
              </span>

              <button
                onClick={() => onSelectStyleForBooking(currentStyle.name)}
                className="px-6 py-3.5 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md group"
              >
                <span>Elegir {currentStyle.name}</span>
                <ArrowRight className="w-4 h-4 text-[#E8B4B8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
