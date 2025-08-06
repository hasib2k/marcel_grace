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
    <section className="min-h-screen flex items-center justify-center relative bg-black pt-20 sm:pt-24 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        
        {/* Additional background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/5 via-transparent to-cyan-900/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)] lg:min-h-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="text-gray-300 font-medium">HELLO WORLD</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2 sm:space-y-3"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                We're <span className="text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">Marcel Grace</span>
                <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text lg:inline"> Infotech</span>
                <span className="block text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal mt-1 sm:mt-2">
                  SOFTWARE DEVELOPMENT COMPANY
                </span>
              </h1>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FiDownload size={16} className="sm:w-5 sm:h-5" />
                GET QUOTE
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                <Link
                  href="https://www.facebook.com/MarcelGraceInfotech"
                  target="_blank"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Follow us on Facebook"
                >
                  <SiFacebook size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/marcelgrace"
                  target="_blank"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Connect with us on LinkedIn"
                >
                  <FiLinkedin size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com/marcel_grace_infotech"
                  target="_blank"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Follow us on Instagram"
                >
                  <SiInstagram size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="mailto:info.marcelgrce@gmail.com"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Send us an Email"
                >
                  <FiMail size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
                <Link
                  href="tel:+8801706776711"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center"
                  aria-label="Call us"
                >
                  <FiPhone size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-gray-300 italic border-l-2 border-emerald-400 pl-3 sm:pl-4 bg-white/5 backdrop-blur-sm rounded-r-lg py-2 sm:py-3 hover:bg-white/10 transition-all duration-300"
            >
              "Building Tomorrow's Technology Today"
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 pt-2 sm:pt-4"
            >
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-16 sm:h-20 lg:h-24 flex flex-col justify-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">150+</div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projects</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-16 sm:h-20 lg:h-24 flex flex-col justify-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Clients</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-16 sm:h-20 lg:h-24 flex flex-col justify-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Years</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 h-16 sm:h-20 lg:h-24 flex flex-col justify-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Company Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2 mb-4 lg:mb-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 p-0.5 sm:p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-black"></div>
                </div>
                
                {/* Company Logo/Visual */}
                <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center relative backdrop-blur-sm border border-white/10">
                    {/* Your custom image */}
                    <Image
                      src="/assets/IMG_2416.jpeg"
                      alt="Marcel Grace Infotech"
                      fill
                      className="object-cover rounded-full hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 384px"
                      priority
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
          className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-emerald-400 transition-colors animate-bounce"
          >
            <span className="text-xs sm:text-sm">Scroll Down</span>
            <FiArrowDown size={16} className="sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
