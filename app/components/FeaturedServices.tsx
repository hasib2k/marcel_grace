'use client';

import Link from 'next/link';
import { FiExternalLink, FiCode, FiGlobe, FiSmartphone } from 'react-icons/fi';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs. From enterprise applications to specialized tools, we create software that drives efficiency and growth.',
    url: '/services#custom-software',
    linkText: 'Learn More',
    icon: FiCode,
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. Our solutions are scalable, secure, and optimized for performance across all devices and browsers.',
    url: '/services#web-development',
    linkText: 'Learn More',
    icon: FiGlobe,
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps for iOS and Android that engage users and drive business results.',
    url: '/services#mobile-development',
    linkText: 'Learn More',
    icon: FiSmartphone,
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed for maximum usability and brand impact. We focus on user-centered design to ensure your product is both beautiful and functional.',
    url: '/services#ui-ux-design',
    linkText: 'Learn More',
    icon: FiGlobe,
  },
];

export default function FeaturedServices() {
  return (
    <section className="pt-6 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center flex flex-col items-center">
          <h2 className="text-sm md:text-lg font-extrabold mb-2 text-[#181C14]">Our Services</h2>
          <p className="text-[11px] md:text-xs text-[#3C3D37] max-w-2xl">
            We offer comprehensive software development services to help your business leverage technology for growth and competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col h-full bg-white p-4 gap-2 rounded-none border-l-4 border-[#697565] shadow-none"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#697565] mr-1" />
                  <h3 className="text-xs md:text-base font-semibold text-[#181C14]">{service.title}</h3>
                </div>
                <p className="text-[#3C3D37] text-[11px] md:text-xs mb-1">{service.description}</p>
                <Link
                  href={service.url}
                  className="inline-flex items-center gap-2 border border-[#697565] bg-[#697565] text-white px-2.5 py-0.5 font-medium text-[10px] rounded-none w-fit"
                >
                  <FiExternalLink size={12} className="text-white" />
                  {service.linkText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
