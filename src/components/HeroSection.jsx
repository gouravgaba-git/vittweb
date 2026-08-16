import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Play, RotateCcw, Award, Sparkles, ChevronRight, CheckCircle2, Trophy, Target, Clock, Settings, ArrowUpRight } from 'lucide-react';

import ladderImg from '../assets/brochure/ladder.png';
import prakashClimbingImg from '../assets/brochure/prakash_climbing.png';
import girlTopImg from '../assets/brochure/girl_top.png';
import leftStudentsImg from '../assets/brochure/left_students.png';
import starDecorImg from '../assets/brochure/star_decor.png';

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

export default function HeroSection({ isClimbing, setIsClimbing, onNextPage }) {
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

  // Auto-start and continuous automatic climbing loop
  useEffect(() => {
    setIsClimbing(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isClimbing) {
      interval = setInterval(() => {
        setStepIndex((prev) => {
          if (prev < ladderRungs.length - 1) {
            const nextStep = prev + 1;
            setClimbProgress(Math.round((nextStep / (ladderRungs.length - 1)) * 100));
            if (nextStep === ladderRungs.length - 1) {
              setHasCompleted(true);
              triggerConfetti();
              // Pause at top for 4 seconds, then automatically restart climb
              setTimeout(() => {
                setStepIndex(0);
                setClimbProgress(0);
                setHasCompleted(false);
              }, 4000);
            }
            return nextStep;
          }
          return prev;
        });
      }, 900);
    }
    return () => clearInterval(interval);
  }, [isClimbing]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-brochure-pattern text-vk-dark overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Wave Swooshes top & bottom (matching PDF Page 1) */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-vk-teal-deep via-vk-teal-blue to-vk-mint opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Page 1 Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2 sm:mt-4">
          
          {/* LEFT COLUMN: Title, Taglines & Action Trigger (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 text-left z-20"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-vk-teal-deep">
              From <span className="text-vk-orange underline decoration-vk-gold decoration-4">Ambition</span>
              <br />
              to <span className="text-vk-teal-blue">Achievement</span>
            </h1>

            <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              <strong className="text-vk-teal-deep font-extrabold">PLEASE HELP OUR STUDENTS TO REACH</strong> FROM <span className="text-vk-orange font-bold">KUSHALTA SE SAFALTA TAK</span>. 
              We empower students from Tier 2 & Tier 3 towns of Bharat with practical skills in Accounting, Taxation, & Finance.
            </p>


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
                {!hasCompleted && (
                  <span className="mt-0.5 px-3 py-1 bg-vk-orange text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-md">
                    SAFALTA / SUCCESS
                  </span>
                )}
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


          </div>
        </div>

        {/* Bottom Prompt to Next Page */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center justify-center pt-8 pb-2"
        >
          <button
            onClick={onNextPage}
            className="flex items-center gap-2 text-xs font-bold text-vk-teal-deep hover:text-vk-orange transition-colors uppercase tracking-widest group"
          >
            <span>Explore The Story Behind Us</span>
            <ChevronRight className="w-4 h-4 text-vk-orange group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
