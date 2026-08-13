import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PartnerSection from './components/PartnerSection';
import ActivitiesGallery from './components/ActivitiesGallery';
import ContactSection from './components/ContactSection';
import PageSwipeControls from './components/PageSwipeControls';

const pageVariants = {
  enter: (direction) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function App() {
  const [isClimbing, setIsClimbing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSwipeMode, setIsSwipeMode] = useState(true);

  const totalPages = 4;
  const isCooldownRef = useRef(false);
  const touchStartY = useRef(0);

  // Trigger child climbing journey
  const handleStartJourney = () => {
    if (isSwipeMode) {
      setCurrentPage(0);
    } else {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsClimbing(true);
  };

  const changePage = (newPage) => {
    if (newPage < 0 || newPage >= totalPages || newPage === currentPage) return;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  // Mouse wheel scroll snapping in Page Swiping Mode
  useEffect(() => {
    if (!isSwipeMode) return;

    const handleWheel = (e) => {
      // Don't intercept scroll if inside a lightbox or nested modal
      if (e.target.closest('.no-swipe') || isCooldownRef.current) return;

      if (Math.abs(e.deltaY) > 25) {
        isCooldownRef.current = true;
        if (e.deltaY > 0) {
          changePage(currentPage + 1);
        } else {
          changePage(currentPage - 1);
        }
        setTimeout(() => {
          isCooldownRef.current = false;
        }, 750);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isSwipeMode]);

  // Touch Swipe gestures for Mobile / Tablet
  const handleTouchStart = (e) => {
    if (!isSwipeMode) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!isSwipeMode || isCooldownRef.current) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 45) {
      isCooldownRef.current = true;
      if (diffY > 0) {
        changePage(currentPage + 1);
      } else {
        changePage(currentPage - 1);
      }
      setTimeout(() => {
        isCooldownRef.current = false;
      }, 700);
    }
  };

  // Keyboard navigation (Up/Down Arrow keys, Space, PageUp/PageDown)
  useEffect(() => {
    if (!isSwipeMode) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.target.matches('input, textarea'))) {
        e.preventDefault();
        changePage(currentPage + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        changePage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isSwipeMode]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen bg-vk-bg text-slate-800 flex flex-col font-sans selection:bg-vk-orange selection:text-white relative overflow-hidden"
    >
      {/* Top Navbar */}
      <Navigation
        onStartJourney={handleStartJourney}
        currentPage={currentPage}
        setCurrentPage={(p) => changePage(p)}
        isSwipeMode={isSwipeMode}
        setIsSwipeMode={setIsSwipeMode}
      />

      {/* Floating Swipe Controls & Indicators */}
      <PageSwipeControls
        currentPage={currentPage}
        setCurrentPage={(p) => changePage(p)}
        isSwipeMode={isSwipeMode}
        setIsSwipeMode={setIsSwipeMode}
        totalPages={totalPages}
      />

      {/* Main Page Area */}
      <main className="flex-grow w-full h-full relative overflow-hidden">
        {isSwipeMode ? (
          /* PAGE SWIPING MODE WITH 3D ANIMATED TRANSITIONS */
          <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentPage === 0 && (
                <motion.div
                  key="page-0"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16"
                >
                  <HeroSection isClimbing={isClimbing} setIsClimbing={setIsClimbing} />
                </motion.div>
              )}

              {currentPage === 1 && (
                <motion.div
                  key="page-1"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16"
                >
                  <StorySection />
                </motion.div>
              )}

              {currentPage === 2 && (
                <motion.div
                  key="page-2"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16"
                >
                  <PartnerSection />
                </motion.div>
              )}

              {currentPage === 3 && (
                <motion.div
                  key="page-3"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16 space-y-12"
                >
                  <ActivitiesGallery />
                  <ContactSection />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* STANDARD CONTINUOUS SCROLL MODE */
          <div className="pt-16 space-y-4">
            <HeroSection isClimbing={isClimbing} setIsClimbing={setIsClimbing} />
            <StorySection />
            <PartnerSection />
            <ActivitiesGallery />
            <ContactSection />
          </div>
        )}
      </main>
    </div>
  );
}
