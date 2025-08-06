'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiDownload, FiLinkedin, FiMail, FiArrowDown, FiPhone } from 'react-icons/fi';
import { SiTelegram, SiFacebook, SiInstagram } from 'react-icons/si';
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
    <section className="min-h-screen flex items-center justify-center relative bg-black pt-16 sm:pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        
        {/* Additional background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-cyan-900/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10 mt-20 sm:mt-24 lg:mt-32 hero-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left hero-content"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="text-gray-300 font-medium">HELLO WORLD</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                We're <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Marcel Grace Infotech</span>
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
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                GET QUOTE
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <div className="flex gap-3">
                <Link
                  href="https://www.facebook.com/MarcelGraceInfotech"
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook size={20} className="text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/marcelgrace"
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Connect with us on LinkedIn"
                >
                  <FiLinkedin size={20} className="text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com/marcel_grace_infotech"
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram size={20} className="text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="mailto:info.marcelgrce@gmail.com"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Send us an Email"
                >
                  <FiMail size={20} className="text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="tel:+8801706776711"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Call us"
                >
                  <FiPhone size={20} className="text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 italic border-l-2 border-emerald-400 pl-4 bg-white/5 backdrop-blur-sm rounded-r-lg py-3 hover:bg-white/10 transition-all duration-300"
            >
              "Building Tomorrow's Technology Today"
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-6 lg:pt-8"
            >
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-20 sm:h-24 flex flex-col justify-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">150+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projects Delivered</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-20 sm:h-24 flex flex-col justify-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Clients</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-20 sm:h-24 flex flex-col justify-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Years Experience</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-20 sm:h-24 flex flex-col justify-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Support Available</div>
                </div>
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black"></div>
                </div>
                
                {/* Company Logo/Visual */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center relative backdrop-blur-sm border border-white/10">
                    {/* Your custom image */}
                    <Image
                      src="/assets/IMG_2416.jpeg"
                      alt="Marcel Grace Infotech"
                      fill
                      className="object-cover rounded-full hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 320px, 384px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-16 sm:bottom-0 lg:bottom-0 left-1/2 transform -translate-x-1/2 mb-4 sm:mb-0"
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
