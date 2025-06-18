'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import heroImg from "@/public/assets/hero.svg";
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

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden pt-16">
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
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-100/30 via-primary-100/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        variants={stagger}
        initial="initial"
        animate="animate"
        className="container relative pt-12 lg:pt-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={fadeInUp}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-700 text-sm font-medium mb-4"
              >
                Transforming Ideas into Reality
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="heading-1 !leading-tight"
              >
                Modern Tech Solutions for 
                <span className="gradient-text block"> Digital Success</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-neutral-600 mt-6 leading-relaxed"
              >
                We specialize in building MVPs and scaling digital products for startups and midsize companies. Let's turn your vision into a successful digital reality.
              </motion.p>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" href="/contact" className="group">
                Get Started
                <GoArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" href="/portfolio">
                View Portfolio
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200/80"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleUp}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-neutral-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleUp}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-conic from-primary-200/30 via-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-spin-slow" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <Image
                  src={heroImg}
                  alt="Hero illustration"
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
