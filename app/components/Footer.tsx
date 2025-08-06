'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="liquid-glass w-full max-w-7xl mx-auto px-6 py-8 relative overflow-hidden border-t border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-accent-200/8 via-secondary-300/6 to-accent-200/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight"
            >
              Marcel Grace Infotech
            </Link>
            <p className="text-deep-primary text-base leading-relaxed max-w-sm font-semibold">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-deep-secondary font-bold text-base uppercase tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-deep-primary hover:text-secondary font-semibold text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-deep-secondary font-bold text-base uppercase tracking-wide">Services</h3>
            <ul className="flex flex-col gap-2">
              {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-deep-primary hover:text-secondary font-semibold text-base transition-all duration-300 hover:translate-x-2 group flex items-center gap-2"
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
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-deep-secondary font-bold text-base uppercase tracking-wide mb-3">Contact</h3>
              <div className="space-y-2">
                <Link
                  href="mailto:info@marcelgrace.com"
                  className="flex items-center gap-3 text-deep-primary hover:text-accent-600 transition-colors font-semibold group"
                >
                  <FiMail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  info@marcelgrace.com
                </Link>
                <Link
                  href="tel:+8801706776711"
                  className="flex items-center gap-3 text-deep-primary hover:text-accent-600 transition-colors font-semibold group"
                >
                  <FiPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  +880 170 677 6711
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-deep-secondary font-bold text-base uppercase tracking-wide mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/marcelgrace", icon: FiGithub },
                  { href: "https://linkedin.com/company/marcelgrace", icon: FiLinkedin },
                  { href: "https://t.me/marcelgrace", icon: SiTelegram },
                  { href: "https://wa.me/8801706776711", icon: SiWhatsapp }
                ].map(({ href, icon: Icon }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    className="deep-glass-card p-3 rounded-xl hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-deep-primary group-hover:text-secondary-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-deep-primary font-semibold text-sm">
            © 2025 Marcel Grace Infotech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-deep-primary hover:text-secondary-600 transition-colors text-sm font-semibold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-deep-primary hover:text-secondary-600 transition-colors text-sm font-semibold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
