import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Flame,
  Bookmark
} from 'lucide-react';
import { BEAUTY_TRENDS_DATA } from '../data/beautyData';
import { TrendItem } from '../types';
import { TrendDetailModal } from './TrendDetailModal';

interface TrendsSectionProps {
  onBookTrendStyle: () => void;
}

export const TrendsSection: React.FC<TrendsSectionProps> = ({ onBookTrendStyle }) => {
  const [selectedTrend, setSelectedTrend] = useState<TrendItem | null>(null);

  return (
    <section id="tendencias" className="py-20 lg:py-28 bg-[#F4EDE8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3DD] border border-[#DFC9C0] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>Beauty Trends • Revista Digital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Tendencias que marcan la <span className="italic text-[#8A384A]">temporada</span>
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Nuestra curaduría editorial sobre las técnicas, tonalidades y visagismos que dominan pasarelas, alfombras rojas y celebraciones exclusivas.
          </p>
        </div>

        {/* Trends Cards Grid (Magazine Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {BEAUTY_TRENDS_DATA.map((trend) => (
            <article
              key={trend.id}
              onClick={() => setSelectedTrend(trend)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5D5D1] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer text-left hover:-translate-y-1.5"
            >
              {/* Image with Tag & Season overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DDD8]">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#8A384A] text-[10px] font-bold tracking-wider uppercase">
                    {trend.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-[11px] flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3 h-3 text-[#E8B4B8]" />
                  <span>{trend.season}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[10px] text-[#8C767C] uppercase tracking-wider font-semibold">
                    <BookOpen className="w-3 h-3 text-[#8A384A]" />
                    <span>{trend.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-editorial font-medium text-[#292224] group-hover:text-[#8A384A] transition-colors leading-snug line-clamp-2">
                    {trend.title}
                  </h3>

                  <p className="text-xs text-[#665257] line-clamp-3 leading-relaxed">
                    {trend.excerpt}
                  </p>
                </div>

                {/* Read more button */}
                <div className="pt-3 border-t border-[#F2E5E1] flex items-center justify-between text-xs text-[#8A384A] font-semibold">
                  <span className="group-hover:underline">Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      <TrendDetailModal
        trend={selectedTrend}
        onClose={() => setSelectedTrend(null)}
        onBookTrendStyle={onBookTrendStyle}
      />
    </section>
  );
};
