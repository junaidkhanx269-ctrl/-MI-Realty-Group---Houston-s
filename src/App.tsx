/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopAlertBanner } from './components/TopAlertBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedBuilds } from './components/FeaturedBuilds';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VideoTours } from './components/VideoTours';
import { ContactSection } from './components/ContactSection';
import { StickyCallBar } from './components/StickyCallBar';
import { Footer } from './components/Footer';
import { ScheduleTourModal } from './components/ScheduleTourModal';
import { NewBuildListModal } from './components/NewBuildListModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { NewBuildHome, TikTokTour, LeadFormData } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Modal states
  const [scheduleTourOpen, setScheduleTourOpen] = useState(false);
  const [selectedHomeForTour, setSelectedHomeForTour] = useState<NewBuildHome | null>(null);

  const [newListModalOpen, setNewListModalOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxHome, setLightboxHome] = useState<NewBuildHome | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeTourVideo, setActiveTourVideo] = useState<TikTokTour | null>(null);

  // Success Toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenScheduleTour = (home?: NewBuildHome | string) => {
    if (typeof home === 'object' && home !== null) {
      setSelectedHomeForTour(home);
    } else {
      setSelectedHomeForTour(null);
    }
    setScheduleTourOpen(true);
  };

  const handleOpenGallery = (home: NewBuildHome, imageIndex: number) => {
    setLightboxHome(home);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  const handleOpenVideoModal = (tour: TikTokTour) => {
    setActiveTourVideo(tour);
    setVideoModalOpen(true);
  };

  const handleLeadSuccess = (data: LeadFormData) => {
    triggerToast(`Success! Sugar Land new build list dispatched for ${data.name}.`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black">
      
      {/* Top Red Alert Banner: "Limited Time: $10k Closing Costs" */}
      <TopAlertBanner onClaimClick={() => setNewListModalOpen(true)} />

      {/* Main Luxury Navigation */}
      <Navbar
        onScheduleClick={() => handleOpenScheduleTour()}
        onGetListClick={() => setNewListModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScheduleTour={() => handleOpenScheduleTour()}
          onGetList={() => setNewListModalOpen(true)}
        />

        {/* Section 1: Featured New Builds (3 houses with price, beds, baths, sqft) */}
        <FeaturedBuilds
          onScheduleTour={(home) => handleOpenScheduleTour(home)}
          onOpenGallery={handleOpenGallery}
          onGetList={() => setNewListModalOpen(true)}
        />

        {/* Section 2: Why Choose Us - Houston New Build Specialist, Closing Cost Help, Private Tours */}
        <WhyChooseUs
          onScheduleTour={() => handleOpenScheduleTour()}
          onGetList={() => setNewListModalOpen(true)}
        />

        {/* Section 3: Video Tours - placeholder for TikTok tours */}
        <VideoTours
          onScheduleTour={(tourTitle) => handleOpenScheduleTour(tourTitle)}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* Section 4: Contact - Form (Name, Phone, Budget) + Map Sugar Land TX + Instagram feed link */}
        <ContactSection onLeadSuccess={handleLeadSuccess} />
      </main>

      {/* Footer: MI Realty Group Houston | (832) 557-4001 */}
      <Footer />

      {/* Sticky Call Button Bottom */}
      <StickyCallBar
        onScheduleClick={() => handleOpenScheduleTour()}
        onGetListClick={() => setNewListModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ScheduleTourModal
        isOpen={scheduleTourOpen}
        onClose={() => setScheduleTourOpen(false)}
        selectedHome={selectedHomeForTour}
      />

      <NewBuildListModal
        isOpen={newListModalOpen}
        onClose={() => setNewListModalOpen(false)}
        onLeadSuccess={handleLeadSuccess}
      />

      <ImageLightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        home={lightboxHome}
        initialIndex={lightboxIndex}
        onScheduleTour={(home) => {
          setLightboxOpen(false);
          handleOpenScheduleTour(home);
        }}
      />

      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        tour={activeTourVideo}
        onScheduleTour={(title) => {
          setVideoModalOpen(false);
          handleOpenScheduleTour(title);
        }}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#141414] border border-[#D4AF37] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300 max-w-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

