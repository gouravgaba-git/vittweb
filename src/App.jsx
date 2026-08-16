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
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.2,
  }),
  center: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0.2,
    transition: {
      duration: 0.38,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

export default function App() {
  const [isClimbing, setIsClimbing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSwipeMode, setIsSwipeMode] = useState(true);

  const totalPages = 4;
  const isAnimatingRef = useRef(false);
  const touchStartX = useRef(0);
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
    if (newPage < 0 || newPage >= totalPages || newPage === currentPage || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 450);
  };

  // Horizontal trackpad wheel scrolling (vertical mouse wheel page snapping disabled for smooth page reading)
  useEffect(() => {
    if (!isSwipeMode) return;

    const handleWheel = (e) => {
      // Only process explicit horizontal trackpad tilt/scroll (deltaX)
      if (e.target.closest('.no-swipe') || isAnimatingRef.current || Math.abs(e.deltaX) < 25) return;

      if (e.deltaX > 0) {
        changePage(currentPage + 1);
      } else if (e.deltaX < 0) {
        changePage(currentPage - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isSwipeMode]);

  // Touch Swipe gestures (Only horizontal left/right drag for page turning)
  const handleTouchStart = (e) => {
    if (!isSwipeMode) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!isSwipeMode || isAnimatingRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Only allow explicit horizontal swipe (when horizontal movement dominates vertical scroll)
    if (Math.abs(diffX) > Math.abs(diffY) * 1.5 && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        changePage(currentPage + 1);
      } else {
        changePage(currentPage - 1);
      }
    }
  };

  // Keyboard navigation (ArrowRight/Left, ArrowUp/Down, Space, PageUp/PageDown)
  useEffect(() => {
    if (!isSwipeMode) return;

    const handleKeyDown = (e) => {
      if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        (e.key === ' ' && !e.target.matches('input, textarea'))
      ) {
        e.preventDefault();
        changePage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
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
          /* PAGE SWIPING MODE WITH EASE-IN-OUT TRANSITIONS */
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
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16 will-change-transform transform-gpu"
                >
                  <HeroSection isClimbing={isClimbing} setIsClimbing={setIsClimbing} onNextPage={() => changePage(1)} />
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
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16 will-change-transform transform-gpu"
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
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16 will-change-transform transform-gpu"
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
                  className="absolute inset-0 w-full h-full overflow-y-auto pt-16 space-y-12 will-change-transform transform-gpu"
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
            <HeroSection isClimbing={isClimbing} setIsClimbing={setIsClimbing} onNextPage={() => changePage(1)} />
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
