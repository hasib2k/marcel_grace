import { Metadata } from 'next';
import Link from 'next/link';
import { FiCode, FiSmartphone, FiGlobe, FiCloud, FiSettings, FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Services - Marcel Grace Infotech',
  description: 'Comprehensive software development services offered by Marcel Grace Infotech',
};

const services = [
  {
    icon: <FiCode size={40} />,
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
    icon: <FiGlobe size={40} />,
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
    icon: <FiSmartphone size={40} />,
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
    icon: <FiCloud size={40} />,
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
    icon: <FiSettings size={40} />,
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
    icon: <FiShield size={40} />,
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
    <main className="min-h-screen bg-black pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive software development services to help your business 
            leverage technology for growth and competitive advantage.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
              <div className="text-emerald-400 mb-4 sm:mb-6">{service.icon}</div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-emerald-400 font-semibold mb-4">
                {service.pricing}
              </div>
              
              <Link
                href="/contact"
                className="btn-primary w-full text-center"
              >
                Get Quote
              </Link>
            </div>
          ))}
        </div>
        
        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Development Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's discuss your requirements and create a custom solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
