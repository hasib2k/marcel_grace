'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="py-4 sm:py-6 bg-white relative overflow-hidden">
      {/* Background Pattern - Same as other components */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="contactGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#contactGrid)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
          {/* Left: Contact Card */}
          <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 flex flex-col gap-3 justify-center min-w-[280px] order-2 md:order-1 rounded-xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <FiMail className="text-[#697565] w-4 h-4" />
              </div>
              <div>
                <div className="font-body text-xs text-[#3C3D37] font-semibold">Email</div>
                <Link href="mailto:info.marcelgrce@gmail.com" className="font-body text-sm font-black text-[#181C14]">info.marcelgrce@gmail.com</Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <FiPhone className="text-[#697565] w-4 h-4" />
              </div>
              <div>
                <div className="font-body text-xs text-[#3C3D37] font-semibold">Phone</div>
                <Link href="tel:+8809638-604252" className="font-body text-sm font-black text-[#181C14]">+8809638-604252</Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <FiMessageCircle className="text-[#697565] w-4 h-4" />
              </div>
              <div>
                <div className="font-body text-xs text-[#3C3D37] font-semibold">Live Chat</div>
                <span className="font-body text-sm font-black text-[#181C14]">Available 24/7</span>
              </div>
            </div>
          </div>
          
          {/* Right: Heading and description */}
          <div className="flex-1 flex flex-col justify-center order-1 md:order-2 bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 gap-2 rounded-xl border border-gray-200 shadow-lg">
            <h2 className="font-heading text-base sm:text-lg md:text-xl font-black text-[#181C14] mb-2 text-left tracking-wider">Contact Us</h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-[#3C3D37] mb-3 text-left max-w-md leading-relaxed font-medium">
              Ready to initiate your next technological breakthrough? Let's collaborate to architect your vision into cutting-edge software solutions.
            </p>
            <Link
              href="/contact"
              className="font-body inline-flex items-center gap-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 font-semibold text-sm w-fit rounded-lg shadow-lg"
            >
              <FiArrowRight size={12} className="text-white" />
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
