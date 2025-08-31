import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiCode, FiSmartphone, FiGlobe, FiCloud, FiSettings, FiShield } from 'react-icons/fi';

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
      'Cross-Platform Development',
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
    pricing: 'Custom Pricing',
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
    title: 'Development & Testing',
    description: 'Agile development with continuous testing and quality assurance.',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'Smooth deployment with ongoing maintenance and support.',
  },
];

export default function Services() {
  return (
  <main className="min-h-screen bg-white pt-6 lg:pt-8">
      <div className="max-w-5xl mx-auto px-1 sm:px-2 lg:px-3 py-3">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{color:'#181C14',background:'#fff',marginBottom:'2rem',padding:'1.5rem 0',display:'inline-block',width:'100%'}}>Our Services</h1>
          <p className="text-[11px] text-[#3C3D37] max-w-2xl mx-auto">We offer comprehensive software development services to help your business leverage technology for growth and competitive advantage.</p>
        </div>
        {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-1.5 bg-white border border-[#ECDFCC] flex flex-col h-full rounded-none">
              <div className="mb-1 flex items-center justify-center">{service.icon && React.cloneElement(service.icon, { size: 20 })}</div>
              <h3 className="text-[11px] font-bold text-[#181C14] mb-0.5 text-center">{service.title}</h3>
              <p className="text-[11px] text-[#3C3D37] mb-1 text-center">{service.description}</p>
              <ul className="space-y-0 mb-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-[11px] text-[#181C14] flex items-start">
                    <span className="text-[#697565] mr-0.5">✓</span>{feature}
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-[#697565] font-semibold mb-1 text-center">{service.pricing}</div>
              <Link href="/contact" className="px-1.5 py-0.5 rounded-none font-semibold inline-block bg-[#697565] text-white w-full text-center text-[11px]">Get Quote</Link>
            </div>
          ))}
        </div>
        {/* Development Process */}
        <div className="mb-4">
          <h2 className="text-[11px] font-bold text-[#181C14] text-center mb-2">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-5 h-5 bg-[#697565] rounded-none flex items-center justify-center text-white font-bold text-[11px] mx-auto mb-0.5">{step.step}</div>
                <h3 className="text-[11px] font-semibold text-[#181C14] mb-0">{step.title}</h3>
                <p className="text-[11px] text-[#3C3D37]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
  <div className="p-1.5 text-center bg-white border border-[#ECDFCC] rounded-none">
          <h2 className="text-[11px] font-bold text-[#181C14] mb-0.5">Ready to Start Your Project?</h2>
          <p className="text-[11px] text-[#3C3D37] mb-1">Let's discuss your requirements and create a custom solution for your business.</p>
          <div className="flex flex-col sm:flex-row gap-0.5 justify-center">
            <Link href="/contact" className="px-1.5 py-0.5 rounded-none font-semibold inline-block bg-[#ECDFCC] text-[#181C14] text-[11px] border border-[#ECDFCC]">Start Your Project</Link>
            <Link href="/portfolio" className="px-1.5 py-0.5 rounded-none font-semibold inline-block border border-[#ECDFCC] text-[#181C14] bg-white text-[11px]">View Our Work</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
