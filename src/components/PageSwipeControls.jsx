import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers, Scroll } from 'lucide-react';

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

  // Auto-hide logic: show bar on user activity, hide after 3 seconds of inactivity
  const triggerActivity = () => {
    setIsVisible(true);
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
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
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 25, pointerEvents: isVisible ? 'auto' : 'none' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      onMouseEnter={() => {
        setIsVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }}
      onMouseLeave={triggerActivity}
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 sm:gap-3 bg-vk-teal-deep/90 backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/25 shadow-2xl select-none"
    >
      {/* Prev Page Button */}
      {isSwipeMode && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === 0}
          onClick={handlePrev}
          className={`p-2 rounded-full border border-white/20 transition-all ${
            currentPage === 0
              ? 'opacity-30 cursor-not-allowed text-white/50'
              : 'bg-white/15 text-white hover:bg-vk-orange hover:border-vk-orange'
          }`}
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}

      {/* Page Dots Indicator */}
      {isSwipeMode && (
        <div className="flex items-center gap-2 sm:gap-3 px-2 py-1">
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
                      ? 'w-7 sm:w-8 h-2.5 sm:h-3 bg-vk-orange shadow-glow-orange'
                      : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 group-hover:bg-white/80'
                  }`}
                />

                {/* Tooltip on hover */}
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/20 flex items-center gap-1.5">
                  <span className="text-vk-gold">{page.label}</span>
                  <span>{page.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Next Page Button */}
      {isSwipeMode && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === totalPages - 1}
          onClick={handleNext}
          className={`p-2 rounded-full border border-white/20 transition-all ${
            currentPage === totalPages - 1
              ? 'opacity-30 cursor-not-allowed text-white/50'
              : 'bg-white/15 text-white hover:bg-vk-orange hover:border-vk-orange'
          }`}
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}

      {/* Page Counter Badge */}
      {isSwipeMode && (
        <div className="px-2.5 py-1 rounded-full bg-white/15 text-vk-gold text-[10px] font-black tracking-wider border border-white/15 ml-1">
          0{currentPage + 1} / 0{totalPages}
        </div>
      )}

      {/* Mode Switcher Toggle Pill */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          triggerActivity();
          setIsSwipeMode(!isSwipeMode);
        }}
        title={isSwipeMode ? 'Switch to Continuous Scroll' : 'Switch to Page Swiping Mode'}
        className="p-2 rounded-full bg-white/15 text-white border border-white/20 flex items-center justify-center group relative hover:bg-vk-orange transition-colors ml-1"
      >
        {isSwipeMode ? (
          <Layers className="w-4 h-4 text-vk-gold group-hover:text-white" />
        ) : (
          <Scroll className="w-4 h-4 text-vk-mint group-hover:text-white" />
        )}
        <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-white/20">
          {isSwipeMode ? 'Page Swiping Active' : 'Continuous Scroll Active'}
        </span>
      </motion.button>
    </motion.div>
  );
}
