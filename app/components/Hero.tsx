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
  <section className="pt-24 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start gap-10 min-h-[60vh]">
        {/* Left: Textual Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 order-2 md:order-1 md:items-start items-center text-left">
          <h1 className="text-base md:text-2xl font-extrabold text-[#181C14] leading-tight mb-1">
            Marcel Grace Infotech: <span className="font-bold text-[13px] md:text-lg text-[#3C3D37]">Leading software development company dedicated to transforming businesses through innovative technology solutions.</span>
          </h1>
          <p className="text-[11px] md:text-xs text-[#3C3D37] mb-2 max-w-xl">
            We build custom software that drives business growth and efficiency. <span className="text-[#181C14]">Partner with us to transform your ideas into reality</span> with innovative technology and expert guidance. Our team combines deep technical expertise with a passion for solving real-world business challenges, ensuring every solution is tailored to your unique needs. From initial strategy and design to development, deployment, and ongoing support, we are committed to delivering measurable results and long-term value. Experience a collaborative process, transparent communication, and a relentless focus on quality—empowering your business to thrive in the digital age.
          </p>
          <div className="flex flex-row flex-wrap gap-6 mb-4">
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
          <div className="flex gap-2 mt-1">
            <Link href="/services" className="px-2.5 py-0.5 rounded-none border border-[#697565] text-[#697565] font-semibold text-[10px]">Explore Our Services</Link>
            <Link href="/contact" className="px-2.5 py-0.5 rounded-none border border-[#697565] bg-[#697565] text-white font-semibold text-[10px]">Contact Us</Link>
          </div>
          <blockquote className="text-[10px] md:text-xs text-[#697565] italic border-l-2 border-[#ECDFCC] pl-3 mt-6 max-w-xl">
            “Building Tomorrow’s Technology Today”
          </blockquote>
        </div>
        {/* Right: Company Visual */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-48 h-48 md:w-80 md:h-80 border-2 border-[#ECDFCC] bg-white flex items-center justify-center rounded-none">
            <Image
              src="/assets/hero_image.jpg"
              alt="Marcel Grace Infotech"
              fill
              className="object-cover mx-auto rounded-none"
              sizes="100vw"
              priority
              style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
