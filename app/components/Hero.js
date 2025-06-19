'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import heroImg from "@/public/assets/hero1.png";
import Button from "./Button";
import { GoArrowRight } from "react-icons/go";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stats = [
  { number: '100+', label: 'Projects' },
  { number: '50+', label: 'Clients' },
  { number: '95%', label: 'Success Rate' }
];

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden pt-16 pb-0">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary-100/30 via-secondary-100/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-radial from-secondary-100/20 via-accent-100/10 to-transparent rounded-full blur-3xl"
        />
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text content */}
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-gradient-x">
                Next Generation Digital Solutions
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur opacity-30 -z-10" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We empower businesses with cutting-edge technology solutions that drive growth and innovation in the digital age.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/get-started">
                <Button 
                  variant="primary"
                  className="group"
                >
                  Get Started
                  <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button 
                  variant="outline"
                  className="group bg-white/80 backdrop-blur-sm hover:bg-white/90"
                >
                  Learn More
                  <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glassmorphic rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex-1 relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src={heroImg}
                alt="Hero Illustration"
                className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-conic from-primary-200/30 via-secondary-200/20 to-transparent rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

Hero.displayName = 'Hero';
export default Hero;
