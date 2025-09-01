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
  <section className="py-10 bg-white rounded-xl shadow-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          {/* Left: Header and Services Grid */}
          <div className="flex-1 w-full">
            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-sm md:text-lg font-extrabold mb-2 text-[#181C14]">Explore Our Offering</h2>
              <p className="text-[11px] md:text-xs text-[#3C3D37] max-w-2xl">
                We offer comprehensive software development services to help your business leverage technology for growth and competitive advantage.
              </p>
            </div>
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="flex flex-col h-full bg-white p-5 gap-3 rounded-xl shadow-none"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5 text-[#697565] mr-1" />
                      <h3 className="text-xs md:text-base font-semibold text-[#181C14]">{service.title}</h3>
                    </div>
                    <p className="text-[#3C3D37] text-[11px] md:text-xs mb-1">{service.description}</p>
                    <Link
                      href={service.url}
                      className="inline-flex items-center gap-2 bg-[#697565] text-white px-4 py-2 font-semibold text-sm rounded shadow-none w-fit"
                    >
                      <FiExternalLink size={16} className="text-white" />
                      {service.linkText}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-end mt-4 md:mt-12 md:self-center mb-6 md:mb-0">
            <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden">
              <img
                src="/assets/image_1.jpg"
                alt="Services Banner"
                className="w-full h-full object-cover rounded-none"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
