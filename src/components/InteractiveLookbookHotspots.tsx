import React, { useState } from 'react';
import { Sparkles, Plus, Check, ArrowRight, Eye, Info, X } from 'lucide-react';
import { LOOKBOOK_HOTSPOTS } from '../data/beautyData';
import { LookbookHotspot } from '../types';

interface InteractiveLookbookHotspotsProps {
  onSelectHotspotService: (serviceId: string, styleNote: string) => void;
}

export const InteractiveLookbookHotspots: React.FC<InteractiveLookbookHotspotsProps> = ({
  onSelectHotspotService,
}) => {
  const [activeSpot, setActiveSpot] = useState<LookbookHotspot>(LOOKBOOK_HOTSPOTS[0]);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(true);

  const handleSpotClick = (spot: LookbookHotspot) => {
    setActiveSpot(spot);
    setIsDetailOpen(true);
  };

  return (
    <section id="explora-el-look" className="py-20 lg:py-28 bg-[#F4EDE8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0DC] border border-[#D9CAC4] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>Lookbook Interactivo • Desglose de Técnicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#1F191B] tracking-tight">
            Explora la creación <span className="italic text-[#8A384A]">al detalle</span>
          </h2>

          <p className="text-sm sm:text-base text-[#665257] max-w-xl mx-auto leading-relaxed">
            Toca los puntos sobre la modelo para descubrir cada técnica, acabado y producto seleccionado para este look.
          </p>
        </div>

        {/* Interactive Look Canvas & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Interactive Stage with Hotspots (7 cols on lg) */}
          <div className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#E4D8D2] border border-[#DAC9C2] aspect-[3/4] sm:aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
              alt="Editorial model for interactive beauty hotspots"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />

            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Pulsing Hotspots on the model */}
            {LOOKBOOK_HOTSPOTS.map((spot) => {
              const isSelected = activeSpot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => handleSpotClick(spot)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-transform duration-300 ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}
                  aria-label={`Ver técnica: ${spot.title}`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    {/* Ping ripple effect */}
                    <span 
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-[#8A384A]' : 'bg-white'
                      }`} 
                    />
                    
                    {/* Center Button Pill */}
                    <span 
                      className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-xs font-bold shadow-lg transition-colors border-2 ${
                        isSelected 
                          ? 'bg-[#8A384A] border-white text-white' 
                          : 'bg-white border-[#8A384A] text-[#1F191B] hover:bg-[#FAF0ED]'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </span>

                  {/* Tooltip on hover */}
                  <span className="hidden sm:block absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xs text-white text-[10px] tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {spot.category}
                  </span>
                </button>
              );
            })}

            {/* Instructions overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-3 rounded-2xl bg-black/60 backdrop-blur-md text-white text-xs flex items-center justify-between border border-white/20">
              <span className="font-editorial text-xs sm:text-sm">
                Toca cualquier punto (+) para inspeccionar la fórmula
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E8B4B8] font-mono">
                {LOOKBOOK_HOTSPOTS.findIndex(s => s.id === activeSpot.id) + 1} / {LOOKBOOK_HOTSPOTS.length}
              </span>
            </div>
          </div>

          {/* Inspector Detail Panel (5 cols on lg) */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-white rounded-[2rem] p-7 sm:p-9 border border-[#E4D5D0] shadow-xl space-y-6 transition-all duration-300">
              
              {/* Macro Preview Image if available */}
              {activeSpot.image && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#EAE0DC] border border-[#EAE2DE]">
                  <img
                    src={activeSpot.image}
                    alt={activeSpot.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-semibold">
                    Acercamiento Macro
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FAF0ED] text-[#8A384A] text-[10px] uppercase tracking-widest font-bold border border-[#E8D0D5]">
                    {activeSpot.category}
                  </span>
                </div>

                <h3 className="text-2xl font-editorial font-medium text-[#1F191B] leading-tight">
                  {activeSpot.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C484D] leading-relaxed">
                  {activeSpot.description}
                </p>
              </div>

              {/* Technique Breakdown Box */}
              <div className="p-4 rounded-2xl bg-[#FAF6F4] border border-[#EADBDF] space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#8A384A] font-bold block">
                  Técnica de Autor Aplicada:
                </span>
                <p className="text-xs text-[#4D3F43] leading-relaxed">
                  {activeSpot.technique}
                </p>
              </div>

              {/* Quick Action */}
              <button
                onClick={() => onSelectHotspotService(activeSpot.serviceId, `${activeSpot.title} (${activeSpot.category})`)}
                className="w-full py-4 rounded-full bg-[#1F191B] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Pedir este acabado en mi cita</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

            {/* Hotspot thumbnail selectors */}
            <div className="flex items-center gap-2 pt-4 overflow-x-auto no-scrollbar">
              {LOOKBOOK_HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => handleSpotClick(spot)}
                  className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all cursor-pointer border ${
                    activeSpot.id === spot.id
                      ? 'bg-[#1F191B] text-white border-[#1F191B]'
                      : 'bg-white text-[#5C484D] border-[#E8DDD8] hover:bg-[#FAF0ED]'
                  }`}
                >
                  {spot.category}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
