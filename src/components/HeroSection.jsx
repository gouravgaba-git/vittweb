import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Play, RotateCcw, Award, Sparkles, ChevronDown, CheckCircle2, Trophy, Target, Clock, Settings, ArrowUpRight } from 'lucide-react';

import ladderImg from '../assets/brochure/ladder.png';
import prakashClimbingImg from '../assets/brochure/prakash_climbing.png';
import girlTopImg from '../assets/brochure/girl_top.png';
import leftStudentsImg from '../assets/brochure/left_students.png';
import starDecorImg from '../assets/brochure/star_decor.png';

export default function HeroSection({ isClimbing, setIsClimbing }) {
  const [climbProgress, setClimbProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#F08010', '#F0C020', '#207060', '#60B090', '#FFFFFF'],
    });
  };

  // Auto-start animation when page loads
  useEffect(() => {
    const autoStartTimer = setTimeout(() => {
      setIsClimbing(true);
    }, 600);
    return () => clearTimeout(autoStartTimer);
  }, []);

  const handleStartClimb = () => {
    setIsClimbing(true);
    setHasCompleted(false);
    setClimbProgress(0);
    setStepIndex(0);
  };

  const handleResetClimb = () => {
    setIsClimbing(false);
    setHasCompleted(false);
    setClimbProgress(0);
    setStepIndex(0);
  };

  // Full ladder rung climbing path coordinates from bottom to top rung
  const ladderRungs = [
    { x: 0, y: 0, rotation: 0, label: 'Ambition' },
    { x: 6, y: -55, rotation: 3, label: 'Enrollment' },
    { x: 12, y: -110, rotation: -3, label: 'Skill Building' },
    { x: 18, y: -165, rotation: 4, label: 'Practical Accounting' },
    { x: 24, y: -220, rotation: -4, label: 'Taxation & Finance' },
    { x: 30, y: -275, rotation: 2, label: 'Internship Training' },
    { x: 36, y: -330, rotation: -2, label: 'Industry Practice' },
    { x: 42, y: -390, rotation: 0, label: 'Safalta / Achievement' },
  ];

  useEffect(() => {
    if (isClimbing && !hasCompleted) {
      const interval = setInterval(() => {
        setStepIndex((prev) => {
          if (prev < ladderRungs.length - 1) {
            const nextStep = prev + 1;
            setClimbProgress(Math.round((nextStep / (ladderRungs.length - 1)) * 100));
            return nextStep;
          } else {
            clearInterval(interval);
            setHasCompleted(true);
            setIsClimbing(false);
            triggerConfetti();
            return prev;
          }
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isClimbing, hasCompleted]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-brochure-pattern text-vk-dark overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Wave Swooshes top & bottom (matching PDF Page 1) */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-vk-teal-deep via-vk-teal-blue to-vk-mint opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Top Header Row matching Brochure Layout */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-vk-mint/30 pb-6"
        >
          {/* Top Tagline & Sub-heading */}
          <div className="flex items-center gap-3">
            <span className="inline-block px-3.5 py-1.5 bg-vk-teal-deep text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-sm">
              VittKushal Training & Placement
            </span>
            <span className="text-xs text-vk-teal-deep font-bold hidden sm:inline-block">
              • Kushalta Se Safalta Tak (कुशलता से सफलता तक)
            </span>
          </div>

          {/* Top Decorative Icons (Trophy, Target Arrow) */}
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-vk-mint/30 shadow-sm">
            <div className="flex items-center gap-2 text-vk-orange">
              <Trophy className="w-5 h-5 text-vk-gold animate-bounce" />
              <span className="text-xs font-bold text-vk-teal-deep uppercase tracking-wider">Goal & Achievement</span>
            </div>
            <div className="h-4 w-px bg-vk-mint/40" />
            <div className="flex items-center gap-1.5 text-vk-teal-blue">
              <ArrowUpRight className="w-5 h-5 text-vk-teal-deep" />
              <span className="text-xs font-bold">Career Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Page 1 Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          
          {/* LEFT COLUMN: Title, Taglines & Action Trigger (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 text-left z-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-vk-teal-deep font-bold text-xs shadow-sm border border-vk-mint/30">
              <Award className="w-4 h-4 text-vk-orange" />
              <span>Interactive Digital Brochure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-vk-teal-deep">
              From <span className="text-vk-orange underline decoration-vk-gold decoration-4">Ambition</span>
              <br />
              to <span className="text-vk-teal-blue">Achievement</span>
            </h1>

            <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              <strong className="text-vk-teal-deep font-extrabold">PLEASE HELP OUR STUDENTS TO REACH</strong> FROM <span className="text-vk-orange font-bold">KUSHALTA SE SAFALTA TAK</span>. 
              We empower students from Tier 2 & Tier 3 towns of Bharat with practical skills in Accounting, Taxation, & Finance.
            </p>

            {/* Interactive Journey Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={handleStartClimb}
                disabled={isClimbing}
                className={`relative group px-7 py-3.5 rounded-2xl font-extrabold text-sm uppercase tracking-wider flex items-center gap-3 transition-all duration-300 shadow-glow-orange ${
                  isClimbing
                    ? 'bg-slate-400 text-white cursor-not-allowed'
                    : 'bg-vk-orange text-white hover:bg-vk-orange/90 hover:scale-105 active:scale-95'
                }`}
              >
                <Play className={`w-5 h-5 ${isClimbing ? 'animate-spin' : ''}`} />
                <span>{isClimbing ? 'Child Climbing...' : hasCompleted ? 'Re-Play Journey' : 'Start Journey'}</span>
              </button>

              {hasCompleted && (
                <button
                  onClick={handleResetClimb}
                  className="px-5 py-3 rounded-2xl bg-white text-vk-teal-deep font-bold text-sm flex items-center gap-2 border border-vk-mint/40 shadow-sm hover:bg-slate-50 transition-all"
                >
                  <RotateCcw className="w-4 h-4 text-vk-orange" />
                  Reset
                </button>
              )}
            </div>

            {/* Progress Bar Card */}
            <div className="bg-white/90 border border-vk-mint/30 rounded-2xl p-4 shadow-md max-w-md">
              <div className="flex items-center justify-between text-xs font-bold text-vk-teal-deep mb-2">
                <span>Journey Step: <strong className="text-vk-orange">{ladderRungs[stepIndex].label}</strong></span>
                <span>{climbProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="bg-vk-orange h-full rounded-full shadow-glow-orange"
                  initial={{ width: '0%' }}
                  animate={{ width: `${climbProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {hasCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 mt-3 text-emerald-700 text-xs font-bold"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Success! Student reached the pinnacle of career success.</span>
                </motion.div>
              )}
            </div>

            {/* Left Students Group Illustration */}
            <div className="pt-2 flex items-center gap-4">
              <img
                src={leftStudentsImg}
                alt="VittKushal Students Group"
                className="h-28 w-auto object-contain drop-shadow-md"
              />
              <div className="text-xs text-vk-teal-deep font-semibold italic border-l-2 border-vk-orange pl-3">
                "Talent exists everywhere — it only needs the right opportunity."
              </div>
            </div>
          </motion.div>

          {/* CENTER & RIGHT COLUMN: Stationary Orange Ladder, Climbing Child, & Right Vertical Pill (7 Columns) */}
          <div className="lg:col-span-7 relative h-[520px] sm:h-[600px] w-full flex items-center justify-between z-10">
            
            {/* Vertical Hindi Text along Ladder */}
            <div className="hidden sm:flex flex-col items-center justify-center text-vk-teal-deep font-extrabold text-sm tracking-widest uppercase writing-mode-vertical rotate-180 select-none">
              <span className="text-vk-orange font-black text-lg">कुशलता से सफलता तक</span>
              <span className="text-[10px] text-vk-dark mt-2 font-bold">Kushalata Se Safalta Tak</span>
            </div>

            {/* STATIONARY ORANGE LADDER, GIRL ON TOP & CLIMBING PRAKASH (BOY) */}
            <div className="relative h-[440px] sm:h-[500px] w-auto flex items-center justify-center mx-auto">
              
              {/* TOP GIRL AT SAFALTA DESTINATION */}
              <motion.div
                animate={{ scale: hasCompleted ? [1, 1.12, 1] : [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-14 right-2 sm:right-4 z-20 flex flex-col items-center"
              >
                <img
                  src={girlTopImg}
                  alt="Safalta Girl Achiever"
                  className="h-28 sm:h-36 w-auto object-contain drop-shadow-xl"
                />
                <span className="mt-0.5 px-3 py-1 bg-vk-orange text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-md">
                  SAFALTA / SUCCESS
                </span>
              </motion.div>

              {/* STATIONARY LADDER IMAGE */}
              <img
                src={ladderImg}
                alt="Orange Career Ladder"
                className="h-full w-auto object-contain drop-shadow-xl select-none"
              />

              {/* INDEPENDENT MOVABLE CLIMBING PRAKASH (BOY) */}
              <motion.div
                className="absolute z-30 pointer-events-none flex flex-col items-center"
                style={{
                  bottom: '2%',
                  left: '10%',
                }}
                animate={{
                  x: ladderRungs[stepIndex].x,
                  y: ladderRungs[stepIndex].y,
                  rotate: ladderRungs[stepIndex].rotation,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 14,
                  mass: 0.8,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-vk-orange text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-lg border border-white whitespace-nowrap mb-1"
                  >
                    {ladderRungs[stepIndex].label}
                  </motion.div>
                </AnimatePresence>

                <motion.img
                  src={prakashClimbingImg}
                  alt="Prakash Student Climbing"
                  className="h-32 sm:h-44 w-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
                  animate={isClimbing ? { y: [0, -6, 0] } : {}}
                  transition={{ duration: 0.4, repeat: isClimbing ? Infinity : 0 }}
                />
              </motion.div>
            </div>

            {/* FAR RIGHT VERTICAL BROCHURE PILL CARD (Matching PDF Page 1 right panel) */}
            <div className="hidden xl:flex flex-col items-center justify-center bg-white/90 border border-vk-mint/40 rounded-3xl p-4 shadow-lg text-center max-w-[130px] space-y-4">
              <div className="p-2 rounded-xl bg-vk-orange/10 text-vk-orange">
                <Target className="w-6 h-6" />
              </div>
              <p className="text-[11px] font-extrabold uppercase text-vk-teal-deep leading-snug tracking-wider">
                PLEASE HELP OUR STUDENTS TO REACH FROM KUSHALTA SE SAFALTA TAK
              </p>
              <div className="w-8 h-1 bg-vk-orange rounded-full" />
            </div>

          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center justify-center pt-8 pb-2"
        >
          <a
            href="#story"
            className="flex items-center gap-2 text-xs font-bold text-vk-teal-deep hover:text-vk-orange transition-colors uppercase tracking-widest"
          >
            <span>Explore The Story Behind Us</span>
            <ChevronDown className="w-4 h-4 text-vk-orange" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
