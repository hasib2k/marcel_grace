'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiLinkedin, FiArrowRight, FiMessageCircle } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si';

export default function Contact() {
  return (
    <section className="pt-6 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {/* Left: Contact Card */}
          <div className="flex-1 bg-white p-4 flex flex-col gap-2 justify-center min-w-[320px] order-2 md:order-1 mb-6 md:mb-0 border-l-4 border-[#697565] rounded-none shadow-none">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ECDFCC]">
                <FiMail className="text-[#697565] w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#3C3D37]">Email</div>
                <Link href="mailto:info.marcelgrce@gmail.com" className="text-xs font-semibold text-[#181C14] hover:underline">info.marcelgrce@gmail.com</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ECDFCC]">
                <FiPhone className="text-[#697565] w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#3C3D37]">Phone</div>
                <Link href="tel:+8809638-604252" className="text-xs font-semibold text-[#181C14] hover:underline">+8809638-604252</Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#ECDFCC]">
                <FiMessageCircle className="text-[#697565] w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#3C3D37]">Live Chat</div>
                <span className="text-xs font-semibold text-[#181C14]">Available 24/7</span>
              </div>
            </div>
          </div>
          {/* Right: Heading and description */}
          <div className="flex-1 flex flex-col justify-center order-1 md:order-2 border-l-4 border-[#697565] bg-white p-4 gap-2 rounded-none shadow-none">
            <h2 className="text-base md:text-xl font-extrabold text-[#181C14] mb-2 text-left">Contact Us</h2>
            <p className="text-xs md:text-sm text-[#3C3D37] mb-6 text-left max-w-md">
              Ready to start your next project? Let's discuss how we can bring your vision to life with cutting-edge technology solutions. Reach out to us directly or schedule a call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#697565] bg-[#697565] text-white px-2 py-0.5 font-medium text-xs w-fit"
            >
              <FiArrowRight size={14} className="text-white" />
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
