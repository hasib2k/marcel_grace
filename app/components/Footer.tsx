'use client';

import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function Footer() {
  return (
  <footer className="relative bg-white pt-12 sm:pt-16 pb-1 sm:pb-2 overflow-hidden">
      {/* Futuristic White Background: Subtle SVG line grid pattern, no gradients or blur */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.06 }}>
          <g stroke="#697565" strokeWidth="0.5">
            {Array.from({ length: 19 }).map((_, i) => (
              <line key={'h'+i} x1="0" y1={i*48} x2="1440" y2={i*48} />
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <line key={'v'+i} x1={i*48} y1="0" x2={i*48} y2="900" />
            ))}
          </g>
        </svg>
      </div>
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-1 flex">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 flex flex-col justify-between w-full h-full text-left">
              <Link href="/" className="font-heading text-lg sm:text-xl font-black text-[#181C14] tracking-tight block mb-2 text-left">
                Marcel Grace Infotech
              </Link>
              <p className="font-body text-[#3C3D37] text-sm leading-relaxed mb-3 font-medium text-left">
                Empowering businesses through innovative digital solutions and cutting-edge technology services.
              </p>
              
              
              {/* Newsletter */}
              <div className="mt-3">
                <h4 className="font-heading text-[#181C14] font-bold text-sm mb-2 text-left">Stay Updated</h4>
                <form className="flex gap-2 w-full">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="font-body text-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#697565] flex-1" 
                    disabled 
                  />
                  <button 
                    type="button" 
                    className="font-body text-sm px-4 py-2 bg-[#697565] text-white rounded-lg" 
                    disabled
                  >
                    Subscribe
                  </button>
                </form>
                <span className="text-xs text-gray-400 mt-1 block text-left">Coming soon</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1 flex">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 flex flex-col justify-between w-full h-full text-left">
              <h3 className="font-heading text-[#181C14] font-bold text-lg mb-3 text-left">Quick Links</h3>
              <ul className="space-y-2 text-left">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Services', href: '/services' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Contact', href: '/contact' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Careers', href: '/careers' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="font-body text-[#3C3D37] text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-[#697565] rounded-full mr-3"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-1 flex">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 flex flex-col justify-between w-full h-full text-left">
              <h3 className="font-heading text-[#181C14] font-bold text-lg mb-3 text-left">Our Services</h3>
              <ul className="space-y-2 text-left">
                {[
                  'Web Development',
                  'Mobile App Development',
                  'UI/UX Design',
                  'Digital Marketing',
                  'Cloud Solutions',
                  'IT Consulting'
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      href="/services" 
                      className="font-body text-[#3C3D37] text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-[#697565] rounded-full mr-3"></span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
          </div>
          
          {/* Contact & Social */}
          <div className="lg:col-span-1 flex">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5 flex flex-col justify-between w-full h-full text-left">
              <h3 className="font-heading text-[#181C14] font-bold text-lg mb-3 text-left">Get In Touch</h3>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-left">
                <Link 
                  href="mailto:info.marcelgrce@gmail.com" 
                  className="flex items-center gap-3 text-[#3C3D37] text-sm"
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-xs text-gray-500 break-all">info.marcelgrce@gmail.com</div>
                  </div>
                </Link>
                <Link 
                  href="tel:+8809638-604252" 
                  className="flex items-center gap-3 text-[#3C3D37] text-sm"
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-xs text-gray-500">+880 9638-604252</div>
                  </div>
                </Link>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-heading text-[#181C14] font-bold text-sm mb-2 text-left">Follow Us</h4>
                <div className="flex gap-2 flex-wrap text-left">
                  {[
                    { href: "https://www.facebook.com/MarcelGraceInfotech", icon: SiFacebook, label: "Facebook" },
                    { href: "https://linkedin.com/company/marcelgrace", icon: FiLinkedin, label: "LinkedIn" },
                    { href: "https://www.instagram.com/marcel_grace_infotech", icon: SiInstagram, label: "Instagram" },
                    { href: "https://twitter.com/marcelgrace", icon: SiX, label: "X (Twitter)" },
                    { href: "mailto:info.marcelgrce@gmail.com", icon: FiMail, label: "Email" }
                  ].map(({ href, icon: Icon, label }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-50 rounded-xl"
                      title={label}
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
  <div className="mt-6 pt-3 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="font-body text-[#3C3D37] text-sm font-medium">
                © 2025 Marcel Grace Infotech. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
              </div>
            </div>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="font-body text-[#3C3D37] text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-body text-[#3C3D37] text-sm"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="font-body text-[#3C3D37] text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
