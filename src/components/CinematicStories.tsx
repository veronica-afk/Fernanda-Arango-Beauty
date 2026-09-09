import React from 'react';
import { Sparkles, Car, Home, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { EDITORIAL_STORIES, BRAND_INFO } from '../data/beautyData';

interface CinematicStoriesProps {
  onSelectModality: (modality: 'domicilio' | 'local') => void;
}

export const CinematicStories: React.FC<CinematicStoriesProps> = ({ onSelectModality }) => {
  return (
    <section id="historias" className="py-20 lg:py-28 bg-[#FAF6F4] relative border-t border-[#EAE2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8A384A] block">
            Historias & Modalidades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#1F191B] tracking-tight">
            Donde la magia <span className="italic text-[#8A384A]">toma forma</span>
          </h2>
          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-xl mx-auto">
            Elige la atmósfera que mejor se adapta a tu día. Ambas opciones con dedicación 100% individual y rigurosa puntualidad.
          </p>
        </div>

        {/* 2 Full-Bleed High-Fashion Editorial Cards (Nike Experience Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 text-left">
          
          {/* Card 1: A Domicilio */}
          <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#1F191B] shadow-xl flex flex-col justify-end p-7 sm:p-10 border border-[#E8DDD8] cursor-pointer"
            onClick={() => onSelectModality('domicilio')}
          >
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
              alt="Servicio de belleza a domicilio"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-out opacity-75"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-semibold border border-white/30 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>En tu espacio</span>
                </span>
                <span className="text-xs text-[#E8B4B8] font-mono">01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-white leading-tight">
                Servicio a Domicilio
              </h3>

              <p className="text-xs sm:text-sm text-white/80 max-w-md line-clamp-2">
                Nos trasladamos con tocador móvil, focos de luz natural y sillas ergonómicas a tu residencia, suite de hotel o finca.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-white group-hover:text-[#E8B4B8] transition-colors">
                <span>Descubrir detalles de domicilio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: En Nuestro Local */}
          <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#1F191B] shadow-xl flex flex-col justify-end p-7 sm:p-10 border border-[#E8DDD8] cursor-pointer"
            onClick={() => onSelectModality('local')}
          >
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
              alt="Estudio y santuario sensorial Aura Atelier"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-1000 ease-out opacity-75"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-semibold border border-white/30 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5" />
                  <span>En Nuestro Atelier</span>
                </span>
                <span className="text-xs text-[#E8B4B8] font-mono">02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-white leading-tight">
                El Santuario Privado
              </h3>

              <p className="text-xs sm:text-sm text-white/80 max-w-md line-clamp-2">
                Un espacio diseñado para la desconexión total: aromaterapia botánica, café de especialidad y cabinas acústicamente aisladas.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-white group-hover:text-[#E8B4B8] transition-colors">
                <span>Descubrir la experiencia en atelier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>

        {/* Brand Editorial Manifesto Grid (Nike Behind the Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {EDITORIAL_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#EAE2DE] shadow-xs flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A384A]">
                  {story.tag}
                </span>

                <h4 className="text-2xl font-editorial font-medium text-[#1F191B]">
                  {story.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5C484D] leading-relaxed">
                  {story.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2EAE6] flex items-center justify-between text-xs text-[#7A646A]">
                <span>{story.subtitle}</span>
                <span className="text-[#8A384A] font-semibold">100% Personalizado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
