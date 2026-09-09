import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Maximize2, 
  Camera, 
  Filter 
} from 'lucide-react';
import { GALLERY_DATA } from '../data/beautyData';
import { GalleryItem, ServiceCategory } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioGalleryProps {
  onBookLook: (lookTitle: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onBookLook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: string; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'maquillaje', label: 'Maquillaje' },
    { id: 'peinados', label: 'Peinados' },
    { id: 'manicure', label: 'Manicure' },
    { id: 'coloracion', label: 'Cabello' },
    { id: 'faciales', label: 'Faciales' },
    { id: 'caritas-pintadas', label: 'Caritas Pintadas' },
    { id: 'tematico', label: 'Temáticos / Editorial' },
  ];

  const filteredItems = activeCategory === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => {
        if (activeCategory === 'tematico') {
          return item.category === 'tematico';
        }
        return item.category === activeCategory;
      });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Camera className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>Portafolio Visual</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Nuestro <span className="italic text-[#8A384A]">trabajo</span> en acción
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Explora una selección de creaciones reales. Haz clic en cualquier fotografía para abrir el visor en alta resolución y consultar detalles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#292224] text-white font-semibold shadow-md'
                    : 'bg-white text-[#5C484D] hover:bg-[#FAF0ED] hover:text-[#8A384A] border border-[#E8D9D4]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-[#EAE0DC] border border-[#EBDCD7] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Vignette & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/85 via-[#292224]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#8A384A] text-white text-[10px] uppercase tracking-widest font-semibold">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-editorial font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/80 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/15 text-white/90">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Discreet badge always visible on mobile */}
              <div className="sm:hidden absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs flex items-center justify-between pointer-events-none">
                <span className="truncate font-editorial">{item.title}</span>
                <span className="text-[10px] px-2 py-0.5 bg-[#8A384A] rounded-full shrink-0">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Component */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onBookLook={onBookLook}
      />
    </section>
  );
};
