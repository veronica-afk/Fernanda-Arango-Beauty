import React from 'react';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCollections: () => void;
  onExploreLookbook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreCollections, 
  onExploreLookbook 
}) => {
  return (
    <section 
      id="inicio"
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-[#FAF6F4] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8B4B8]/20 via-[#F3E2DE]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        
        {/* Massive Editorial Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8A384A]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#665257]">
                Nueva Temporada • Colección 2025/2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-normal text-[#1F191B] tracking-tight leading-[1.02] uppercase">
              Belleza en <br />
              <span className="italic font-light text-[#8A384A]">movimiento.</span> <br />
              Sin límites.
            </h1>

            <p className="text-sm sm:text-base text-[#59474C] font-normal max-w-lg leading-relaxed">
              No imponemos una regla fija ni disfraces. Creamos arquitectura facial, peinados fluidos y acabados de piel que respiran con tu personalidad. Donde quieras: en nuestro atelier o en tu propio espacio.
            </p>

            {/* Minimalist Nike-style Action Pills */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-explore-collections"
                onClick={onExploreCollections}
                className="px-8 py-3.5 rounded-full bg-[#1F191B] hover:bg-[#8A384A] text-white text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center gap-2.5 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Descubrir Colecciones</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-lookbook"
                onClick={onExploreLookbook}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF0ED] text-[#1F191B] text-[11px] uppercase tracking-[0.18em] font-semibold border border-[#E0D3CE] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Ver el Lookbook Interactivo</span>
              </button>
            </div>

          </div>

          {/* Right Full-Height Cinematic Photo Composition (6 cols) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] shadow-2xl bg-[#EAE0DC]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial Beauty look by Aura Atelier"
                className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-1000 ease-out"
              />
              
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Subtle Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 text-left flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A384A] font-bold block">
                    Drop 01 / Colección Vanguardia
                  </span>
                  <p className="text-xs sm:text-sm font-editorial font-medium text-[#1F191B]">
                    Dewy Siren Eyes & Wet Hair Texture
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#1F191B] text-white font-medium">
                  Ver Look →
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Horizontal Category Bar (Like Nike's index strip) */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[#EAE2DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A646A]">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
          <span className="font-semibold text-[#1F191B] tracking-wider uppercase">01 / Maquillaje de Autor</span>
          <span className="text-[#C8B8B4]">•</span>
          <span className="font-semibold text-[#1F191B] tracking-wider uppercase">02 / Haute Coiffure</span>
          <span className="text-[#C8B8B4]">•</span>
          <span className="font-semibold text-[#1F191B] tracking-wider uppercase">03 / Manicure Rusa</span>
          <span className="text-[#C8B8B4]">•</span>
          <span className="font-semibold text-[#1F191B] tracking-wider uppercase">04 / Arte Facial</span>
        </div>

        <button 
          onClick={onExploreCollections}
          className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#1F191B] hover:text-[#8A384A] transition-colors cursor-pointer"
        >
          <span>Deslizar hacia abajo</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
