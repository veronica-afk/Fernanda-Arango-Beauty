import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/beautyData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenConciergeDrawer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenConciergeDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Colecciones', href: '#colecciones' },
    { name: 'Explora el Look', href: '#explora-el-look' },
    { name: 'Estilos', href: '#estilos' },
    { name: 'Experiencias', href: '#historias' },
    { name: 'Antes & Después', href: '#transformaciones' },
    { name: 'Tendencias', href: '#tendencias' },
    { name: 'Portafolio', href: '#galeria' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF6F4]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-[#EAE2DE] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark (Nike-style clean typographic logo) */}
          <a 
            href="#inicio" 
            className="flex items-center gap-2 group text-left"
            id="navbar-brand-logo"
          >
            <span className="text-xl sm:text-2xl font-editorial tracking-[0.22em] font-semibold text-[#1F191B] uppercase leading-none">
              {BRAND_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#4D3F43] hover:text-[#1F191B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1F191B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA (Understated luxury pill) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="navbar-booking-btn"
              onClick={onOpenConciergeDrawer || onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#1F191B] hover:bg-[#8A384A] text-white text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 group"
            >
              <span>Agendar Cita</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenConciergeDrawer || onOpenBooking}
              className="px-3.5 py-1.5 rounded-full bg-[#1F191B] text-white text-[10px] uppercase tracking-wider font-semibold"
            >
              Agendar
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1F191B]"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[58px] bg-[#FAF6F4] z-50 flex flex-col p-6 animate-in fade-in duration-200 border-t border-[#EAE2DE]">
          <div className="flex flex-col gap-3 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl font-editorial text-[#1F191B] py-2.5 border-b border-[#EAE2DE] flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#8C767C]">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-[#EAE2DE] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConciergeDrawer) onOpenConciergeDrawer();
                else onOpenBooking();
              }}
              className="w-full py-4 rounded-full bg-[#1F191B] text-white text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Experiencia Previa</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
