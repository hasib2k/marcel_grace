'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/assets/hero1.png";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight, FiCode, FiCpu, FiGlobe } from "react-icons/fi";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stats = [
  { 
    number: '100+', 
    label: 'Projects',
    icon: FiCode,
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    number: '50+', 
    label: 'Clients',
    icon: FiGlobe,
    gradient: 'from-primary-500 to-violet-500'
  },
  { 
    number: '95%', 
    label: 'Success Rate',
    icon: FiCpu,
    gradient: 'from-secondary-500 to-pink-500'
  }
];

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="relative min-h-[90vh] overflow-hidden pt-20 pb-0 bg-gradient-to-b from-white to-neutral-50/80"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,var(--primary-100)_0%,var(--secondary-100)_25%,transparent_70%)] rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--secondary-100)_0%,var(--accent-100)_25%,transparent_70%)] rounded-full blur-3xl"
        />
        {/* Modern Grid background */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Enhanced Text content */}
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent [background-size:200%_auto] animate-text-shine">
                Next Generation Digital Solutions
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-xl opacity-30 -z-10" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We empower businesses with cutting-edge technology solutions that drive growth and innovation in the digital age.
              <span className="hidden sm:inline"> Transform your ideas into reality with our expert team.</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button 
                  variant="primary"
                  className="group relative overflow-hidden shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                  <span className="relative z-10">Get Started</span>
                  <FiArrowUpRight className="ml-2 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button 
                  variant="outline"
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-primary-200 hover:border-primary-300"
                >
                  <span className="relative z-10 bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">Learn More</span>
                  <FiArrowUpRight className="ml-2 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 
                              border border-neutral-100 shadow-lg shadow-neutral-100/20
                              hover:shadow-xl hover:shadow-neutral-200/30 hover:-translate-y-1
                              transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/30 opacity-80" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 
                                  group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.gradient} 
                                    text-white shadow-lg mb-4 transform-gpu transition-transform duration-300 
                                    group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} 
                                    bg-clip-text text-transparent mb-2`}>
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-neutral-600 group-hover:text-neutral-800 
                                    transition-colors duration-300">{stat.label}</div>
                    </div>
                    {/* Decorative corner gradients */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-radial 
                                  from-white/40 via-transparent to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial 
                                  from-white/40 via-transparent to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Enhanced Hero image */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex-1 relative"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative">
                <Image
                  src={heroImg}
                  alt="Hero Illustration"
                  className="w-full max-w-[600px] mx-auto drop-shadow-2xl 
                           transform-gpu transition-transform duration-300 hover:scale-105"
                  priority
                />
                {/* Image shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
            {/* Enhanced Decorative elements */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-conic from-primary-200/40 via-secondary-200/30 to-accent-200/20 
                         rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

Hero.displayName = 'Hero';
export default Hero;
