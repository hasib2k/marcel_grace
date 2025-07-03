'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiCpu, FiGlobe, FiCode, FiHome, FiStar, FiHelpCircle, FiBox } from "react-icons/fi";
import logo from "@/public/assets/logo_1.png";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const menuItems = [
  { name: 'Home', href: '/', icon: FiHome },
  { name: 'Service', href: '/service', icon: FiCpu },
  { name: 'Feature', href: '/feature', icon: FiStar },
  { name: 'Product', href: '/product', icon: FiBox },
  { name: 'Testimonial', href: '/testimonial', icon: GoArrowRight },
  { name: 'FAQ', href: '/faq', icon: FiHelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'liquid-glass shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="Marcel Grace Infotech Logo"
                className="w-full h-full object-contain"
                priority
                style={{ background: 'transparent' }}
              />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent font-museomoderno">
              Marcel Grace Infotech
            </span>
          </Link>

          {/* Desktop Navigation with deeper colors */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="deep-glass-card text-deep-primary hover:text-deep-secondary px-3 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-300/50 flex items-center gap-2 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-secondary-600 transition-colors" />
                  <span className="text-sm font-bold">{item.name}</span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-4 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-400/25 flex items-center gap-2">
                <GoArrowRight className="w-4 h-4" />
                <span className="text-sm">Contact Us</span>
              </button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden deep-glass-card p-2 rounded-xl transition-colors"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6 text-deep-primary" />
            ) : (
              <HiMenuAlt4 className="w-6 h-6 text-deep-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden liquid-glass border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-deep-primary hover:text-deep-secondary rounded-xl deep-glass-card transition-all duration-300 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 mt-2 text-center text-white bg-gradient-to-r from-secondary-600 to-accent-600 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact Us <GoArrowRight className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
