import React, { useState } from 'react';
import { 
  Sparkles, 
  Scissors, 
  Gem, 
  Smile, 
  Palette, 
  Wand2, 
  Clock, 
  ArrowRight, 
  Info,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/beautyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onViewServiceDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewServiceDetails,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-4 h-4" />;
      case 'Gem': return <Gem className="w-4 h-4" />;
      case 'Smile': return <Smile className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Wand2': return <Wand2 className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredServices = activeFilter === 'todos' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-[#B88E52]" />
            <span>Carta de Experiencias</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Servicios creados para <span className="italic text-[#8A384A]">exaltar</span> tu esencia
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Desde visagismo social y novias, hasta peinados de alfombra roja, manicura escultural y producciones temáticas. Realizados en nuestro estudio o directamente en tu domicilio.
          </p>

          {/* Service quick category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'todos', label: 'Todos los servicios' },
              { id: 'maquillaje', label: 'Maquillaje' },
              { id: 'peinados', label: 'Peinados' },
              { id: 'manicure', label: 'Manicure' },
              { id: 'faciales', label: 'Faciales' },
              { id: 'coloracion', label: 'Coloración' },
              { id: 'caritas-pintadas', label: 'Arte & Eventos' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#292224] text-white font-semibold shadow-xs'
                    : 'bg-white/80 text-[#59474C] hover:bg-white hover:text-[#8A384A] border border-[#E5D5D1]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (6 Core requested services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EBDCD7] shadow-[0_4px_20px_rgba(41,34,36,0.03)] hover:shadow-[0_12px_32px_rgba(41,34,36,0.08)] transition-all duration-500 flex flex-col hover:-translate-y-1 text-left"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE0DC]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#8A384A] text-[10px] font-bold tracking-wider uppercase shadow-xs">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Duration & Price pills */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>{service.duration}</span>
                  </div>
                  <span className="font-editorial text-sm bg-[#8A384A]/90 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium">
                    Desde {service.priceFrom}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8A384A] mb-1">
                    <span className="p-1 rounded-md bg-[#FAF0ED]">
                      {getServiceIcon(service.iconName)}
                    </span>
                    <span>{service.subtitle}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-editorial font-normal text-[#292224] group-hover:text-[#8A384A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#665257] line-clamp-3 leading-relaxed mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="pt-2 border-t border-[#F2E5E1] space-y-1.5">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#523F44]">
                      <Check className="w-3.5 h-3.5 text-[#8A384A] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => onViewServiceDetails(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF0ED] hover:bg-[#F3E2DF] text-[#8A384A] text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Ver detalles</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="py-2.5 px-4 rounded-xl bg-[#292224] hover:bg-[#8A384A] text-white text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>Reservar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Callout box: Custom requests */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F9EBE8] via-[#FAF3F0] to-[#F5E6E1] border border-[#E8D4CF] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg sm:text-xl font-editorial font-medium text-[#292224]">
              ¿Buscas una producción especial o atención combinada?
            </h4>
            <p className="text-xs sm:text-sm text-[#665257]">
              Diseñamos paquetes integrales para bodas, grupos de invitadas, sesiones de moda, desfiles o eventos infantiles temáticos.
            </p>
          </div>
          <button
            onClick={() => onSelectService('otro')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.15em] font-semibold transition-colors cursor-pointer"
          >
            Consultar propuesta a medida
          </button>
        </div>

      </div>
    </section>
  );
};
