import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Layers, Scroll } from 'lucide-react';

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
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 select-none">
      {/* Mode Switcher Toggle Pill */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsSwipeMode(!isSwipeMode)}
        title={isSwipeMode ? 'Switch to Continuous Scroll' : 'Switch to Page Swiping Mode'}
        className="p-2.5 rounded-full bg-vk-teal-deep/90 text-white border border-white/30 shadow-lg backdrop-blur-md flex items-center justify-center group relative hover:bg-vk-orange transition-colors mb-2"
      >
        {isSwipeMode ? (
          <Layers className="w-5 h-5 text-vk-gold group-hover:text-white" />
        ) : (
          <Scroll className="w-5 h-5 text-vk-mint group-hover:text-white" />
        )}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-white/20">
          {isSwipeMode ? 'Page Swiping Active' : 'Continuous Scroll Active'}
        </span>
      </motion.button>

      {/* Prev Page Button (Swiping Mode Only) */}
      {isSwipeMode && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === 0}
          onClick={handlePrev}
          className={`p-2 rounded-full border border-white/20 shadow-md backdrop-blur-md transition-all ${
            currentPage === 0
              ? 'bg-slate-300/40 text-slate-400 cursor-not-allowed'
              : 'bg-white/80 text-vk-teal-deep hover:bg-vk-orange hover:text-white'
          }`}
          aria-label="Previous Page"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Page Dots Indicator */}
      {isSwipeMode && (
        <div className="flex flex-col items-center gap-2.5 py-2 px-2 bg-white/70 backdrop-blur-md rounded-full border border-vk-mint/40 shadow-md">
          {pagesInfo.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className="group relative flex items-center justify-center p-1"
                aria-label={`Jump to ${page.title}`}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-3 h-7 bg-vk-orange shadow-glow-orange'
                      : 'w-3 h-3 bg-vk-teal-deep/30 group-hover:bg-vk-teal-deep/70'
                  }`}
                />

                {/* Tooltip on hover */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-vk-teal-deep text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-white/20 flex items-center gap-1.5">
                  <span className="text-vk-gold">{page.label}</span>
                  <span>{page.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Next Page Button (Swiping Mode Only) */}
      {isSwipeMode && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === totalPages - 1}
          onClick={handleNext}
          className={`p-2 rounded-full border border-white/20 shadow-md backdrop-blur-md transition-all ${
            currentPage === totalPages - 1
              ? 'bg-slate-300/40 text-slate-400 cursor-not-allowed'
              : 'bg-white/80 text-vk-teal-deep hover:bg-vk-orange hover:text-white'
          }`}
          aria-label="Next Page"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      )}

      {/* Floating Counter Badge */}
      {isSwipeMode && (
        <div className="mt-1 px-2.5 py-1 rounded-full bg-vk-teal-deep text-white text-[10px] font-black tracking-widest shadow-md border border-white/20">
          0{currentPage + 1} / 0{totalPages}
        </div>
      )}
    </div>
  );
}
