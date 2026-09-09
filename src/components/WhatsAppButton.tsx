import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/beautyData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const directURL = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      
      {/* Quick Interactive Bubble Dialog (when toggled or clicked) */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-3xl p-5 shadow-2xl border border-[#E8D4CF] animate-in slide-in-from-bottom-5 duration-300 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0E4E0]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-xs">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#292224]">{BRAND_INFO.name}</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[10px] text-[#25D366] font-medium">Asesora en línea</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#8C767C] hover:text-[#292224] transition-colors"
              aria-label="Cerrar chat flotante"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-[#5C484D] leading-relaxed space-y-2">
            <p className="bg-[#FAF0ED] p-3 rounded-2xl rounded-tl-xs text-[#523F44]">
              ¡Hola! ✨ ¿Tienes dudas sobre un servicio, disponibilidad de fechas o cotizaciones para grupos o bodas?
            </p>
            <p className="text-[11px] text-[#8C767C]">
              Respondemos en menos de 15 minutos en horario comercial.
            </p>
          </div>

          <a
            href={directURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {/* Tooltip on hover if not open */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#292224] text-white text-xs whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none tracking-wide">
            ¿Dudas? Escríbenos a WhatsApp
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:scale-108 active:scale-95 relative"
          aria-label="Contactar por WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7" />
              {/* Subtle green pulse ring */}
              <span className="absolute -inset-1 rounded-full border border-[#25D366] animate-ping opacity-40 pointer-events-none" />
            </>
          )}
        </button>
      </div>

    </div>
  );
};
