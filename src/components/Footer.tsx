import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Heart, 
  Calendar,
  Car
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/beautyData';

interface FooterProps {
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onSelectService }) => {
  return (
    <footer className="bg-[#211B1D] text-[#E8DCD8] pt-20 pb-10 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Manifesto (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E8B4B8] to-[#E5C3C8] flex items-center justify-center text-[#4A1E27]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-2xl font-editorial tracking-[0.16em] font-semibold text-white">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed pr-4">
              Estudio especializado en realzar tu belleza auténtica mediante técnicas modernas de maquillaje, peluquería de autor, manicura y experiencias artísticas. Nos adaptamos a ti con servicio exclusivo en nuestro atelier y a domicilio previa cita.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#8A384A] hover:bg-[#A8455B] text-white text-xs uppercase tracking-[0.15em] font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E8B4B8]" />
                <span>Solicitar cita previa</span>
              </button>
            </div>
          </div>

          {/* Col 2: Servicios (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E8B4B8] font-bold">
              Experiencias de Belleza
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onSelectService(serv.id)}
                    className="text-white/70 hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Modalidades & Horarios (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E8B4B8] font-bold">
              Modalidades
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Car className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                <span>A Domicilio (Hoteles, residencias y fincas)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                <span>En Atelier Privado</span>
              </li>
              <li className="pt-2 border-t border-white/10 flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8A384A] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto & Redes (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E8B4B8] font-bold">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8A384A]" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8A384A]" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A384A]" />
                <span>{BRAND_INFO.address}</span>
              </li>
            </ul>

            {/* Social Media Link */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8A384A] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram de Fernanda Arango Beauty"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366] text-white text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Términos del Servicio</span>
            <span className="hover:text-white transition-colors cursor-pointer">Protocolos de Higiene</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
