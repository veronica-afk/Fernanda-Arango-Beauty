import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  Check, 
  Send, 
  Car, 
  Home, 
  Scissors, 
  Gem, 
  Smile, 
  Palette, 
  Wand2,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO, SERVICES_DATA } from '../data/beautyData';
import { BookingFormData, BookingModality } from '../types';

interface BookingSectionProps {
  preselectedModality?: BookingModality;
  preselectedServiceId?: string;
  preselectedStyleNote?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedModality = 'domicilio',
  preselectedServiceId,
  preselectedStyleNote,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    modality: preselectedModality,
    serviceId: preselectedServiceId || 'maquillaje',
    date: '',
    time: '11:00',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    address: '',
    notes: preselectedStyleNote ? `Interés en estilo: ${preselectedStyleNote}` : '',
    stylePreference: preselectedStyleNote || '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedModality) {
      setFormData(prev => ({ ...prev, modality: preselectedModality }));
    }
  }, [preselectedModality]);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    if (preselectedStyleNote) {
      setFormData(prev => ({ 
        ...prev, 
        notes: prev.notes ? `${prev.notes} | Estilo: ${preselectedStyleNote}` : `Interés en look: ${preselectedStyleNote}`,
        stylePreference: preselectedStyleNote
      }));
    }
  }, [preselectedStyleNote]);

  const serviceOptions = [
    { id: 'maquillaje', name: 'Maquillaje de Autor', icon: Sparkles, duration: '60-90m', price: 'Desde 65€' },
    { id: 'peinados', name: 'Peinados & Haute Coiffure', icon: Scissors, duration: '50-80m', price: 'Desde 55€' },
    { id: 'manicure', name: 'Manicure & Nail Art', icon: Gem, duration: '60-75m', price: 'Desde 40€' },
    { id: 'faciales', name: 'Facial Skin Glow', icon: Smile, duration: '45-75m', price: 'Desde 50€' },
    { id: 'coloracion', name: 'Coloración & Balayage', icon: Palette, duration: '120-180m', price: 'Desde 85€' },
    { id: 'caritas-pintadas', name: 'Caritas Pintadas & Artístico', icon: Wand2, duration: '45-90m', price: 'Desde 45€' },
    { id: 'otro', name: 'Producción / Paquete Múltiple', icon: Sparkles, duration: 'A medida', price: 'Consultar' },
  ];

  const timeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30'
  ];

  const selectedService = serviceOptions.find(s => s.id === formData.serviceId) || serviceOptions[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.clientName.trim()) errs.clientName = 'Por favor ingresa tu nombre completo';
    if (!formData.clientPhone.trim()) errs.clientPhone = 'Ingresa un número de teléfono o WhatsApp';
    if (!formData.date) errs.date = 'Por favor selecciona la fecha deseada';
    if (formData.modality === 'domicilio' && !formData.address.trim()) {
      errs.address = 'Indica la dirección o zona para la cita a domicilio';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E8B4B8', '#8A384A', '#C5A059', '#F8ECE9']
      });
    } catch {
      // safe fallback if confetti fails in some environment
    }

    setSubmitted(true);
  };

  const generateWhatsAppURL = () => {
    const modalityText = formData.modality === 'domicilio' ? 'A DOMICILIO' : 'EN ESTUDIO / LOCAL';
    const msg = `✨ *SOLICITUD DE CITA — FERNANDA ARANGO BEAUTY* ✨%0A%0A` +
      `👤 *Nombre:* ${encodeURIComponent(formData.clientName)}%0A` +
      `📞 *Teléfono:* ${encodeURIComponent(formData.clientPhone)}%0A` +
      `📍 *Modalidad:* ${encodeURIComponent(modalityText)}%0A` +
      (formData.modality === 'domicilio' ? `🏠 *Dirección:* ${encodeURIComponent(formData.address)}%0A` : '') +
      `💄 *Servicio:* ${encodeURIComponent(selectedService.name)}%0A` +
      `📅 *Fecha propuesta:* ${encodeURIComponent(formData.date)}%0A` +
      `⏰ *Hora:* ${encodeURIComponent(formData.time)}%0A` +
      (formData.notes ? `📝 *Comentarios/Estilo:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0A¡Muchas gracias! Quedo a la espera de su confirmación de disponibilidad.`;

    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="reservar" className="py-20 lg:py-28 bg-gradient-to-b from-[#FAF6F4] via-[#F4EDE8] to-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <CalendarIcon className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>Agenda Tu Experiencia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Reserva tu <span className="italic text-[#8A384A]">momento</span> exclusivo
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            Elige tu modalidad, fecha y servicios preferidos. Te contactaremos de inmediato para confirmar tu horario sin esperas.
          </p>
        </div>

        {/* Booking Card & Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-[#E8D4CF] shadow-2xl p-6 sm:p-10 lg:p-12 text-left">
          
          {submitted ? (
            /* Confirmation State */
            <div className="text-center py-10 sm:py-14 space-y-6 animate-in zoom-in-95 duration-400">
              <div className="w-20 h-20 rounded-full bg-[#FAF0ED] border-2 border-[#8A384A] text-[#8A384A] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-widest text-[#8A384A] font-bold">
                  ¡Solicitud Registrada con Éxito!
                </span>
                <h3 className="text-3xl font-editorial text-[#292224]">
                  Gracias, {formData.clientName}
                </h3>
                <p className="text-sm text-[#665257] leading-relaxed">
                  Hemos guardado tu preferencia para <strong>{selectedService.name}</strong> en modalidad{' '}
                  <strong>{formData.modality === 'domicilio' ? 'A Domicilio' : 'En Nuestro Local'}</strong> el{' '}
                  <strong>{formData.date || 'la fecha acordada'}</strong> a las <strong>{formData.time}</strong>.
                </p>
              </div>

              {/* Action: Immediate WhatsApp dispatch */}
              <div className="pt-4 max-w-md mx-auto space-y-3">
                <a
                  href={generateWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmar ahora vía WhatsApp</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#7A646A] hover:text-[#292224] transition-colors underline py-2 block mx-auto cursor-pointer"
                >
                  Editar o enviar otra reserva
                </button>
              </div>
            </div>
          ) : (
            /* Active Interactive Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Modalidad Selector */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-[#8A384A] font-bold block">
                  1. Selecciona la Modalidad
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* A Domicilio */}
                  <label
                    onClick={() => setFormData({ ...formData, modality: 'domicilio' })}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                      formData.modality === 'domicilio'
                        ? 'border-[#8A384A] bg-[#FAF0ED] shadow-sm'
                        : 'border-[#EADBDF] bg-white hover:border-[#D0B8BF]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      formData.modality === 'domicilio' ? 'bg-[#8A384A] text-white' : 'bg-[#FAF0ED] text-[#8A384A]'
                    }`}>
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm sm:text-base font-editorial font-medium text-[#292224]">
                        A Domicilio
                      </span>
                      <span className="block text-xs text-[#7A646A]">
                        Nos trasladamos a tu residencia u hotel
                      </span>
                    </div>
                  </label>

                  {/* En Nuestro Local */}
                  <label
                    onClick={() => setFormData({ ...formData, modality: 'local' })}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                      formData.modality === 'local'
                        ? 'border-[#8A384A] bg-[#FAF0ED] shadow-sm'
                        : 'border-[#EADBDF] bg-white hover:border-[#D0B8BF]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      formData.modality === 'local' ? 'bg-[#8A384A] text-white' : 'bg-[#FAF0ED] text-[#8A384A]'
                    }`}>
                      <Home className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm sm:text-base font-editorial font-medium text-[#292224]">
                        En Nuestro Local
                      </span>
                      <span className="block text-xs text-[#7A646A]">
                        Experiencia sensorial en nuestro atelier
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* 2. Servicio Selector */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-[#8A384A] font-bold block">
                  2. Selecciona el Servicio Principal
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {serviceOptions.map((serv) => {
                    const isSelected = formData.serviceId === serv.id;
                    const IconComp = serv.icon;
                    return (
                      <button
                        type="button"
                        key={serv.id}
                        onClick={() => setFormData({ ...formData, serviceId: serv.id })}
                        className={`p-3 rounded-2xl border transition-all text-left flex flex-col justify-between cursor-pointer min-h-[95px] ${
                          isSelected
                            ? 'border-[#8A384A] bg-[#292224] text-white shadow-md'
                            : 'border-[#EADBDF] bg-[#FAF6F4]/50 hover:bg-[#FAF0ED] text-[#292224]'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <IconComp className={`w-4 h-4 ${isSelected ? 'text-[#E8B4B8]' : 'text-[#8A384A]'}`} />
                          <span className={`text-[10px] ${isSelected ? 'text-[#E8DDD8]' : 'text-[#7A646A]'}`}>
                            {serv.duration}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs sm:text-sm font-editorial font-medium line-clamp-2 leading-tight">
                            {serv.name}
                          </span>
                          <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-[#E8B4B8]' : 'text-[#8A384A]'}`}>
                            {serv.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Fecha y Hora */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#8A384A]" />
                    <span>Fecha deseada *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F4] border border-[#E5D5D1] focus:border-[#8A384A] focus:outline-none text-sm text-[#292224]"
                  />
                  {errors.date && <p className="text-[11px] text-red-500">{errors.date}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8A384A]" />
                    <span>Horario preferido</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          formData.time === slot
                            ? 'bg-[#8A384A] text-white font-bold shadow-xs'
                            : 'bg-[#FAF6F4] text-[#59474C] hover:bg-[#FAF0ED] border border-[#E5D5D1]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Dirección si es a domicilio */}
              {formData.modality === 'domicilio' && (
                <div className="space-y-2 animate-in fade-in duration-300">
                  <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A384A]" />
                    <span>Dirección completa o zona para el servicio a domicilio *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Calle Velázquez 45, 3ºB, o nombre del Hotel / Finca"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F4] border border-[#E5D5D1] focus:border-[#8A384A] focus:outline-none text-sm text-[#292224]"
                  />
                  {errors.address && <p className="text-[11px] text-red-500">{errors.address}</p>}
                </div>
              )}

              {/* 5. Datos Personales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8A384A]" />
                    <span>Nombre y Apellidos *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F4] border border-[#E5D5D1] focus:border-[#8A384A] focus:outline-none text-sm text-[#292224]"
                  />
                  {errors.clientName && <p className="text-[11px] text-red-500">{errors.clientName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#8A384A]" />
                    <span>Teléfono o WhatsApp *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+34 600 000 000"
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F4] border border-[#E5D5D1] focus:border-[#8A384A] focus:outline-none text-sm text-[#292224]"
                  />
                  {errors.clientPhone && <p className="text-[11px] text-red-500">{errors.clientPhone}</p>}
                </div>
              </div>

              {/* 6. Comentarios / Estilo / Preferencias */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#7A646A] font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#8A384A]" />
                  <span>Comentarios o estilo de preferencia (opcional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre el evento (boda, gala, graduación), el estilo que imaginas (Clean girl, glam, gothic, artístico...) o cualquier alergia a productos."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF6F4] border border-[#E5D5D1] focus:border-[#8A384A] focus:outline-none text-sm text-[#292224] resize-none"
                />
              </div>

              {/* Summary Pill */}
              <div className="p-4 rounded-2xl bg-[#FAF0ED] border border-[#EADBDF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#59474C]">
                <div>
                  <span>Resumen: </span>
                  <strong className="text-[#8A384A]">{selectedService.name}</strong> ({selectedService.duration})
                  {' • '}
                  <span>{formData.modality === 'domicilio' ? 'A Domicilio' : 'En Estudio'}</span>
                  {' • '}
                  <span>Hora: <strong>{formData.time}</strong></span>
                </div>
                <div className="font-semibold text-[#8A384A]">
                  Inversión aproximada: {selectedService.price}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#292224] hover:bg-[#8A384A] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl group"
              >
                <Sparkles className="w-4 h-4 text-[#E8B4B8] group-hover:scale-110 transition-transform" />
                <span>Confirmar y agendar cita previa</span>
              </button>

              <p className="text-[11px] text-center text-[#8C767C]">
                🔒 Tus datos están protegidos. No cobramos hasta confirmar el horario definitivo de tu cita.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
