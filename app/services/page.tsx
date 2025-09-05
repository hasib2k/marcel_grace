import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiCode, FiSmartphone, FiGlobe, FiCloud, FiSettings, FiShield, FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Services - Marcel Grace Infotech',
  description: 'Comprehensive software development services offered by Marcel Grace Infotech',
};

const services = [
  {
    icon: <FiCode size={40} className="text-[#697565]" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
    features: [
      'Enterprise Software Development',
      'Legacy System Modernization',
      'Software Architecture Design',
      'Database Design & Optimization',
      'System Integration',
    ],
    pricing: 'Starting from $50/hour',
  },
  {
    icon: <FiGlobe size={40} className="text-[#697565]" />,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
    features: [
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization',
    ],
    pricing: 'Starting from $3,000',
  },
  {
    icon: <FiSmartphone size={40} className="text-[#697565]" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: [
      'Native iOS & Android Apps',
      'Cross-platform Development',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    pricing: 'Starting from $5,000',
  },
  {
    icon: <FiCloud size={40} className="text-[#697565]" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: [
      'Cloud Migration',
      'AWS/Azure/GCP Setup',
      'DevOps & CI/CD',
      'Cloud Security',
      'Monitoring & Scaling',
    ],
    pricing: 'Custom pricing',
  },
  {
    icon: <FiSettings size={40} className="text-[#697565]" />,
    title: 'DevOps & Automation',
    description: 'Streamline your development workflow with automated deployment and monitoring.',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Automated Testing',
      'Container Orchestration',
      'Performance Monitoring',
    ],
    pricing: 'Starting from $2,000',
  },
  {
    icon: <FiShield size={40} className="text-[#697565]" />,
    title: 'Quality Assurance',
    description: 'Comprehensive testing services to ensure your software meets the highest quality standards.',
    features: [
      'Manual Testing',
      'Automated Testing',
      'Performance Testing',
      'Security Testing',
      'User Acceptance Testing',
    ],
    pricing: 'Starting from $30/hour',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    description: 'Our team designs the system architecture and user interface.',
  },
  {
    step: '03',
    title: 'DEVELOPMENT & TESTING',
    description: 'Agile development with continuous testing and quality assurance.',
  },
  {
    step: '04',
    title: 'DEPLOYMENT & SUPPORT',
    description: 'Smooth deployment with ongoing maintenance and support.',
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="10" y2="0" stroke="#697565" strokeWidth="0.5"/>
            <line x1="0" y1="0" x2="0" y2="10" stroke="#697565" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#181C14] mb-4 font-['Lato',sans-serif]">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-[#3C3D37] max-w-3xl mx-auto font-['Lato',sans-serif] leading-relaxed">
            Comprehensive software development services to help your business leverage technology for growth and competitive advantage.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-3">
                {service.icon && React.cloneElement(service.icon, { size: 28, className: "text-[#697565] mx-auto mb-2" })}
                <h3 className="text-base font-bold text-[#181C14] mb-2 font-['Lato',sans-serif]">{service.title}</h3>
                <p className="text-sm text-[#3C3D37] font-['Lato',sans-serif] leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-1.5 mb-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-[#181C14] flex items-start font-['Lato',sans-serif]">
                    <span className="text-[#697565] mr-2 text-sm">✓</span>{feature}
                  </li>
                ))}
              </ul>
              <div className="text-center mb-3">
                <div className="text-base font-bold text-[#697565] font-['Lato',sans-serif]">{service.pricing}</div>
              </div>
              <div className="text-center">
                <Link href="/contact" className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-['Lato',sans-serif] text-sm">
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Development Process */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#181C14] mb-3 font-['Lato',sans-serif]">Our Development Process</h2>
            <p className="text-lg text-[#3C3D37] max-w-2xl mx-auto font-['Lato',sans-serif] leading-relaxed">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl shadow-lg text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#697565] font-bold text-base mx-auto mb-2 shadow-md">{step.step}</div>
                <h3 className="text-sm font-bold text-[#181C14] mb-2 font-['Lato',sans-serif]">{step.title}</h3>
                <p className="text-xs text-[#3C3D37] font-['Lato',sans-serif] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181C14] mb-2 font-['Lato',sans-serif]">Ready to Start Your Project?</h2>
          <p className="text-base text-[#3C3D37] mb-4 max-w-2xl mx-auto font-['Lato',sans-serif] leading-relaxed">
            Let's discuss your requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-block px-5 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-['Lato',sans-serif] text-sm">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="inline-block px-5 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold hover:from-gray-800 hover:to-gray-600 transition-all duration-300 font-['Lato',sans-serif] text-sm">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
