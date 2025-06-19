'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowRight } from "react-icons/go";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "@/public/assets/logo_1.png";
import { Iceberg } from 'next/font/google';

const iceberg = Iceberg({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});


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
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20">
              <Image
                src={logo}
                alt="Marcel Grace Infotech Logo"
                className="w-full h-full object-contain"
                priority
              />
              <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full -z-10" />
            </div>
            <div className="md:w-100 w-50">
              {/* <Image
                src={logoText}
                alt="Marcel Grace Infotech"
                className="w-full h-full object-contain"
              /> */}
              <Link href="/" className={`${iceberg.className} text-xl md:text-4xl font-semibold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent [background-size:200%_auto] animate-text-shine`}>
                Marcel Grace Infotech
              </Link>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className="text-neutral-600 hover:text-primary-600 px-4 py-2 rounded-xl transition-all duration-200 relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-primary-50/0 rounded-xl -z-10"
                    whileHover={{
                      backgroundColor: "rgba(59, 130, 246, 0.05)",
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:shadow-glow relative overflow-hidden group"
                >
                  Contact Us
                  <GoArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0)_40%)] -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-neutral-100/80 backdrop-blur-sm hover:bg-neutral-200/80 transition-colors"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6 text-neutral-600" />
            ) : (
              <HiMenuAlt4 className="w-6 h-6 text-neutral-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: i * 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-neutral-600 hover:text-primary-600 rounded-xl hover:bg-primary-50/80 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: menuItems.length * 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-2 mt-2 text-center text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl font-medium hover:shadow-glow transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us <GoArrowRight className="inline-block ml-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
