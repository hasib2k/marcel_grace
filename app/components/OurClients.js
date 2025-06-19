'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from "./SectionHeader";
import Image from 'next/image';
import { FiAward, FiUsers, FiGlobe, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import { useRef } from 'react';

const clientLogos = [
  {
    name: 'TechFlow Systems',
    logo: '/assets/clients/techflow.svg',
    type: 'Enterprise Software',
    year: '2024',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    name: 'DataCore Solutions',
    logo: '/assets/clients/datacore.svg',
    type: 'Data Analytics',
    year: '2023',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    name: 'InnovaTech',
    logo: '/assets/clients/innovatech.svg',
    type: 'AI Solutions',
    year: '2024',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    name: 'QuantumSoft',
    logo: '/assets/clients/quantumsoft.svg',
    type: 'Quantum Computing',
    year: '2023',
    color: 'from-orange-500/20 to-amber-500/20'
  },
];

const clientStats = [
  {
    icon: FiGlobe,
    number: '20+',
    label: 'Countries',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Global reach and impact',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
  },
  {
    icon: FiUsers,
    number: '100+',
    label: 'Enterprise Clients',
    gradient: 'from-primary-500 to-violet-600',
    description: 'Trusted by industry leaders',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
  },
  {
    icon: FiAward,
    number: '98%',
    label: 'Success Rate',
    gradient: 'from-secondary-500 to-pink-600',
    description: 'Consistent excellence',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)'
  },
];

export default function OurClients() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-neutral-50/80"
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] mask-image:[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-primary-500/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="container relative">
        <SectionHeader
          title="Trusted by Industry Leaders"
          subtitle="We partner with forward-thinking enterprises worldwide"
          centered
        />

        {/* Modernized Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {clientStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-lg p-8
                              border border-neutral-200/50 shadow-sm transition-all duration-500
                              hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300/50
                              before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-white/0 before:opacity-0 before:transition-opacity before:duration-500
                              hover:before:opacity-100"
                     style={{ background: `${stat.bgPattern}, white` }}>
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 
                                 group-hover:opacity-10 transition-all duration-500
                                 group-hover:scale-105`} />
                  
                  {/* Enhanced Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-2xl opacity-20 
                                   group-hover:opacity-40 transition-all duration-500 scale-150`} />
                    <div className={`relative z-10 bg-gradient-to-br ${stat.gradient} 
                                   rounded-xl p-3 text-white shadow-lg transform-gpu
                                   transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl
                                   group-hover:rotate-[360deg]`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.gradient}
                                 bg-clip-text text-transparent transition-transform duration-500
                                 group-hover:scale-105`}>{stat.number}</h3>
                  <p className="text-lg font-semibold text-neutral-800 mb-2 
                               transition-colors duration-500 group-hover:text-neutral-900">{stat.label}</p>
                  <p className="text-neutral-600 transition-colors duration-500 
                               group-hover:text-neutral-700">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modernized Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl p-8
                            border border-neutral-200/50 shadow-sm transition-all duration-500
                            hover:shadow-xl hover:-translate-y-1 hover:border-neutral-300/50
                            before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-white/0 
                            before:opacity-0 before:transition-opacity before:duration-500
                            hover:before:opacity-100">
                {/* Enhanced Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color}
                                opacity-0 group-hover:opacity-100 transition-all duration-500
                                group-hover:scale-105`} />
                
                {/* Enhanced Logo Container */}
                <div className="relative aspect-square flex items-center justify-center
                              before:absolute before:inset-0 before:bg-gradient-radial before:from-white/80 
                              before:to-transparent before:opacity-0 before:transition-opacity 
                              before:duration-500 group-hover:before:opacity-100">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={120}
                    className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                              relative z-10 drop-shadow-sm group-hover:drop-shadow-lg"
                  />
                </div>

                {/* Enhanced Client Info */}
                <div className="mt-6 text-center relative z-10">
                  <h4 className="font-semibold text-lg text-neutral-800 group-hover:text-primary-600 
                               transition-colors duration-500 mb-1">{client.name}</h4>
                  <p className="text-sm text-neutral-600 transition-colors duration-500
                              group-hover:text-neutral-700">
                    <span className="inline-block transition-transform duration-500
                                   group-hover:scale-105">{client.type}</span>
                    <span className="mx-2 opacity-50">·</span>
                    <span className="inline-block transition-transform duration-500
                                   group-hover:scale-105">{client.year}</span>
                  </p>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial 
                              from-primary-500/10 via-transparent to-transparent opacity-0 
                              group-hover:opacity-100 transition-all duration-700 delay-100
                              group-hover:scale-150" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial 
                              from-secondary-500/10 via-transparent to-transparent opacity-0 
                              group-hover:opacity-100 transition-all duration-700 delay-200
                              group-hover:scale-150" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
