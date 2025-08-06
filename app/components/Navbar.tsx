'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('nav') && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, mounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, mounted]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black backdrop-blur-xl' 
          : 'bg-black backdrop-blur-md'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group z-50 tap-highlight-transparent focus:outline-none">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:rotate-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full p-0.5">
              <div className="w-full h-full bg-black rounded-full p-1">
                <Image
                  src="/assets/mg_logo2.png"
                  alt="Marcel Grace Infotech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-200 select-none">
                <span className="hidden sm:inline">Marcel Grace Infotech</span>
                <span className="sm:hidden">Marcel Grace</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium group py-2 px-3 xl:px-4 text-sm xl:text-base rounded-lg hover:bg-emerald-400/10 hover:scale-105"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-4 py-2 xl:px-6 xl:py-2.5 rounded-full font-bold hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-lg hover:shadow-emerald-400/30 text-sm xl:text-base hover:scale-105 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-400 p-2 bg-emerald-400/10 backdrop-blur-sm border border-emerald-400/20 transition-all duration-300 relative z-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:bg-emerald-400/20 hover:scale-110"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-emerald-400 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-emerald-400 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 sm:w-6 bg-emerald-400 transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-14 sm:top-16 lg:top-20 left-4 right-4 max-w-sm mx-auto bg-black backdrop-blur-xl border border-emerald-400/30 lg:hidden z-50 rounded-2xl overflow-hidden shadow-xl shadow-emerald-400/10"
              id="mobile-navigation"
              data-mobile-menu
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile menu content */}
              <div className="flex flex-col p-4 sm:p-6 space-y-1 sm:space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium px-3 sm:px-4 py-2.5 sm:py-3 block rounded-xl hover:bg-emerald-400/10 group focus:outline-none focus:ring-2 focus:ring-emerald-400 hover:scale-105 hover:translate-x-2 text-sm sm:text-base relative overflow-hidden border border-white/10 backdrop-blur-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Liquid glass effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                      <span className="flex items-center gap-2 relative z-10">
                        <span className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                          {item.name}
                        </span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  className="pt-3 sm:pt-4 border-t border-emerald-400/30"
                >
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black w-full text-center py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300 shadow-lg hover:shadow-emerald-400/30 hover:scale-105 block"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.nav>
  );
}
