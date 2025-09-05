'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="mt-8 py-4 sm:py-6 bg-white relative overflow-hidden">
      {/* Background Pattern - Consistent with other components */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="heroGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#heroGrid)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 min-h-[50vh] md:min-h-[45vh] relative z-10">
        {/* Image Section - Right on desktop, top on mobile */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2 w-full">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center rounded-2xl border border-gray-200 shadow-lg">
            <Image
              src="/assets/hero-2.jpg"
              alt="Marcel Grace Infotech"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Content Section - Left on desktop, bottom on mobile */}
        <div className="flex-1 flex flex-col justify-center gap-3 order-2 md:order-1 md:items-start items-center text-center md:text-left w-full">
          {/* Main Heading */}
          <div className="mb-2">
            <h1 className="font-heading font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#181C14] tracking-wider mb-1">
              Marcel Grace Infotech
            </h1>
            <p className="font-body font-semibold text-sm sm:text-base text-[#697565] tracking-wide">
              Advanced Software Development Solutions
            </p>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 shadow-lg max-w-2xl">
            <p className="text-xs sm:text-sm md:text-base text-[#3C3D37] leading-relaxed">
              <span className="text-[#181C14] font-semibold">Engineering cutting-edge software architectures that drive exponential business growth.</span> 
              <span className="text-[#697565] font-semibold"> Your strategic technology partner for future-ready solutions.</span>
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full mt-2">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-md min-w-[60px] text-center">
              <div className="text-sm sm:text-base font-black text-[#697565]">100+</div>
              <div className="text-xs text-[#3C3D37] font-semibold">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-md min-w-[60px] text-center">
              <div className="text-sm sm:text-base font-black text-[#697565]">50+</div>
              <div className="text-xs text-[#3C3D37] font-semibold">Clients</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-md min-w-[60px] text-center">
              <div className="text-sm sm:text-base font-black text-[#697565]">5+</div>
              <div className="text-xs text-[#3C3D37] font-semibold">Years</div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-md min-w-[60px] text-center">
              <div className="text-sm sm:text-base font-black text-[#697565]">24/7</div>
              <div className="text-xs text-[#3C3D37] font-semibold">Support</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-3 justify-center md:justify-start w-full">
            <Link 
              href="/services" 
              className="px-4 py-2 rounded-lg border border-[#697565] text-[#697565] font-semibold text-sm text-center bg-white shadow-lg"
            >
              Explore Services
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold text-sm text-center shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Quote */}
          <blockquote className="text-xs text-[#697565] italic border-l-2 border-[#697565] pl-2 mt-3 max-w-xl text-center md:text-left">
            "Building Tomorrow's Technology Today"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
