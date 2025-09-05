'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const expertise = [
    'Web Development',
    'Mobile App Development', 
    'Custom Software Solutions',
    'Cloud Services',
    'DevOps & Automation',
    'UI/UX Design',
    'API Development',
    'Database Design',
    'Quality Assurance',
    'Digital Transformation'
  ];

  return (
  <section id="about" className="py-4 sm:py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Background Pattern - Same as Services/About */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left: Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative h-48 sm:h-64 md:h-80 w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <Image
                src="/assets/about-1.jpg"
                alt="Marcel Grace Team"
                fill
                className="object-cover rounded-2xl relative z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
          {/* Right: About Section */}
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="font-heading text-base sm:text-lg md:text-xl font-black text-[#181C14] mb-2 text-left tracking-wider">About Marcel Grace</h2>
            <div className="space-y-2 text-[#3C3D37] leading-relaxed bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 shadow-lg">
              <p className="font-body text-sm md:text-base font-medium">
                Advanced software. Proven growth. Industry leader.
              </p>
              <p className="font-body text-sm md:text-base font-medium">
                Our elite team of software architects, UX engineers, and technology consultants collaborate using advanced methodologies to decode complex business challenges and deliver solutions that transcend conventional expectations.
              </p>
              <p className="font-body text-sm md:text-base font-medium">
                From emerging startups to Fortune 500 enterprises, we've empowered organizations across diverse industries to harness advanced technology frameworks and maintain competitive superiority.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-3 md:mt-4">
              <Link href="/about" className="px-4 py-2 text-[#697565] bg-white border border-[#697565] font-semibold text-sm rounded-lg text-center shadow-lg">
                Learn More
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold text-sm rounded-lg text-center shadow-lg">
                Start Project
              </Link>
            </div>
          </div>
        </div>
        {/* Move Core Expertise further down for separation */}
        <div className="mt-6 md:mt-8">
          <h3 className="font-heading text-sm md:text-base font-black text-[#181C14] mb-2 tracking-wider">Core Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="font-body px-3 py-1.5 bg-gradient-to-br from-gray-50 to-gray-100 text-[#3C3D37] text-xs sm:text-sm font-semibold rounded-lg border border-gray-200 shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
