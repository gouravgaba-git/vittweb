import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

import gallery1 from '../assets/brochure/gallery_1.jpg';
import gallery2 from '../assets/brochure/gallery_2.jpg';
import gallery3 from '../assets/brochure/gallery_3.jpg';
import gallery4 from '../assets/brochure/gallery_4.jpg';
import gallery5 from '../assets/brochure/gallery_5.jpg';
import gallery6 from '../assets/brochure/gallery_6.jpg';

const photos = [
  { id: 1, src: gallery1, title: 'Practical Accounting Workshop', category: 'Training Session' },
  { id: 2, src: gallery2, title: 'Interactive Learning & Guidance', category: 'Classroom' },
  { id: 3, src: gallery3, title: 'Taxation & Financial Literacy', category: 'Skill Building' },
  { id: 4, src: gallery4, title: 'Student Career Mentorship', category: 'Guidance' },
  { id: 5, src: gallery5, title: 'Team Collaboration & Practice', category: 'Workshops' },
  { id: 6, src: gallery6, title: 'Industry Readiness Program', category: 'Empowerment' },
];

export default function ActivitiesGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => (prev + 1) % photos.length);
      }
      if (e.key === 'ArrowLeft' && selectedPhotoIndex !== null) {
        setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section
      id="activities"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-vk-bg text-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 z-10 relative">

        {/* Section Header with Brochure Activities Graphic Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-vk-orange/10 text-vk-orange font-bold text-xs uppercase tracking-widest border border-vk-orange/20">
            <Camera className="w-4 h-4" />
            <span>Field Work & Classroom Moments</span>
          </div>

          {/* Styled ACTIVITIES Header Banner */}
          <div className="flex justify-center items-center my-2">
            <div className="px-10 py-3 bg-gradient-to-r from-vk-teal-deep via-vk-teal-blue to-vk-teal-deep text-white text-2xl sm:text-3xl font-black uppercase tracking-widest rounded-full shadow-lg border-2 border-vk-gold">
              ACTIVITIES
            </div>
          </div>

          <p className="text-slate-600 text-sm sm:text-base italic font-semibold">
            "Today's learner can become tomorrow's leader."
          </p>

          <blockquote className="text-sm sm:text-base font-bold text-vk-navy bg-white p-4 rounded-2xl shadow-sm border border-slate-200 inline-block">
            "Talent exists everywhere — it only needs the right opportunity"
          </blockquote>
        </motion.div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo Image */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vk-navy/90 via-vk-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-vk-amber">
                    {photo.category}
                  </span>
                  <h4 className="text-base font-bold">{photo.title}</h4>
                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-vk-amber">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-4 flex items-center justify-between bg-white border-t border-slate-100">
                <div>
                  <span className="block text-xs font-bold text-vk-navy">{photo.title}</span>
                  <span className="text-[11px] text-slate-500">{photo.category}</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-100 text-vk-navy group-hover:bg-vk-orange group-hover:text-white transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Framer Motion Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-vk-navy-dark rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-vk-orange transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-vk-orange transition-colors"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setSelectedPhotoIndex((prev) => (prev + 1) % photos.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-vk-orange transition-colors"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Expanded Image */}
              <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-black/40 p-2">
                <img
                  src={photos[selectedPhotoIndex].src}
                  alt={photos[selectedPhotoIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Lightbox Footer Bar */}
              <div className="p-6 bg-vk-navy text-white flex flex-wrap items-center justify-between border-t border-white/10 gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-vk-amber">
                    Photo {selectedPhotoIndex + 1} of {photos.length} — {photos[selectedPhotoIndex].category}
                  </span>
                  <h3 className="text-xl font-bold">{photos[selectedPhotoIndex].title}</h3>
                </div>

                <div className="text-xs text-slate-300 italic flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-vk-orange" />
                  <span>VittKushal Learning & Skill Development Activity</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
