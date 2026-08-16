import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, ChevronRight, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/brochure/vittkushal_logo.png';

const navLinks = [
  { name: 'Home', href: '#hero', page: 0 },
  { name: 'Story & Purpose', href: '#story', page: 1 },
  { name: 'Partner Support', href: '#partner', page: 2 },
  { name: 'Activities', href: '#activities', page: 3 },
];

export default function Navigation({
  onStartJourney,
  currentPage = 0,
  setCurrentPage,
  isSwipeMode = true,
  setIsSwipeMode,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (!isSwipeMode) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);

        const sections = ['hero', 'story', 'partner', 'activities', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isSwipeMode]);

  const handleNavClick = (e, pageIndex, href) => {
    if (isSwipeMode && setCurrentPage) {
      e.preventDefault();
      setCurrentPage(pageIndex);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-vk-teal-deep backdrop-blur-md shadow-lg border-b border-white/20 text-white ${
        scrolled ? 'py-3' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 0, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="bg-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
            <img
              src={logoImg}
              alt="VittKushal Logo"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs uppercase tracking-widest text-vk-gold font-extrabold">
              VittKushal
            </span>
            <span className="text-[11px] text-vk-aqua font-medium tracking-wide">
              Kushalta Se Safalta Tak
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = isSwipeMode ? currentPage === link.page : activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                  isActive
                    ? 'text-white font-extrabold'
                    : 'text-vk-aqua hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-vk-orange rounded-full -z-10 shadow-glow-orange"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA & Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919811901293"
            className="flex items-center gap-1.5 text-xs text-vk-aqua hover:text-vk-gold transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-vk-gold" />
            +91 9811901293
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 3, '#contact')}
            className="relative group overflow-hidden rounded-full bg-vk-orange p-px font-bold text-white shadow-glow-orange hover:shadow-lg transition-all active:scale-95"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-vk-orange group-hover:bg-vk-orange/90 transition-all text-xs tracking-wider uppercase">
              <Phone className="w-4 h-4" />
              Contact Us
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/15 text-white hover:bg-white/25 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vk-teal-deep/95 border-b border-white/20 backdrop-blur-xl px-4 py-6 space-y-4 text-white"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.page, link.href);
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-vk-aqua hover:bg-white/10 hover:text-vk-gold transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-vk-gold" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, 3, '#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-vk-orange text-white font-extrabold text-sm shadow-glow-orange"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
