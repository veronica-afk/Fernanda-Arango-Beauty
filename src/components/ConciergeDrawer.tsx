import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Car, 
  Home, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO, SERVICES_DATA } from '../data/beautyData';
import { BookingModality } from '../types';

interface ConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedModality?: BookingModality;
  preselectedServiceId?: string;
  preselectedStyleNote?: string;
}

export const ConciergeDrawer: React.FC<ConciergeDrawerProps> = ({
  isOpen,
  onClose,
  preselectedModality = 'domicilio',
  preselectedServiceId = 'maquillaje',
  preselectedStyleNote = '',
}) => {
  const [modality, setModality] = useState<BookingModality>(preselectedModality);
  const [serviceId, setServiceId] = useState<string>(preselectedServiceId);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('11:00');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>(preselectedStyleNote);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#E8B4B8', '#8A384A', '#292224']
      });
    } catch {
      // safe fallback
    }
    setSubmitted(true);
  };

  const generateWhatsAppURL = () => {
    const modText = modality === 'domicilio' ? 'A DOMICILIO' : 'EN ATELIER';
    const msg = `✨ *SOLICITUD DE CITA — FERNANDA ARANGO BEAUTY* ✨%0A%0A` +
      `👤 *Cliente:* ${encodeURIComponent(name)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(phone)}%0A` +
      `📍 *Modalidad:* ${encodeURIComponent(modText)}%0A` +
      (modality === 'domicilio' ? `🏠 *Ubicación:* ${encodeURIComponent(address)}%0A` : '') +
      `💄 *Servicio:* ${encodeURIComponent(currentService.title)}%0A` +
      `📅 *Fecha:* ${encodeURIComponent(date)}%0A` +
      `⏰ *Hora:* ${encodeURIComponent(time)}%0A` +
      (notes ? `📝 *Detalles de Look:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0A¡Muchas gracias! Quedo a la espera de confirmación.`;

    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Slide-over Panel (Nike / Apple Bag style) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F4] border-l border-[#EAE2DE] shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EAE2DE] flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A384A] block">
                Concierge Privado
              </span>
              <h3 className="text-xl font-editorial font-medium text-[#1F191B]">
                Agendar Experiencia
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF0ED] text-[#1F191B] transition-colors cursor-pointer"
              aria-label="Cerrar panel de reserva"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 flex-1">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FAF0ED] text-[#8A384A] flex items-center justify-center mx-auto border border-[#E8D0D5]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-editorial text-[#1F191B]">
                    ¡Solicitud Enviada, {name}!
                  </h4>
                  <p className="text-xs text-[#665257] leading-relaxed">
                    Hemos reservado tu preferencia para <strong>{currentService.title}</strong> el <strong>{date || 'día indicado'}</strong> a las <strong>{time}</strong>.
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <a
                    href={generateWhatsAppURL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar por WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="text-xs text-[#7A646A] underline block mx-auto cursor-pointer"
                  >
                    Cerrar panel y continuar explorando
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Modality */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#8A384A] font-bold block">
                    1. Modalidad
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setModality('domicilio')}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                        modality === 'domicilio'
                          ? 'border-[#1F191B] bg-[#1F191B] text-white shadow-xs'
                          : 'border-[#E0D3CE] bg-white text-[#1F191B]'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <div>
                        <span className="text-xs font-semibold block">A Domicilio</span>
                        <span className="text-[10px] opacity-70 block">En tu espacio</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModality('local')}
                      className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 cursor-pointer transition-all ${
                        modality === 'local'
                          ? 'border-[#1F191B] bg-[#1F191B] text-white shadow-xs'
                          : 'border-[#E0D3CE] bg-white text-[#1F191B]'
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      <div>
                        <span className="text-xs font-semibold block">En el Atelier</span>
                        <span className="text-[10px] opacity-70 block">Santuario privado</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Servicio */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#8A384A] font-bold block">
                    2. Experiencia / Servicio
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none focus:border-[#8A384A]"
                  >
                    {SERVICES_DATA.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title} — {s.priceFrom} ({s.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Fecha & Hora */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Fecha propuesta *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Hora
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    >
                      {['09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'].map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Dirección si a domicilio */}
                {modality === 'domicilio' && (
                  <div className="space-y-1.5 animate-in fade-in">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Dirección o Hotel / Finca *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dirección completa"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    />
                  </div>
                )}

                {/* 5. Contacto */}
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellidos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-[#7A646A] font-semibold block">
                      Nota o Estilo de Interés
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Ondas Hollywood, novia, piel satinada..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E0D3CE] text-xs text-[#1F191B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1F191B] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
                  >
                    <span>Confirmar y Enviar Cita</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8C767C]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A384A]" />
                  <span>Atención exclusiva sin pagos adelantados</span>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
