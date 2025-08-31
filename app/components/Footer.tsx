'use client';

import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#ECDFCC] pt-6 sm:pt-8 pb-2 sm:pb-3">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 sm:gap-6 md:gap-10">
          {/* Brand Section (logo untouched) */}
          <div className="mb-2 md:mb-0">
            <Link href="/" className="text-xs sm:text-sm md:text-base font-bold text-[#181C14] tracking-tight block mb-1">Marcel Grace Infotech</Link>
            <p className="text-[#3C3D37] text-[10px] sm:text-[11px] md:text-xs max-w-xs font-medium">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          {/* Quick Links and Services */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div>
              <h3 className="text-[#181C14] font-bold text-[9px] sm:text-[10px] uppercase mb-1">Quick Links</h3>
              <ul className="flex flex-col gap-0.5">
                {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="text-[#3C3D37] font-medium text-[9px] sm:text-[10px]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#181C14] font-bold text-[9px] sm:text-[10px] uppercase mb-1">Services</h3>
              <ul className="flex flex-col gap-0.5">
                {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-[#3C3D37] font-medium text-[9px] sm:text-[10px]">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact & Social */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <div>
              <h3 className="text-[#181C14] font-bold text-[9px] sm:text-[10px] uppercase mb-1">Contact</h3>
              <div className="flex flex-col gap-0.5">
                <Link href="mailto:info.marcelgrce@gmail.com" className="flex items-center gap-2 text-[#3C3D37] font-medium text-[9px] sm:text-[10px]">
                  <FiMail className="w-4 h-4 text-[#697565]" /> info.marcelgrce@gmail.com
                </Link>
                <Link href="tel:+8809638-604252" className="flex items-center gap-2 text-[#3C3D37] font-medium text-[9px] sm:text-[10px]">
                  <FiPhone className="w-4 h-4 text-[#697565]" /> +8809638-604252
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-[#181C14] font-bold text-[9px] sm:text-[10px] uppercase mb-1">Follow Us</h3>
              <div className="flex gap-1 flex-wrap">
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
                    className="p-1 bg-white flex items-center justify-center border border-[#ECDFCC] rounded-none"
                  >
                    <Icon className="w-4 h-4 text-[#697565]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-6 pt-3 border-t border-[#ECDFCC] flex flex-col md:flex-row justify-between items-center gap-1">
          <p className="text-[#3C3D37] font-medium text-[10px]">© 2025 Marcel Grace Infotech. All rights reserved.</p>
          <div className="flex gap-2">
            <Link href="/privacy" className="text-[#3C3D37] text-[10px] font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-[#3C3D37] text-[10px] font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
