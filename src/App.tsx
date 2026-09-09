import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { InteractiveLookbookHotspots } from './components/InteractiveLookbookHotspots';
import { StyleMatrixSection } from './components/StyleMatrixSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { CinematicStories } from './components/CinematicStories';
import { TrendsSection } from './components/TrendsSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConciergeDrawer } from './components/ConciergeDrawer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem, BookingModality } from './types';

export default function App() {
  const [detailedService, setDetailedService] = useState<ServiceItem | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);
  const [selectedModality, setSelectedModality] = useState<BookingModality>('domicilio');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('maquillaje');
  const [selectedStyleNote, setSelectedStyleNote] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('reservar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollections = () => {
    const el = document.getElementById('colecciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLookbook = () => {
    const el = document.getElementById('explora-el-look');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCarousel = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsConciergeOpen(true);
  };

  const handleSelectHotspotService = (serviceId: string, styleNote: string) => {
    setSelectedServiceId(serviceId);
    setSelectedStyleNote(styleNote);
    setIsConciergeOpen(true);
  };

  const handleSelectStyleFromMatrix = (styleName: string) => {
    setSelectedStyleNote(styleName);
    setIsConciergeOpen(true);
  };

  const handleSelectModality = (modality: BookingModality) => {
    setSelectedModality(modality);
    setIsConciergeOpen(true);
  };

  const handleBookLookFromGallery = (lookTitle: string) => {
    setSelectedStyleNote(lookTitle);
    setIsConciergeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F4] text-[#1F191B] selection:bg-[#E8B4B8]/40 selection:text-[#521C26]">
      {/* 1. Sleek Minimalist Navigation */}
      <Navbar 
        onOpenBooking={scrollToBooking} 
        onOpenConciergeDrawer={() => setIsConciergeOpen(true)}
      />

      <main>
        {/* 2. Full-bleed Cinematic Hero (Nike-style experience) */}
        <Hero
          onExploreCollections={scrollToCollections}
          onExploreLookbook={scrollToLookbook}
        />

        {/* 3. Horizontal Trending Drops Carousel (Like Nike Featured Products) */}
        <FeaturedCarousel
          onViewService={(service) => setDetailedService(service)}
          onSelectService={handleSelectServiceFromCarousel}
        />

        {/* 4. Interactive Lookbook Hotspots (Nike "Shop the Look" for Beauty) */}
        <InteractiveLookbookHotspots
          onSelectHotspotService={handleSelectHotspotService}
        />

        {/* 5. The Style Edit ("Tu estilo. Tus reglas.") */}
        <StyleMatrixSection
          onSelectStyleForBooking={handleSelectStyleFromMatrix}
        />

        {/* 6. Transformation Lab (Interactive Before & After) */}
        <div id="transformaciones">
          <BeforeAfterSection />
        </div>

        {/* 7. Cinematic Stories (A Domicilio vs En Atelier + Craft Manifesto) */}
        <CinematicStories
          onSelectModality={handleSelectModality}
        />

        {/* 8. Beauty Trends - Revista Digital Lookbook */}
        <TrendsSection
          onBookTrendStyle={() => setIsConciergeOpen(true)}
        />

        {/* 9. Visual Portfolio Gallery with Lightbox */}
        <PortfolioGallery
          onBookLook={handleBookLookFromGallery}
        />

        {/* 10. Dedicated Booking Concierge Section (Bottom of Page) */}
        <BookingSection
          preselectedModality={selectedModality}
          preselectedServiceId={selectedServiceId}
          preselectedStyleNote={selectedStyleNote}
        />

        {/* 11. Testimonials & FAQ */}
        <TestimonialsSection />
      </main>

      {/* 12. Luxury Footer */}
      <Footer
        onOpenBooking={() => setIsConciergeOpen(true)}
        onSelectService={(servId) => {
          setSelectedServiceId(servId);
          setIsConciergeOpen(true);
        }}
      />

      {/* Slide-over Concierge Drawer (Non-spammy, quiet booking assistant) */}
      <ConciergeDrawer
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        preselectedModality={selectedModality}
        preselectedServiceId={selectedServiceId}
        preselectedStyleNote={selectedStyleNote}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={detailedService}
        onClose={() => setDetailedService(null)}
        onBookService={(servId) => {
          setSelectedServiceId(servId);
          setIsConciergeOpen(true);
        }}
      />

      {/* Floating Discreet WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
