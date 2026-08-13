import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Building, ArrowUpRight, Sparkles } from 'lucide-react';

import logoImg from '../assets/brochure/vittkushal_logo.png';
import closingBannerImg from '../assets/brochure/closing_banner.png';

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-brochure-pattern text-vk-dark overflow-hidden border-t border-vk-mint/30"
    >
      <div className="max-w-7xl mx-auto space-y-16 z-10 relative">

        {/* CLOSING MANIFESTO BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-vk-mint/30 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-vk-mint/20 pb-6">
            <div>
              <span className="px-3.5 py-1 bg-vk-teal-deep text-white text-xs font-extrabold uppercase tracking-wider rounded-full">
                VittKushal Vision
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-vk-teal-deep mt-2">
                CLOSING THE TALENT GAP — <span className="text-vk-orange underline decoration-vk-gold decoration-4">TOGETHER</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <img
                src={logoImg}
                alt="VittKushal Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-vk-dark text-sm sm:text-base leading-relaxed font-medium">
            Bharat does not lack talent. What it needs is a stronger connection between talent and the right opportunities, guidance, and platforms. <strong className="text-vk-teal-deep font-extrabold">VittKushal</strong> acts as a bridge that connects talented individuals with industry opportunities, ensuring careers are built on skills, dedication, and potential — not just on background or connections. Every opportunity is the beginning of a new career journey, and every collaboration is a step towards empowering Bharat's hidden talent.
          </p>

          <div className="p-6 bg-gradient-to-r from-vk-teal-deep via-vk-teal-blue to-vk-teal-deep text-white rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-lg border border-white/20">
            <div>
              <span className="block text-xs font-extrabold uppercase tracking-widest text-vk-gold">
                Call to Action
              </span>
              <span className="text-xl sm:text-2xl font-black">
                Let's Build This Together
              </span>
            </div>
            <a
              href="mailto:info@vittkushal.com"
              className="px-6 py-3 bg-vk-orange hover:bg-vk-orange/90 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-glow-orange transition-transform hover:scale-105 flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-vk-gold" />
            </a>
          </div>
        </motion.div>

        {/* CONTACT DETAILS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Phone Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-vk-mint/30 p-6 rounded-3xl space-y-4 hover:border-vk-orange transition-colors shadow-md"
          >
            <div className="p-3.5 rounded-2xl bg-vk-orange/10 text-vk-orange w-fit">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Call Us
              </h4>
              <h3 className="text-base font-bold text-vk-teal-deep mt-1">Phone & Helpline</h3>
            </div>
            <div className="space-y-2 text-xs sm:text-sm font-semibold">
              <a
                href="tel:+919811901293"
                className="flex items-center gap-2 text-vk-dark hover:text-vk-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-vk-orange" />
                +91 9811901293
              </a>
              <a
                href="tel:01204111260"
                className="flex items-center gap-2 text-vk-dark hover:text-vk-orange transition-colors"
              >
                <Building className="w-3.5 h-3.5 text-vk-orange" />
                0120-4111-260
              </a>
            </div>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-vk-mint/30 p-6 rounded-3xl space-y-4 hover:border-vk-orange transition-colors shadow-md"
          >
            <div className="p-3.5 rounded-2xl bg-vk-orange/10 text-vk-orange w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Email Inquiry
              </h4>
              <h3 className="text-base font-bold text-vk-teal-deep mt-1">Write to Us</h3>
            </div>
            <a
              href="mailto:info@vittkushal.com"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-vk-dark hover:text-vk-orange transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-vk-orange" />
              info@vittkushal.com
            </a>
          </motion.div>

          {/* Card 3: Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-vk-mint/30 p-6 rounded-3xl space-y-4 hover:border-vk-orange transition-colors shadow-md"
          >
            <div className="p-3.5 rounded-2xl bg-vk-orange/10 text-vk-orange w-fit">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Official Website
              </h4>
              <h3 className="text-base font-bold text-vk-teal-deep mt-1">Visit Online</h3>
            </div>
            <a
              href="https://www.vittkushal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-vk-teal-blue hover:text-vk-orange underline"
            >
              <Globe className="w-3.5 h-3.5 text-vk-orange" />
              www.vittkushal.com
            </a>
          </motion.div>

          {/* Card 4: Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-vk-mint/30 p-6 rounded-3xl space-y-4 hover:border-vk-orange transition-colors shadow-md"
          >
            <div className="p-3.5 rounded-2xl bg-vk-orange/10 text-vk-orange w-fit">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Headquarters Address
              </h4>
              <h3 className="text-base font-bold text-vk-teal-deep mt-1">VittKushal Office</h3>
            </div>
            <p className="text-xs text-vk-dark leading-relaxed font-medium">
              <strong>M/S VittKushal Training & Placement Pvt. Ltd.</strong><br />
              2nd Floor, Uttranchal Plaza, Sector 2B, CS-1A, Vasundhara, Ghaziabad, Uttar Pradesh 201012
            </p>
          </motion.div>

        </div>

        {/* FOOTER BOTTOM CREDITS */}
        <div className="pt-10 border-t border-vk-mint/30 flex flex-wrap items-center justify-between gap-4 text-xs text-vk-dark font-medium">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg border border-slate-200">
              <img src={logoImg} alt="VittKushal Logo" className="h-6 w-auto" />
            </div>
            <span>© {new Date().getFullYear()} VittKushal Training & Placement Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 font-bold text-vk-teal-deep">
            <span>Kushalata Se Safalta Tak — Empowering Bharat's Hidden Talent</span>
            <Sparkles className="w-3.5 h-3.5 text-vk-orange" />
          </div>
        </div>

      </div>
    </footer>
  );
}
