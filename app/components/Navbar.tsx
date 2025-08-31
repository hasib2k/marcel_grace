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
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ECDFCC]">
    <div className="w-full px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-12 lg:h-16">
          {/* Logo (untouched) */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group z-50 tap-highlight-transparent focus:outline-none">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full p-0.5 border border-gray-200">
              <div className="w-full h-full bg-white rounded-full p-1">
                <Image
                  src="/assets/profile_3.png"
                  alt="Marcel Grace Infotech Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-[11px] sm:text-sm lg:text-base xl:text-lg font-bold text-[#181C14] select-none">
                Marcel Grace Infotech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#3C3D37] font-medium px-2.5 py-0.5 text-[10px] border-b-2 border-transparent hover:border-[#697565] rounded-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#697565] text-[#697565] bg-white px-2.5 py-0.5 font-medium text-[10px] rounded-none"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#697565] p-2 border border-[#ECDFCC] bg-white rounded-none focus:outline-none"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-[#697565] ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-[#697565] ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-[#697565] ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}
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
              className="fixed inset-0 bg-white lg:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Mobile Menu */}
            <div
              className="fixed top-14 lg:top-20 left-4 right-4 max-w-sm mx-auto bg-white lg:hidden z-50 border border-[#ECDFCC] rounded-none"
              id="mobile-navigation"
              data-mobile-menu
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              {/* Mobile menu content */}
              <div className="flex flex-col p-3 gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#3C3D37] font-medium px-2.5 py-2 text-[10px] border-b border-[#ECDFCC] bg-white rounded-none"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile CTA Button */}
                <div className="pt-2 border-t border-[#ECDFCC]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-[#697565] text-[#697565] bg-white w-full text-center py-1.5 text-[10px] font-medium rounded-none"
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
