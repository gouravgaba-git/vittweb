import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, HeartHandshake, CheckCircle2, ChevronRight, Building2, GraduationCap } from 'lucide-react';

import illustrationInternship from '../assets/brochure/illustration_internship.png';
import illustrationOutsourcing from '../assets/brochure/illustration_outsourcing.png';
import illustrationSponsorship from '../assets/brochure/illustration_sponsorship.png';

const pillarsData = [
  {
    id: '01',
    title: 'INTERNSHIP SUPPORT',
    subtitle: 'Turning Learning into Experience',
    icon: GraduationCap,
    image: illustrationInternship,
    quote: "A student's first internship can become the foundation of their entire career.",
    description: "For many talented students, acquiring skills is only the first step. The biggest challenge is getting the first opportunity to apply those skills in a real professional environment. By providing internship opportunities to VittKushal-skilled students, your organisation can help bridge the gap between learning and professional experience.",
    benefitsHeading: "Benefits for Your Organisation:",
    benefits: [
      "Additional workforce support",
      "Fresh ideas and new perspectives",
      "Access to skilled and motivated talent",
      "Opportunity to create meaningful social impact"
    ]
  },
  {
    id: '02',
    title: 'OUTSOURCING SUPPORT',
    subtitle: 'Connecting Talent with Work Opportunities',
    icon: Briefcase,
    image: illustrationOutsourcing,
    quote: "When work reaches the right talent, opportunities reach those who truly deserve them.",
    description: "Talent should never be restricted because of limited opportunities or resources. Across India, many skilled students possess valuable knowledge, but their potential remains underutilised. Organisations can efficiently manage their Accounts & Taxation related projects through VittKushal's skilled talent pool.",
    benefitsHeading: "Benefits for Your Organisation:",
    benefits: [
      "Cost-effective project execution",
      "Faster turnaround times",
      "Flexible and scalable workforce support",
      "Quality-focused delivery with proper supervision"
    ]
  },
  {
    id: '03',
    title: 'SPONSORSHIP SUPPORT',
    subtitle: 'Investing in Potential',
    icon: HeartHandshake,
    image: illustrationSponsorship,
    quote: "Sometimes, one opportunity does not just change one life — it changes an entire family's future.",
    description: "Many deserving students have the willingness and determination to learn, but financial challenges often limit their growth. By sponsoring students, skill development initiatives, or learning programmes, your organisation can directly contribute towards long-term community development.",
    benefitsHeading: "Impact Areas:",
    benefits: [
      "Skill development and employability",
      "Career growth opportunities for deserving learners",
      "Financial support for aspiring professionals",
      "Long-term community development"
    ]
  }
];

const impactStats = [
  { label: 'Organisations Partnered', value: 150, suffix: '+' },
  { label: 'Students Empowered', value: 2500, suffix: '+' },
  { label: 'Careers Started', value: 1800, suffix: '+' },
  { label: 'Futures Transformed', value: 5000, suffix: '+' },
];

export default function PartnerSection() {
  const [activePillarId, setActivePillarId] = useState('01');
  const [counterValues, setCounterValues] = useState(impactStats.map(() => 0));
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);

  const activePillar = pillarsData.find(p => p.id === activePillarId) || pillarsData[0];

  const animateCounters = () => {
    if (hasAnimatedStats) return;
    setHasAnimatedStats(true);

    impactStats.forEach((stat, index) => {
      let current = 0;
      const step = Math.max(1, Math.floor(stat.value / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounterValues(prev => {
          const next = [...prev];
          next[index] = current;
          return next;
        });
      }, 30);
    });
  };

  return (
    <section
      id="partner"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brochure-pattern text-vk-dark overflow-hidden border-t border-vk-mint/20"
    >
      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vk-teal-deep text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Building2 className="w-4 h-4 text-vk-gold" />
            <span>Corporate & Community Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-vk-teal-deep">
            PARTNER WITH <span className="text-vk-orange underline decoration-vk-gold decoration-4">PURPOSE</span>
          </h2>
          <p className="text-vk-dark font-medium text-base sm:text-lg">
            Create Opportunities. Build Futures. Every opportunity offered today creates a stronger workforce for tomorrow.
          </p>
        </motion.div>

        {/* 3 Interactive Pillars Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillarsData.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillarId === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`text-left p-6 rounded-3xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
                  isActive
                    ? 'bg-vk-teal-deep text-white shadow-xl border-vk-teal-deep scale-[1.02]'
                    : 'bg-white hover:bg-slate-50 text-vk-dark border-vk-mint/30 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className={`text-2xl font-black tracking-widest ${isActive ? 'text-vk-gold' : 'text-vk-orange'}`}>
                    {pillar.id}
                  </span>
                  <div className={`p-3 rounded-2xl ${isActive ? 'bg-white/20 text-white' : 'bg-vk-aqua-light text-vk-teal-deep'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold uppercase tracking-wide mb-1">
                    {pillar.title}
                  </h3>
                  <p className={`text-xs font-semibold ${isActive ? 'text-vk-aqua' : 'text-slate-500'}`}>
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
                  <span>{isActive ? 'Active View' : 'Click to Explore'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-vk-gold' : 'text-vk-teal-deep'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed View Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-vk-mint/30 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-xl"
          >
            {/* Pillar Text & Benefits (7 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-vk-orange text-white text-xs font-extrabold rounded-full tracking-wider uppercase">
                  Pillar {activePillar.id}
                </span>
                <span className="text-sm text-vk-teal-deep font-extrabold uppercase tracking-wider">
                  {activePillar.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-vk-teal-deep">
                {activePillar.title}
              </h3>

              <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium">
                {activePillar.description}
              </p>

              {/* Quote Highlight */}
              <div className="p-4 bg-vk-aqua-light border-l-4 border-vk-orange rounded-r-2xl text-xs sm:text-sm text-vk-teal-deep font-bold italic">
                "{activePillar.quote}"
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-vk-teal-deep">
                  {activePillar.benefitsHeading}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-vk-orange flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-vk-dark font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar Illustration Artwork (5 Columns) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative group max-w-sm">
                <div className="absolute -inset-3 bg-gradient-to-r from-vk-teal-deep to-vk-orange rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative bg-white p-4 rounded-3xl shadow-lg border border-vk-mint/30">
                  <img
                    src={activePillar.image}
                    alt={activePillar.title}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-vk-teal-deep">
                      VittKushal {activePillar.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM SECTION: TOGETHER WE CREATE IMPACT & ANIMATED COUNTERS */}
        <motion.div
          onViewportEnter={animateCounters}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-12 border-t border-vk-mint/20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-vk-teal-deep">
              TOGETHER WE CREATE <span className="text-vk-orange">IMPACT</span>
            </h3>
            <p className="text-vk-dark text-xs sm:text-sm mt-1 font-semibold">
              Building a skilled, confident, and industry-ready talent pool for Bharat.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-vk-mint/30 hover:border-vk-orange p-6 rounded-3xl text-center space-y-2 shadow-md transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-vk-teal-deep group-hover:text-vk-orange transition-colors">
                  {counterValues[idx]}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-vk-dark">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
