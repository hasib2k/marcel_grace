'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-r from-accent-200/8 via-secondary-300/6 to-accent-200/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="liquid-glass p-8 lg:p-12 rounded-3xl max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-base lg:text-lg xl:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
                Ready to start your next project? Let's discuss how we can bring your vision to life with cutting-edge technology solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="liquid-glass p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="deep-glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg mb-4">
                      <FiMail className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-secondary mb-2 group-hover:text-secondary-600 transition-colors">Email Us</h3>
                    <Link
                      href="mailto:info@marcelgrace.com"
                      className="text-deep-primary hover:text-accent-600 transition-colors font-semibold"
                    >
                      info@marcelgrace.com
                    </Link>
                  </div>
                </div>
                
                <div className="deep-glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-accent-500 to-secondary-600 shadow-lg mb-4">
                      <FiPhone className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-secondary mb-2 group-hover:text-secondary-600 transition-colors">Call Us</h3>
                    <Link
                      href="tel:+8801706776711"
                      className="text-deep-primary hover:text-accent-600 transition-colors font-semibold"
                    >
                      +880 170 677 6711
                    </Link>
                  </div>
                </div>

                <div className="deep-glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg mb-4">
                      <FiMessageCircle className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-secondary mb-2 group-hover:text-secondary-600 transition-colors">Live Chat</h3>
                    <span className="text-deep-primary font-semibold">Available 24/7</span>
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
            className="mb-12"
          >
            <div className="liquid-glass p-8 max-w-2xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold text-deep-secondary mb-6">Connect With Us</h3>
              <div className="flex justify-center gap-6">
                <Link
                  href="https://github.com/marcelgrace"
                  target="_blank"
                  className="deep-glass-card p-4 rounded-2xl hover:scale-110 transition-all duration-300 group"
                >
                  <FiGithub className="w-6 h-6 text-deep-secondary group-hover:text-secondary-600 transition-colors" />
                </Link>
                <Link
                  href="https://linkedin.com/company/marcelgrace"
                  target="_blank"
                  className="deep-glass-card p-4 rounded-2xl hover:scale-110 transition-all duration-300 group"
                >
                  <FiLinkedin className="w-6 h-6 text-deep-secondary group-hover:text-secondary-600 transition-colors" />
                </Link>
                <Link
                  href="https://t.me/marcelgrace"
                  target="_blank"
                  className="deep-glass-card p-4 rounded-2xl hover:scale-110 transition-all duration-300 group"
                >
                  <SiTelegram className="w-6 h-6 text-deep-secondary group-hover:text-secondary-600 transition-colors" />
                </Link>
                <Link
                  href="https://wa.me/8801706776711"
                  target="_blank"
                  className="deep-glass-card p-4 rounded-2xl hover:scale-110 transition-all duration-300 group"
                >
                  <SiWhatsapp className="w-6 h-6 text-deep-secondary group-hover:text-secondary-600 transition-colors" />
                </Link>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 text-lg"
            >
              <FiArrowRight size={20} />
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
