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
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/4 left-1/3 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-r from-emerald-400/10 via-cyan-400/8 to-emerald-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-r from-cyan-400/8 via-emerald-400/6 to-cyan-400/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-cyan-400/5 to-emerald-400/5"></div>
            
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We offer comprehensive software development services to help your business 
                leverage technology for growth and competitive advantage.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-emerald-400/10 transition-all duration-500 rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                {/* Service Icon */}
                <div className="mb-4 sm:mb-5 lg:mb-6">
                  <div className={`p-2.5 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-500 w-fit`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                </div>
                
                {/* Service Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-emerald-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 leading-relaxed mb-4 sm:mb-5 lg:mb-6 flex-grow transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Service Link */}
                <Link
                  href={service.url}
                  className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/40 border border-emerald-400/20 hover:border-emerald-400/40 w-fit text-sm sm:text-base"
                >
                  <FiExternalLink size={14} className="sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  {service.linkText}
                </Link>

                {/* Decorative bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
