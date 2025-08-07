'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-emerald-400/10 via-cyan-400/8 to-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-cyan-400/8 via-emerald-400/6 to-cyan-400/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-emerald-400/5"></div>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Ready to start your next project? Let's discuss how we can bring your vision to life with cutting-edge technology solutions.
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-emerald-400/5"></div>
              
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 p-3 sm:p-4 lg:p-5 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 min-h-[100px] sm:min-h-[110px]">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-emerald-400/10 transition-all duration-500 rounded-xl sm:rounded-2xl"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-500 mb-2 sm:mb-3">
                      <FiMail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-300">Email Us</h3>
                    <Link
                      href="mailto:info.marcelgrce@gmail.com"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-xs sm:text-sm"
                    >
                      info.marcelgrce@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 p-3 sm:p-4 lg:p-5 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 min-h-[100px] sm:min-h-[110px]">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-emerald-400/10 transition-all duration-500 rounded-xl sm:rounded-2xl"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-500 mb-2 sm:mb-3">
                      <FiPhone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-300">Call Us</h3>
                    <Link
                      href="tel:+8809638-604252"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium text-xs sm:text-sm"
                    >
                      +8809638-604252
                    </Link>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 p-3 sm:p-4 lg:p-5 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/20 min-h-[100px] sm:min-h-[110px]">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-emerald-400/10 transition-all duration-500 rounded-xl sm:rounded-2xl"></div>
                  
                  <div className="relative flex flex-col items-center text-center">
                    <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-500 mb-2 sm:mb-3">
                      <FiMessageCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors duration-300">Live Chat</h3>
                    <span className="text-gray-300 font-medium text-xs sm:text-sm">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 p-6 sm:p-7 lg:p-8 max-w-2xl mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-emerald-400/5"></div>
              
              <div className="relative">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-5 lg:mb-6">Connect With Us</h3>
                <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap">
                  <Link
                    href="https://www.facebook.com/MarcelGraceInfotech"
                    target="_blank"
                    className="group p-4 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    <SiFacebook className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/marcelgrace"
                    target="_blank"
                    className="group p-4 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    <FiLinkedin className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/marcel_grace_infotech"
                    target="_blank"
                    className="group p-4 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    <SiInstagram className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
                  </Link>
                  <Link
                    href="mailto:info.marcelgrce@gmail.com"
                    className="group p-4 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    <FiMail className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-5 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/40 border border-emerald-400/20 hover:border-emerald-400/40 text-sm sm:text-base lg:text-base min-h-[36px]"
            >
              <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
