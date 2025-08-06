'use client';

import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative bg-black">
      <div className="relative overflow-hidden bg-black backdrop-blur-sm border-t border-emerald-400/30 w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/15 via-cyan-400/12 to-emerald-400/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/8 via-cyan-400/8 to-emerald-400/8"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col gap-2 sm:gap-3 lg:gap-4 group">
            <Link
              href="/"
              className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight transition-transform duration-300"
            >
              Marcel Grace Infotech
            </Link>
            <p className="text-gray-300 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm font-medium transition-colors duration-300">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2 lg:gap-3">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-emerald-400 font-medium text-sm sm:text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
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
            <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide">Services</h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2 lg:gap-3">
              {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-emerald-400 font-medium text-sm sm:text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
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
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide mb-2 sm:mb-3 lg:mb-4">Contact</h3>
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <Link
                  href="mailto:info.marcelgrce@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-emerald-400 transition-colors font-medium text-sm sm:text-base group"
                >
                  <FiMail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">info.marcelgrce@gmail.com</span>
                  <span className="sm:hidden">Email</span>
                </Link>
                <Link
                  href="tel:+8801706776711"
                  className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-emerald-400 transition-colors font-medium text-sm sm:text-base group"
                >
                  <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">+880 170 677 6711</span>
                  <span className="sm:hidden">Call</span>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg uppercase tracking-wide mb-2 sm:mb-3 lg:mb-4">Follow Us</h3>
              <div className="flex gap-2 sm:gap-3 lg:gap-4">
                {[
                  { href: "https://www.facebook.com/MarcelGraceInfotech", icon: SiFacebook },
                  { href: "https://linkedin.com/company/marcelgrace", icon: FiLinkedin },
                  { href: "https://www.instagram.com/marcel_grace_infotech", icon: SiInstagram },
                  { href: "mailto:info.marcelgrce@gmail.com", icon: FiMail },
                  { href: "tel:+8801706776711", icon: FiPhone }
                ].map(({ href, icon: Icon }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className="group p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-gray-300 font-medium text-sm sm:text-base">
            © 2025 Marcel Grace Infotech. All rights reserved.
          </p>
          <div className="flex gap-3 sm:gap-4 lg:gap-6">
            <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm sm:text-base font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
