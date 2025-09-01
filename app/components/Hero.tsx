'use client';

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
  <section className="pt-0 pb-2 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-10 min-h-[60vh]">
      {/* Mobile: Image on top, text centered; Desktop: Image right, text left */}
  <div className="flex-1 flex justify-center items-center order-1 md:order-2 w-full mt-0 md:mt-0 mb-0 md:mb-0 z-10">
  <div className="relative w-72 h-72 xs:w-96 xs:h-96 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] bg-white flex items-center justify-center rounded-none shadow-none transition-all duration-300">
          <Image
            src="/assets/hero_image.jpg"
            alt="Marcel Grace Infotech"
            fill
            className="object-contain mx-auto rounded-none"
            sizes="100vw"
            priority
            style={{ objectFit: 'contain', objectPosition: 'center', width: '100%', height: '100%', display: 'block', zIndex: 1 }}
          />
        </div>
      </div>
  <div className="flex-1 flex flex-col justify-center gap-4 order-2 md:order-1 md:items-start items-center text-center md:text-left w-full">
  <h1 className="text-base md:text-2xl font-extrabold text-[#181C14] leading-tight mb-1">
          <span className="font-extrabold bg-gradient-to-r from-[#697565] to-[#ECDFCC] bg-clip-text text-transparent tracking-widest text-[1.2em] flex flex-row gap-1 items-center justify-center md:justify-start">
            Marcel Grace Infotech:
          </span>
          <span className="font-bold text-[15px] sm:text-[17px] md:text-lg bg-gradient-to-r from-[#697565] to-[#ECDFCC] bg-clip-text text-transparent block mt-2 md:mt-0 text-center md:text-left">
            Leading Software Development Company with innovative technology.
          </span>
        </h1>
  <p className="text-[11px] md:text-xs text-[#3C3D37] mb-2 max-w-xl">
          <span className="text-[#181C14] font-semibold">We build custom software that drives business growth and efficiency.</span> <span className="text-[#be7507] font-semibold">Partner with us to transform your ideas into reality.</span> <span className="text-[#697565] font-semibold">We turn your vision into powerful digital solutions.</span> <span className="text-[#ECDFCC] font-semibold">Your success is our mission.</span> <span className="text-[#be7507] font-semibold">Empowering your business to thrive in the digital age.</span>
        </p>
          <div className="flex flex-row flex-wrap gap-6 mb-4 justify-center md:justify-start w-full">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm md:text-base font-bold text-[#181C14]">100+</span>
            <span className="text-[10px] text-[#3C3D37]">Projects</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm md:text-base font-bold text-[#181C14]">50+</span>
            <span className="text-[10px] text-[#3C3D37]">Clients</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm md:text-base font-bold text-[#181C14]">5+</span>
            <span className="text-[10px] text-[#3C3D37]">Years</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm md:text-base font-bold text-[#181C14]">24/7</span>
            <span className="text-[10px] text-[#3C3D37]">Support</span>
          </div>
        </div>
        <div className="flex gap-2 mt-1 justify-center md:justify-start w-full">
          <Link href="/services" className="px-2.5 py-0.5 rounded-none border border-[#697565] text-[#697565] font-semibold text-[10px]">Explore Our Services</Link>
          <Link href="/contact" className="px-2.5 py-0.5 rounded-none border border-[#697565] bg-[#697565] text-white font-semibold text-[10px]">Contact Us</Link>
        </div>
        <blockquote className="text-[10px] md:text-xs text-[#697565] italic border-l-2 border-[#ECDFCC] pl-3 mt-6 max-w-xl w-full text-center md:text-left">
          “Building Tomorrow’s Technology Today”
        </blockquote>
      </div>
    </div>
  </section>
  );
}
