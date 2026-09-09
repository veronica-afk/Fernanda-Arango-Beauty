import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowLeftRight, 
  Clock, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/beautyData';

export const BeforeAfterSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentItem = BEFORE_AFTER_DATA[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleStopDragging);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleStopDragging);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleStopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleStopDragging);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDragging]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <section id="transformaciones" className="py-20 lg:py-28 bg-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>El Poder de la Transformación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Antes <span className="italic text-[#8A384A]">&</span> Después
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Arrastra el divisor interactivo para apreciar la evolución de la textura, el visagismo y el acabado profesional de nuestros trabajos.
          </p>
        </div>

        {/* Tabs for Before & After Category selection */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#292224] text-white font-semibold shadow-md'
                  : 'bg-white text-[#665257] hover:bg-[#FAF0ED] hover:text-[#8A384A] border border-[#E8D9D4]'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#EADBDF]">
            
            {/* Draggable Canvas Box */}
            <div
              ref={containerRef}
              onClick={handleContainerClick}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#292224] shadow-inner"
            >
              {/* AFTER Image (Full background) */}
              <img
                src={currentItem.afterImage}
                alt={`${currentItem.title} - Después`}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* BEFORE Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt={`${currentItem.title} - Antes`}
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Badges: ANTES / DESPUÉS */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-white/20">
                  Antes
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#8A384A]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-white/20">
                  Después
                </span>
              </div>

              {/* Draggable Split Divider Line */}
              <div
                className="absolute top-0 bottom-0 z-20"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsDragging(true);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setIsDragging(true);
                }}
              >
                {/* Vertical Line */}
                <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                {/* Circular Draggable Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#292224] shadow-2xl flex items-center justify-center border-2 border-[#8A384A] cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <ArrowLeftRight className="w-4 h-4 text-[#8A384A]" />
                </div>
              </div>

              {/* Bottom Instruction hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-[10px] sm:text-xs pointer-events-none flex items-center gap-1.5">
                <ArrowLeftRight className="w-3 h-3 text-[#E8B4B8]" />
                <span>Arrastra el centro para comparar el resultado</span>
              </div>
            </div>

            {/* Description & Technical details */}
            <div className="mt-6 pt-4 border-t border-[#F0E4E0] text-left space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8A384A] font-semibold">
                    {currentItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-editorial font-medium text-[#292224]">
                    {currentItem.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#665257] bg-[#FAF0ED] px-3 py-1.5 rounded-full self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-[#8A384A]" />
                  <span>Tiempo de realización: <strong>{currentItem.timeTaken}</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5C484D] leading-relaxed">
                {currentItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {currentItem.lookDetails.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#523F44] bg-[#FDFBF9] p-2.5 rounded-xl border border-[#EADBDF]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8A384A] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
