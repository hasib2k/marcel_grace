'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg backdrop-blur-sm">
    <div className="w-full px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-10 lg:h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-50 tap-highlight-transparent focus:outline-none">
            <div className="relative w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-xl p-0.5 border border-white">
              <div className="w-full h-full bg-white rounded-xl p-1">
                <Image
                  src="/assets/profile_3.png"
                  alt="Marcel Grace Infotech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="relative">
              <span className="font-heading text-[10px] sm:text-xs lg:text-sm xl:text-base font-black text-[#181C14] select-none tracking-wider">
                Marcel Grace Infotech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-[#3C3D37] font-semibold px-2 py-1.5 text-xs tracking-wider rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="font-body inline-flex items-center gap-1 text-white bg-gradient-to-r from-gray-900 to-gray-700 px-3 py-1.5 font-semibold text-xs tracking-wider rounded-lg shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-0 m-0 bg-transparent border-none outline-none focus:outline-none"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              {isOpen ? (
                <div className="w-4 h-4 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L14 14M14 6L6 14" stroke="#697565" strokeWidth="2.2" strokeLinecap="round"/>
                  </svg>
                </div>
              ) : (
                <div className="w-4 h-4 flex flex-col justify-center items-center gap-[2px]">
                  <span className="block h-0.5 w-4 bg-[#697565] rounded"></span>
                  <span className="block h-0.5 w-4 bg-[#697565] rounded"></span>
                  <span className="block h-0.5 w-4 bg-[#697565] rounded"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-white lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Mobile Menu */}
            <div
              className="fixed top-12 left-2 right-2 max-w-xs mx-auto bg-white lg:hidden z-50 rounded-xl shadow-2xl border border-gray-200 p-3 animate-fadeIn"
              id="mobile-navigation"
              data-mobile-menu
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-1.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-body text-[#3C3D37] font-semibold px-3 py-2 text-xs bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 shadow-md text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile CTA Button */}
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="font-body inline-flex items-center justify-center gap-1 text-white bg-gradient-to-r from-gray-900 to-gray-700 w-full text-center py-2 text-xs font-semibold rounded-lg shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
