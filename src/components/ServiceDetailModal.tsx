import React from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  AlertCircle 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#292224]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF6F4] rounded-3xl shadow-2xl border border-[#E8D9D4] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image banner */}
        <div className="relative h-56 sm:h-64 w-full bg-[#E8DDD8] overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/80 via-[#292224]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#292224] transition-colors shadow-md z-10 cursor-pointer"
            aria-label="Cerrar modal de servicio"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6 text-white text-left">
            <span className="inline-block text-[11px] font-semibold tracking-widest uppercase bg-[#8A384A] text-white px-2.5 py-0.5 rounded-full mb-1.5">
              {service.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-normal leading-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          {/* Quick info row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#EADBDF]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C484D]">
              <Clock className="w-4 h-4 text-[#8A384A]" />
              <span>Duración estimada: <strong className="text-[#292224]">{service.duration}</strong></span>
            </div>
            <div className="text-xs sm:text-sm text-[#5C484D]">
              <span>Inversión desde: <strong className="text-base text-[#8A384A] font-bold">{service.priceFrom}</strong></span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[#8A384A] uppercase mb-2">
              Sobre este ritual
            </h4>
            <p className="text-sm sm:text-base text-[#59474C] leading-relaxed">
              {service.longDescription || service.description}
            </p>
          </div>

          {/* Includes */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[#8A384A] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>¿Qué incluye el servicio?</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3B40]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preparation tips */}
          <div className="p-4 rounded-2xl bg-[#FAF0ED] border border-[#ECDAD6]">
            <h4 className="text-xs font-semibold tracking-widest text-[#8A384A] uppercase mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>Recomendaciones previas a tu cita</span>
            </h4>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#6B5358]">
              {service.preparationTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#EADBDF] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="text-xs text-[#7A646A]">
            Disponible <strong className="text-[#292224]">A Domicilio</strong> y en <strong className="text-[#292224]">Nuestro Estudio</strong>
          </span>

          <button
            onClick={() => {
              onBookService(service.id);
              onClose();
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#E8B4B8]" />
            <span>Reservar {service.title}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
