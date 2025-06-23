'use client';

import img1 from "@/public/assets/Expertise_2.jpg";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { BsArrowRight } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  "Advanced AI Technology Integration",
  "Cloud-Native Architecture",
  "Real-time Analytics Dashboard",
  "Secure Data Management",
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function Experience() {
  return (
    <section className="relative overflow-hidden pt-0 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 
                            border border-neutral-100/50 transition-all duration-500
                            hover:shadow-lg group-hover:-translate-y-2">
                <Image
                  src={img1}
                  alt="Experience Illustration"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br 
                              from-primary-500/5 to-secondary-500/5 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                              w-3/4 h-3/4 bg-gradient-radial from-white/40 via-transparent 
                              to-transparent opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-2xl" />
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 
                            to-secondary-500/20 rounded-3xl blur-xl opacity-50 
                            group-hover:opacity-70 transition-opacity duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r 
                           from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                Transform Your Business with Our Expertise
              </h2>
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r 
                            from-primary-500/10 to-secondary-500/10 blur-xl -z-10" />
            </div>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Experience the power of cutting-edge technology solutions designed to elevate 
              your business to new heights. Our innovative approach combines industry expertise 
              with advanced technology to deliver exceptional results.
            </p>

            {/* Features List */}
            <motion.ul 
              className="space-y-4 mb-8"
              variants={listVariants}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <div className="relative">
                    <FiCheckCircle className="w-6 h-6 text-primary-600" />
                    <div className="absolute inset-0 bg-primary-500/20 blur-sm 
                                  rounded-full animate-pulse" />
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <Button variant="primary" className="group">
              Get Started Today
              <BsArrowRight className="ml-2 transition-transform duration-300 
                                     group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
