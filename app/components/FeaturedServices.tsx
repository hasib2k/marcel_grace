'use client';

import Link from 'next/link';
import { FiCode, FiGlobe, FiSmartphone, FiPenTool } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs. From enterprise applications to specialized tools, we create software that drives efficiency and growth.',
    url: '/services',
    linkText: 'Learn More',
    icon: FiCode,
  },
  {
    id: 2,
    title: 'Web Application Development', 
    description: 'Modern, responsive web applications built with cutting-edge technologies. Our solutions are scalable, secure, and optimized for performance across all devices and browsers.',
    url: '/services',
    linkText: 'Learn More',
    icon: FiGlobe,
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps for iOS and Android that engage users and drive business results.',
    url: '/services',
    linkText: 'Learn More',
    icon: FiSmartphone,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed for maximum usability and brand impact. We focus on user-centered design to ensure your product is both beautiful and functional.',
    url: '/services',
    linkText: 'Learn More',
    icon: FiPenTool,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-4 sm:py-6 bg-white relative overflow-hidden">
      {/* Background Pattern - Consistent with other components */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="servicesGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#servicesGrid)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full">
          {/* Header */}
          <div className="mb-3 sm:mb-4 text-center md:text-left">
            <h2 className="font-heading text-base sm:text-lg md:text-xl font-black mb-2 text-[#181C14] tracking-wider">Service Arsenal</h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-[#3C3D37] max-w-2xl leading-relaxed font-medium bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200 shadow-lg">
              Comprehensive software engineering solutions architected to accelerate business transformation and establish technological supremacy in competitive markets.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex flex-col h-full bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 gap-2 rounded-xl border border-gray-200 shadow-lg"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#697565]" />
                    <h3 className="font-heading text-xs sm:text-sm md:text-base font-black text-[#181C14] tracking-wide">{service.title}</h3>
                  </div>
                  <p className="font-body text-[#3C3D37] text-xs sm:text-sm leading-relaxed font-medium mb-2">{service.description}</p>
                  <Link
                    href={service.url}
                    className="font-body inline-flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-2 font-semibold text-xs rounded-lg w-full shadow-lg mt-auto"
                  >
                    {service.linkText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
