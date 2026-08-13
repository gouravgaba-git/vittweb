import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PartnerSection from './components/PartnerSection';
import ActivitiesGallery from './components/ActivitiesGallery';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isClimbing, setIsClimbing] = useState(false);

  const handleStartJourney = () => {
    // Scroll smoothly to hero section if not there
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
    // Trigger climbing child animation
    setIsClimbing(true);
  };

  return (
    <div className="min-h-screen bg-vk-bg text-slate-800 flex flex-col font-sans selection:bg-vk-orange selection:text-white">
      {/* Top Navbar */}
      <Navigation onStartJourney={handleStartJourney} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Page 1: Hero Section with Stationary Ladder & Climbing Child Animation */}
        <HeroSection isClimbing={isClimbing} setIsClimbing={setIsClimbing} />

        {/* Page 2: Story Behind Us & What Drives Us Section */}
        <StorySection />

        {/* Page 3: Partner With Purpose Section (3 Interactive Pillars & Impact Counters) */}
        <PartnerSection />

        {/* Page 4: Activities Section with Lightbox Photo Gallery */}
        <ActivitiesGallery />

        {/* Page 4: Closing, Contact Details & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
