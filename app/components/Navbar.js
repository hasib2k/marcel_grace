'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiCpu, FiGlobe, FiCode, FiHome, FiStar, FiHelpCircle, FiBox } from "react-icons/fi";
import logo from "@/public/assets/logo_1.png";
import { Iceberg } from 'next/font/google';

const iceberg = Iceberg({
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
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      style={{}}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <div className="relative w-12 h-12">
              <Image
                src={logo}
                alt="Marcel Grace Infotech Logo"
                className="w-full h-full object-contain"
                priority
                style={{ background: 'transparent' }}
              />
            </div>
            <span className={`md:w-60 w-32 ${iceberg.className} text-base md:text-2xl font-semibold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent [background-size:200%_auto] animate-text-shine`}>
              Marcel Grace Infotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="text-primary-700 hover:text-white px-2 py-1 rounded-full font-semibold border border-primary-200 bg-white/70 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200 relative overflow-hidden group text-xs flex items-center gap-1"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="relative z-10 drop-shadow-sm tracking-wide">{item.name}</span>
                    <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-500 to-primary-300 transition-opacity duration-200 -z-10"></span>
                  </Link>
                </div>
              );
            })}
            <div>
              <Link href="/contact">
                <button
                  className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-3 py-1 rounded-full font-semibold border border-primary-200 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200 relative overflow-hidden group text-xs flex items-center gap-1"
                >
                  <GoArrowRight className="w-3.5 h-3.5" />
                  <span className="relative z-10 drop-shadow-sm tracking-wide">Contact Us</span>
                  <span className="absolute left-0 top-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary-500 to-primary-300 transition-opacity duration-200 -z-10"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-neutral-100/80 backdrop-blur-sm hover:bg-neutral-200/80 transition-colors"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6 text-neutral-600" />
            ) : (
              <HiMenuAlt4 className="w-6 h-6 text-neutral-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item, i) => (
                <div
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-neutral-600 hover:text-primary-600 rounded-xl hover:bg-primary-50/80 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div>
                <Link
                  href="/contact"
                  className="block px-4 py-2 mt-2 text-center text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl font-medium hover:shadow-glow transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us <GoArrowRight className="inline-block ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
