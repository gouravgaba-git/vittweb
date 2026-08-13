import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Target, HeartHandshake, Sparkles, CheckCircle2, Award } from 'lucide-react';

import studentStoryImg from '../assets/brochure/student_story.png';
import indiaMapImg from '../assets/brochure/india_map.png';

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brochure-pattern text-vk-dark overflow-hidden border-t border-vk-mint/20"
    >
      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">

        {/* ============================================================ */}
        {/* SECTION 1: THE STORY BEHIND US (Matching PDF Page 2 Top Row) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-vk-mint/30">
          
          {/* Left Column: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vk-teal-deep text-white font-extrabold text-xs uppercase tracking-wider shadow-sm">
              <BookOpen className="w-4 h-4 text-vk-gold" />
              <span>VittKushal Purpose</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-vk-teal-deep tracking-tight leading-tight">
              THE STORY <span className="text-vk-orange underline decoration-vk-gold decoration-4">BEHIND US</span>
            </h2>

            <p className="text-vk-dark text-base sm:text-lg leading-relaxed font-semibold">
              The purpose of <strong className="text-vk-teal-deep font-black">VittKushal</strong> is to ensure that no talented student steps back from their dreams simply because of their location or limited access to opportunities. We believe talent exists everywhere. All it needs is the right guidance, skill development, and an opportunity to grow.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Somewhere in a small town of Bharat, a student sits with a notebook full of ideas, dreams in their eyes, and the determination to build a better future. Their challenge is not a lack of talent or ambition, but limited access to the right opportunities and platforms where their potential can be recognized. We have met these students, witnessed their aspirations, and understood the journeys they undertake to turn their dreams into reality.
            </p>

            <div className="p-4 bg-vk-aqua-light border-l-4 border-vk-orange rounded-r-2xl flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-vk-orange flex-shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-vk-teal-deep italic">
                "VittKushal — The bridge from skills to success: कुशलता से सफलता तक"
              </span>
            </div>
          </motion.div>

          {/* Right Column: Student Illustration Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-3 bg-gradient-to-r from-vk-teal-deep to-vk-orange rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-vk-mint/30 overflow-hidden">
                <img
                  src={studentStoryImg}
                  alt="Student with Dreams and Ambition in Tier 2/3 Town"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* SECTION 2: WHAT DRIVES US EVERY DAY & BHARAT MAP (Middle Row) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clean India Map Graphic (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white p-6 rounded-3xl shadow-xl border border-vk-mint/30 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-vk-mint/20 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-vk-orange" />
                <h4 className="text-xs sm:text-sm font-extrabold text-vk-teal-deep uppercase tracking-wider">
                  Tier 2 & Tier 3 Talent Network
                </h4>
              </div>
              <span className="text-[11px] bg-vk-orange text-white font-extrabold px-3 py-1 rounded-full shadow-sm">
                Bharat Map
              </span>
            </div>

            <div className="relative w-full h-[360px] sm:h-[400px] bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-slate-100">
              <img
                src={indiaMapImg}
                alt="India Map Connecting Talent Across Cities"
                className="h-full w-auto object-contain drop-shadow-md"
              />
            </div>

            <div className="p-3 bg-vk-aqua-light rounded-xl border border-vk-mint/30 text-center">
              <span className="text-xs font-extrabold text-vk-teal-deep uppercase tracking-wider">
                Connecting Skilled Minds Across Towns & Cities of Bharat
              </span>
            </div>
          </motion.div>

          {/* Right Column: WHAT DRIVES US EVERY DAY (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-vk-mint/30 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vk-orange/10 border border-vk-orange/30 text-vk-orange font-extrabold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Our Core Motivation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-vk-teal-deep tracking-tight">
              WHAT DRIVES US <span className="text-vk-orange">EVERY DAY</span>
            </h2>

            <p className="text-base sm:text-lg font-bold text-vk-teal-deep leading-relaxed">
              India does not have a shortage of talent. The challenge is connecting that talent with the right opportunities.
            </p>

            <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium">
              Across different cities and towns of India, many students aspire to build their careers in <strong className="text-vk-teal-blue font-bold">Accounting, Taxation, and Finance</strong>. These students have the passion to learn and the dedication to grow. Many of them come from Tier 2 and Tier 3 cities, where they continue developing their knowledge and skills with limited resources, but often need the right platform and direction to showcase their capabilities.
            </p>

            <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium">
              At <strong className="text-vk-teal-deep font-bold">VittKushal</strong>, we empower students with practical knowledge and industry-relevant skills through focused learning, guidance, and career support — because every deserving student deserves the right platform to showcase their potential.
            </p>

            {/* Key Focus Area Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-vk-aqua-light p-3 rounded-2xl border border-vk-mint/30">
                <CheckCircle2 className="w-4 h-4 text-vk-orange flex-shrink-0" />
                <span className="text-xs font-bold text-vk-teal-deep">Accounting & Tax</span>
              </div>
              <div className="flex items-center gap-2 bg-vk-aqua-light p-3 rounded-2xl border border-vk-mint/30">
                <CheckCircle2 className="w-4 h-4 text-vk-orange flex-shrink-0" />
                <span className="text-xs font-bold text-vk-teal-deep">Tier 2 & 3 Talent</span>
              </div>
              <div className="flex items-center gap-2 bg-vk-aqua-light p-3 rounded-2xl border border-vk-mint/30">
                <CheckCircle2 className="w-4 h-4 text-vk-orange flex-shrink-0" />
                <span className="text-xs font-bold text-vk-teal-deep">Industry Guidance</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* SECTION 3: TOGETHER WE CAN UNLOCK HIDDEN POTENTIAL (Bottom Row) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-vk-teal-deep via-vk-teal-blue to-vk-teal-deep text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-4 border border-white/20 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-vk-orange/20 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-vk-gold">
            TOGETHER, WE CAN UNLOCK HIDDEN POTENTIAL!!
          </h3>

          <p className="text-vk-aqua text-sm sm:text-base max-w-4xl mx-auto font-medium leading-relaxed">
            "Strong collaborations are not built only on business transactions. Strong collaborations are built on a shared purpose and meaningful impact."
          </p>

          <div className="pt-4 border-t border-white/20 max-w-3xl mx-auto text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            At VittKushal, we believe every organisation has the power to contribute beyond business growth — by strengthening students' careers, families, and the future workforce of Bharat. Through your collaboration, we can collectively build a skilled, confident, and industry-ready talent pool.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
