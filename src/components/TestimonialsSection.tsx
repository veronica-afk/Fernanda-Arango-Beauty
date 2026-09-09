import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { REVIEWS_DATA, FAQS_DATA } from '../data/beautyData';

export const TestimonialsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] border border-[#E8D0D5] text-[#8A384A] text-[11px] font-semibold tracking-widest uppercase">
            <Star className="w-3.5 h-3.5 text-[#B88E52] fill-current" />
            <span>Voces de Nuestras Clientas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-[#292224] leading-tight">
            Experiencias que <span className="italic text-[#8A384A]">inspiran</span> confianza
          </h2>

          <p className="text-sm sm:text-base text-[#665257] leading-relaxed max-w-2xl mx-auto">
            La satisfacción de quienes ya han vivido la experiencia de belleza y estilo de Fernanda Arango Beauty.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20 text-left">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EBDCD7] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#B88E52]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#59474C] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-[#F2E5E1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#EADBDF]"
                  />
                  <div>
                    <h4 className="text-sm font-editorial font-semibold text-[#292224]">
                      {rev.name}
                    </h4>
                    <span className="text-xs text-[#8C767C] block">
                      {rev.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF0ED] text-[#8A384A] font-medium border border-[#E8D4CF]">
                  {rev.modality}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto text-left pt-6">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#8A384A] text-[11px] font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Preguntas Frecuentes</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-editorial text-[#292224]">
              Todo lo que necesitas saber antes de tu cita
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#EADBDF] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-editorial text-base sm:text-lg text-[#292224] hover:text-[#8A384A] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#8A384A] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#665257] leading-relaxed border-t border-[#F5EAE6] pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
