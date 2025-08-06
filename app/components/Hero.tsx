'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { SiTelegram } from 'react-icons/si';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    if (!mounted) return;
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              <span className="text-gray-300">HELLO WORLD</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                We're
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Marcel Grace Infotech</span>
                <span className="block text-gray-300 text-lg sm:text-xl lg:text-3xl font-normal mt-2">
                  SOFTWARE DEVELOPMENT COMPANY
                </span>
              </h1>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                GET QUOTE
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://github.com/marcelgrace"
                  target="_blank"
                  className="p-3 glass-card hover:bg-glass-medium transition-all duration-300 group"
                  aria-label="Visit our GitHub Profile"
                >
                  <FiGithub size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/marcelgrace"
                  target="_blank"
                  className="p-3 glass-card hover:bg-glass-medium transition-all duration-300 group"
                  aria-label="Connect with us on LinkedIn"
                >
                  <FiLinkedin size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="mailto:info@marcelgrace.com"
                  className="p-3 glass-card hover:bg-glass-medium transition-all duration-300 group"
                  aria-label="Send us an Email"
                >
                  <FiMail size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </Link>
                <Link
                  href="https://t.me/marcelgrace"
                  target="_blank"
                  className="p-3 glass-card hover:bg-glass-medium transition-all duration-300 group"
                  aria-label="Message us on Telegram"
                >
                  <SiTelegram size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 italic border-l-2 border-primary-500 pl-4"
            >
              "Building Tomorrow's Technology Today"
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">150+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Company Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-dark-950"></div>
                </div>
                
                {/* Company Logo/Visual */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center relative">
                    {/* Your custom image */}
                    <Image
                      src="/assets/IMG_2416.jpeg"
                      alt="Marcel Grace Infotech"
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 320px, 384px"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500/20 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary-500/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-6 w-6 h-6 bg-accent-500/20 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors animate-bounce"
          >
            <span className="text-sm">Scroll Down</span>
            <FiArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
