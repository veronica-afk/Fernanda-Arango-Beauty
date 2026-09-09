import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data/beautyData';
import { ServiceItem } from '../types';

interface FeaturedCarouselProps {
  onViewService: (service: ServiceItem) => void;
  onSelectService: (serviceId: string) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  onViewService,
  onSelectService,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="colecciones" className="py-20 lg:py-28 bg-[#FAF6F4] relative border-t border-[#EAE2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nike-Style Header with Arrow Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 text-left">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8A384A] block">
              Carta de Experiencias
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#1F191B] tracking-tight">
              Colecciones <span className="italic text-[#8A384A]">Destacadas</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#FAF0ED] text-[#1F191B] border border-[#E0D3CE] flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
              aria-label="Deslizar hacia la izquierda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-[#1F191B] hover:bg-[#8A384A] text-white flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105 active:scale-95"
              aria-label="Deslizar hacia la derecha"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Snap Container */}
        <div 
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2"
        >
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start group flex flex-col justify-between text-left cursor-pointer"
              onClick={() => onViewService(service)}
            >
              {/* Image Frame (Clean product lookbook style) */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#EAE0DC] border border-[#E8DDD8] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Index tag top right */}
                <div className="absolute top-4 right-4">
                  <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-mono flex items-center justify-center border border-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Category Pill top left */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1F191B] text-[10px] uppercase tracking-wider font-semibold shadow-xs">
                    {service.subtitle}
                  </span>
                </div>

                {/* Bottom Overlay Info on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>{service.duration}</span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white text-[#1F191B] font-semibold text-xs shadow-md group-hover:bg-[#8A384A] group-hover:text-white transition-colors">
                    Explorar Look
                  </span>
                </div>
              </div>

              {/* Text Meta Under Card (Like Nike shoes / gear) */}
              <div className="pt-4 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-editorial font-medium text-[#1F191B] group-hover:text-[#8A384A] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#8A384A]">
                    {service.priceFrom}
                  </span>
                </div>

                <p className="text-xs text-[#665257] line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
