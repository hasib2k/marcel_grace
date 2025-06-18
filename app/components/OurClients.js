'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from "./SectionHeader";
import Image from 'next/image';
import { FiAward, FiUsers, FiGlobe, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import { useRef } from 'react';

const clientStats = [
  {
    icon: FiGlobe,
    number: '30+',
    label: 'Countries',
    gradient: 'from-blue-500 to-blue-600',
    description: 'Global reach and impact'
  },
  {
    icon: FiUsers,
    number: '200+',
    label: 'Enterprise Clients',
    gradient: 'from-primary-500 to-primary-600',
    description: 'Trusted by industry leaders'
  },
  {
    icon: FiAward,
    number: '98%',
    label: 'Success Rate',
    gradient: 'from-secondary-500 to-secondary-600',
    description: 'Consistent excellence'
  },
];

const clientLogos = [
  { 
    name: 'TechCorp Global',
    logo: '/assets/Icon1.svg',
    type: 'Technology',
    year: '2023'
  },
  { 
    name: 'InnovateLabs',
    logo: '/assets/Icon2.svg',
    type: 'Research',
    year: '2024'
  },
  { 
    name: 'DataFlow Systems',
    logo: '/assets/Icon3.svg',
    type: 'Data Analytics',
    year: '2024'
  },
  { 
    name: 'CloudPeak Solutions',
    logo: '/assets/Icon4.svg',
    type: 'Cloud Services',
    year: '2025'
  },
  { 
    name: 'SmartServe AI',
    logo: '/assets/Icon1.svg',
    type: 'Artificial Intelligence',
    year: '2025'
  },
  { 
    name: 'QuantumTech',
    logo: '/assets/Icon2.svg',
    type: 'Quantum Computing',
    year: '2024'
  },
  { 
    name: 'CyberShield',
    logo: '/assets/Icon3.svg',
    type: 'Cybersecurity',
    year: '2025'
  },
  { 
    name: 'BlockMatrix',
    logo: '/assets/Icon4.svg',
    type: 'Blockchain',
    year: '2024'
  }
];

const industries = [
  { icon: FiCpu, name: 'Technology', count: '45+' },
  { icon: FiDatabase, name: 'Data Analytics', count: '30+' },
  { icon: FiTrendingUp, name: 'FinTech', count: '25+' },
];

const OurClients = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/50 to-secondary-50/50">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,131,223,0.1) 0%, transparent 70%)",
            y,
            opacity
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="Empowering businesses worldwide with cutting-edge technology solutions and innovative digital transformations."
        />

        {/* Stats Section with 3D Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
          {clientStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative group perspective"
            >
              <div className="card backdrop-blur-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 transform-gpu preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10 flex flex-col items-center p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} p-0.5 transform group-hover:rotate-6 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-10 h-10 text-primary-600" />
                    </div>
                  </div>
                  <motion.h3 
                    className="text-5xl font-bold mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-lg font-semibold text-neutral-800 mt-2">
                    {stat.label}
                  </p>
                  <p className="text-neutral-600 mt-1 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-100/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <industry.icon className="w-5 h-5 text-primary-600" />
                <span className="text-neutral-700 font-medium">{industry.name}</span>
                <span className="text-sm text-primary-600 font-semibold">{industry.count}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Logos Grid with Hover Cards */}
        <div className="relative rounded-3xl bg-white/90 backdrop-blur-sm p-12 border border-neutral-100/50">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative perspective"
              >
                <div className="relative p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-100/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 transform-gpu preserve-3d">
                  {/* Logo */}
                  <div className="relative flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                      {client.name}
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1">{client.type}</p>
                    <p className="text-xs text-primary-600 mt-1">Since {client.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-700 text-sm font-medium"
          >
            <FiAward className="w-4 h-4" />
            <span>Top-Rated Technology Partner</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-100/80 backdrop-blur-sm text-secondary-700 text-sm font-medium"
          >
            <FiUsers className="w-4 h-4" />
            <span>Growing Client Network</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClients;
