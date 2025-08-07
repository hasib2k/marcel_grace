'use client';

import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="relative overflow-hidden bg-black backdrop-blur-sm border-t border-emerald-400/30 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 xl:py-8 pb-2 sm:pb-3 lg:pb-4 xl:pb-4">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/15 via-cyan-400/12 to-emerald-400/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/8 via-cyan-400/8 to-emerald-400/8"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 group">
            <Link
              href="/"
              className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight transition-transform duration-300"
            >
              Marcel Grace Infotech
            </Link>
            <p className="text-gray-300 group-hover:text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-sm font-medium transition-colors duration-300">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2 xl:gap-3">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-emerald-400 font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide">Services</h3>
            <ul className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2 xl:gap-3">
              {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-emerald-400 font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mb-1.5 sm:mb-2 lg:mb-3 xl:mb-4">Contact</h3>
              <div className="space-y-1 sm:space-y-1.5 lg:space-y-2 xl:space-y-3">
                <Link
                  href="mailto:info.marcelgrce@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-emerald-400 transition-colors font-medium text-xs sm:text-sm lg:text-base group"
                >
                  <FiMail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">info.marcelgrce@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </Link>
                <Link
                  href="tel:09638-876711"
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-emerald-400 transition-colors font-medium text-xs sm:text-sm lg:text-base group"
                >
                  <FiPhone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">09638-876711</span>
                  <span className="sm:hidden">Call</span>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm lg:text-base xl:text-lg uppercase tracking-wide mb-1.5 sm:mb-2 lg:mb-3 xl:mb-4">Follow Us</h3>
              <div className="flex gap-1.5 sm:gap-2 lg:gap-3 xl:gap-4 flex-wrap">
                {[
                  { href: "https://www.facebook.com/MarcelGraceInfotech", icon: SiFacebook },
                  { href: "https://linkedin.com/company/marcelgrace", icon: FiLinkedin },
                  { href: "https://www.instagram.com/marcel_grace_infotech", icon: SiInstagram },
                  { href: "mailto:info.marcelgrce@gmail.com", icon: FiMail }
                ].map(({ href, icon: Icon }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className="group p-2 sm:p-2.5 lg:p-3 xl:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px] lg:min-h-[44px] lg:min-w-[44px] flex items-center justify-center"
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 sm:mt-3 lg:mt-4 xl:mt-4 pt-2 sm:pt-2 lg:pt-3 xl:pt-3 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 lg:gap-4">
          <p className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
            © 2025 Marcel Grace Infotech. All rights reserved.
          </p>
          <div className="flex gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors text-xs sm:text-sm lg:text-base font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors text-xs sm:text-sm lg:text-base font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
