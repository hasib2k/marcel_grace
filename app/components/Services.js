'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout, FiSmartphone, FiCloud, FiShield } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: FiCode,
    title: 'Custom Software Development',
    description: 'Tailored solutions built with cutting-edge technology to meet your unique business needs.',
    features: ['Enterprise Applications', 'API Integration', 'Legacy System Modernization'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design & Development',
    description: 'Creating intuitive, engaging user experiences that drive conversion and satisfaction.',
    features: ['User Research', 'Interactive Prototypes', 'Responsive Design'],
    gradient: 'from-primary-500 to-primary-600'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'App Store Optimization'],
    gradient: 'from-secondary-500 to-secondary-600'
  },
  {
    icon: FiCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your digital transformation.',
    features: ['Cloud Migration', 'AWS & Azure', 'DevOps Implementation'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: FiDatabase,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    features: ['Big Data Processing', 'BI Solutions', 'Predictive Analytics'],
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: FiShield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    features: ['Security Audits', 'Threat Prevention', 'Compliance Solutions'],
    gradient: 'from-red-500 to-red-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <section className="relative pt-0 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title="Comprehensive Tech Solutions"
          subtitle="Empowering your business with innovative technology solutions tailored to your needs"
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm p-6 
                              border border-neutral-100/50 transition-all duration-500
                              hover:shadow-lg hover:-translate-y-1">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 
                                 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-20 
                                   group-hover:opacity-30 transition-opacity duration-300`} />
                    <Icon className={`w-10 h-10 relative z-10 bg-gradient-to-br ${service.gradient} 
                                    rounded-xl p-2 text-white shadow-lg
                                    transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-neutral-800 
                               group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-600">
                        <motion.div
                          initial={false}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effects */}
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial 
                                from-primary-500/10 via-transparent to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-radial 
                                from-secondary-500/10 via-transparent to-transparent opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
