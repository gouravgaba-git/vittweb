import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Layers, Scroll } from 'lucide-react';

const pagesInfo = [
  { id: 0, title: 'Hero & Journey', label: '01' },
  { id: 1, title: 'Story & Purpose', label: '02' },
  { id: 2, title: 'Partner Support', label: '03' },
  { id: 3, title: 'Activities & Contact', label: '04' },
];

export default function PageSwipeControls({
  currentPage,
  setCurrentPage,
  isSwipeMode,
  setIsSwipeMode,
  totalPages = 4,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const hideTimerRef = useRef(null);

  // Auto-hide logic: show bar on user activity, hide after 3.5 seconds of inactivity
  const triggerActivity = () => {
    setIsVisible(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
  };

  useEffect(() => {
    triggerActivity();

    const handleUserActivity = () => {
      triggerActivity();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [currentPage, isSwipeMode]);

  const handlePrev = () => {
    triggerActivity();
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    triggerActivity();
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className="fixed z-40 select-none pointer-events-none transition-all duration-300 bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-4 lg:right-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
    >
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.92,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onMouseEnter={() => {
          setIsVisible(true);
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        }}
        onMouseLeave={triggerActivity}
        className="pointer-events-auto flex items-center flex-row md:flex-col gap-1.5 sm:gap-2 md:gap-2.5 bg-vk-teal-deep/90 backdrop-blur-xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-2.5 md:py-3.5 rounded-full border border-white/25 shadow-2xl max-w-[95vw] md:max-w-none"
      >
        {/* Mode Switcher Toggle Button (On top in desktop, at end in mobile) */}
        <div className="order-last md:order-first">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              triggerActivity();
              setIsSwipeMode(!isSwipeMode);
            }}
            title={isSwipeMode ? 'Switch to Continuous Scroll' : 'Switch to Page Swiping Mode'}
            className="p-1.5 sm:p-2 rounded-full bg-white/15 text-white border border-white/20 flex items-center justify-center group relative hover:bg-vk-orange hover:border-vk-orange transition-colors"
            aria-label="Toggle Navigation Mode"
          >
            {isSwipeMode ? (
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vk-gold group-hover:text-white transition-colors" />
            ) : (
              <Scroll className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-vk-mint group-hover:text-white transition-colors" />
            )}

            {/* Responsive Tooltip */}
            <span className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 md:bottom-auto md:mb-0 md:left-auto md:right-full md:mr-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/20 z-50">
              {isSwipeMode ? 'Page Swiping Active' : 'Continuous Scroll Active'}
            </span>
          </motion.button>
        </div>

        {/* Previous Page Button (Up on Desktop, Left on Mobile) */}
        {isSwipeMode && (
          <div className="order-1 md:order-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === 0}
              onClick={handlePrev}
              className={`p-1.5 sm:p-2 rounded-full border border-white/20 transition-all ${
                currentPage === 0
                  ? 'opacity-30 cursor-not-allowed text-white/50 border-white/10'
                  : 'bg-white/15 text-white hover:bg-vk-orange hover:border-vk-orange'
              }`}
              aria-label="Previous Page"
            >
              <span className="hidden md:block">
                <ChevronUp className="w-4 h-4" />
              </span>
              <span className="block md:hidden">
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </motion.button>
          </div>
        )}

        {/* Page Dots Indicator (Vertical column on Desktop, Horizontal row on Mobile) */}
        {isSwipeMode && (
          <div className="order-2 md:order-3 flex items-center flex-row md:flex-col gap-1.5 sm:gap-2 md:gap-2.5 px-1 py-0.5 md:py-1">
            {pagesInfo.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    triggerActivity();
                    setCurrentPage(page.id);
                  }}
                  className="group relative flex items-center justify-center p-1"
                  aria-label={`Jump to ${page.title}`}
                >
                  <div
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-5 sm:w-6 h-2 sm:h-2.5 md:w-2.5 md:h-7 bg-vk-orange shadow-glow-orange'
                        : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 group-hover:bg-white/80'
                    }`}
                  />

                  {/* Responsive Tooltip */}
                  <span className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 md:bottom-auto md:mb-0 md:left-auto md:right-full md:mr-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/20 flex items-center gap-1.5 z-50">
                    <span className="text-vk-gold">{page.label}</span>
                    <span>{page.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Next Page Button (Down on Desktop, Right on Mobile) */}
        {isSwipeMode && (
          <div className="order-3 md:order-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={currentPage === totalPages - 1}
              onClick={handleNext}
              className={`p-1.5 sm:p-2 rounded-full border border-white/20 transition-all ${
                currentPage === totalPages - 1
                  ? 'opacity-30 cursor-not-allowed text-white/50 border-white/10'
                  : 'bg-white/15 text-white hover:bg-vk-orange hover:border-vk-orange'
              }`}
              aria-label="Next Page"
            >
              <span className="hidden md:block">
                <ChevronDown className="w-4 h-4" />
              </span>
              <span className="block md:hidden">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </motion.button>
          </div>
        )}

        {/* Page Counter Badge */}
        {isSwipeMode && (
          <div className="order-4 md:order-5 px-2 py-0.5 md:px-2 md:py-1 rounded-full bg-white/15 text-vk-gold text-[10px] font-black tracking-wider border border-white/15 text-center whitespace-nowrap">
            0{currentPage + 1}<span className="text-white/40 font-normal">/</span>0{totalPages}
          </div>
        )}
      </motion.div>
    </div>
  );
}
