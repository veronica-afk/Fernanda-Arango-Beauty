import React from 'react';
import { 
  Home, 
  Sparkles, 
  MapPin, 
  Car, 
  Coffee, 
  Music, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  HeartHandshake
} from 'lucide-react';
import { BRAND_INFO } from '../data/beautyData';

interface ModalitiesSectionProps {
  onSelectModality: (modality: 'domicilio' | 'local') => void;
}

export const ModalitiesSection: React.FC<ModalitiesSectionProps> = ({ onSelectModality }) => {
  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <HeartHandshake className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>Modalidades Flexibles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Diseñado a tu medida: <span className="italic text-[#8A384A]">¿Dónde</span> prefieres tu cita?
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Ambas modalidades operan con previa cita garantizada, asegurando dedicación exclusiva, puntualidad y la máxima higiene en cada paso.
          </p>
        </div>

        {/* 2 Modalities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* MODALITY 1: A Domicilio */}
          <div className="group bg-white rounded-[2.5rem] border border-[#EBDCD7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between text-left">
            <div>
              {/* Photo Banner */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE0DC]">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop"
                  alt="Servicio de belleza a domicilio y preparación de novias"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/70 via-[#292224]/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#8A384A] text-white text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5" />
                    <span>La belleza llega hasta ti</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E8B4B8] font-bold block">
                    En tu hogar u hotel
                  </span>
                  <h3 className="text-2xl font-editorial font-normal leading-tight">
                    Servicio a Domicilio
                  </h3>
                </div>
              </div>

              {/* Body perks */}
              <div className="p-7 sm:p-9 space-y-6">
                <p className="text-sm sm:text-base text-[#5C484D] leading-relaxed">
                  Evita desplazamientos, atascos o esperas. Nos trasladamos con nuestro tocador móvil profesional, sillas de maquillaje ergonómicas y focos de luz natural para crear una experiencia de salón en la comodidad de tu hogar.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#8A384A] font-semibold block">
                    Ventajas de esta modalidad:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#523F44]">
                    <li className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Todo el equipo e iluminación cinematográfica incluidos</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Ideal para bodas, grupos de amigas, graduaciones o eventos diurnos</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Home className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Puntualidad rigurosa y máxima discreción profesional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-7 sm:p-9 pt-0">
              <button
                onClick={() => onSelectModality('domicilio')}
                className="w-full py-4 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
              >
                <span>Solicitar cita a domicilio</span>
                <ArrowRight className="w-4 h-4 text-[#E8B4B8] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* MODALITY 2: En Nuestro Local */}
          <div className="group bg-white rounded-[2.5rem] border border-[#EBDCD7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between text-left">
            <div>
              {/* Photo Banner */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#EAE0DC]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                  alt="Estudio y santuario de belleza Aura Atelier"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292224]/70 via-[#292224]/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#292224] text-white text-[11px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>Experiencia Sensorial</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E8B4B8] font-bold block">
                    {BRAND_INFO.address}
                  </span>
                  <h3 className="text-2xl font-editorial font-normal leading-tight">
                    También puedes visitarnos
                  </h3>
                </div>
              </div>

              {/* Body perks */}
              <div className="p-7 sm:p-9 space-y-6">
                <p className="text-sm sm:text-base text-[#5C484D] leading-relaxed">
                  Un santuario privado diseñado para tu desconexión total. Espacios en tonos crema y rosa empolvado, iluminación envolvente, aromaterapia relajante y música ambiental para disfrutar de tu propio momento de bienestar.
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase tracking-wider text-[#8A384A] font-semibold block">
                    Detalles de la experiencia en estudio:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#523F44]">
                    <li className="flex items-start gap-2.5">
                      <Coffee className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Carta de infusiones botánicas, café de especialidad y copas de espumante</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Music className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Cabinas acústicamente aisladas para máxima privacidad y relajación</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                      <span>Ubicación céntrica y elegante con estacionamiento concertado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-7 sm:p-9 pt-0">
              <button
                onClick={() => onSelectModality('local')}
                className="w-full py-4 rounded-full bg-[#FAF0ED] hover:bg-[#8A384A] text-[#8A384A] hover:text-white border border-[#E8D0D5] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs group/btn"
              >
                <span>Reservar cita en el local</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
