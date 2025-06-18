'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "@/public/assets/logo.svg";
import logoText from "@/public/assets/MarcelGraceInfotechText.svg";

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'Feature', href: '/feature' },
  { name: 'Product', href: '/product' },
  { name: 'Testimonial', href: '/testimonial' },
  { name: 'FAQ', href: '/faq' },
];

const menuVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-soft border-b border-neutral-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image src={logo} alt="logo" className="h-12 w-auto" />
            </motion.div>
            <Image 
              src={logoText} 
              alt="Marcel Grace Infotech" 
              width={200} 
              className="hidden sm:block transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
              >
                <Link
                  href={item.href}
                  className="nav-link group relative"
                >
                  {item.name}
                  <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              custom={menuItems.length}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              <Link
                href="/contact"
                className="btn btn-primary ml-4 group"
              >
                Get Started
                <GoArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-neutral-100/80 transition-colors"
          >
            {isOpen ? (
              <IoClose className="h-6 w-6 text-neutral-700" />
            ) : (
              <HiMenuAlt4 className="h-6 w-6 text-neutral-700" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/50"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={menuVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuVariants}
                custom={menuItems.length}
                initial="hidden"
                animate="visible"
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="block w-full btn btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                  <GoArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
