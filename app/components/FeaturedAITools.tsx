'use client';

import { motion } from 'framer-motion';
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
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. Our solutions are scalable, secure, and optimized for performance across all devices and browsers.',
    url: '/services#web-development',
    linkText: 'Explore Services',
    icon: FiGlobe,
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps for iOS and Android that engage users and drive business results.',
    url: '/services#mobile-development',
    linkText: 'Get Started',
    icon: FiSmartphone,
    gradient: 'from-emerald-400 to-cyan-400',
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-200/8 via-secondary-300/6 to-accent-200/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="liquid-glass p-8 lg:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-base lg:text-lg xl:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
              We offer comprehensive software development services to help your business 
              leverage technology for growth and competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="liquid-glass p-8 hover:scale-[1.02] transition-all duration-500 rounded-3xl group"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg w-fit`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-deep-secondary mb-4 group-hover:text-secondary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-deep-primary mb-6 leading-relaxed font-semibold">
                {service.description}
              </p>
              
              <Link
                href={service.url}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25"
              >
                <FiExternalLink size={16} />
                {service.linkText}
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
