'use client';

import img1 from "@/public/assets/experience.svg";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { BsArrowRight } from 'react-icons/bs';

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

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/50 to-secondary-50/80" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-200/20 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary-200/20 to-transparent rounded-full blur-3xl -z-10" />

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
              {/* Image Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm p-4">
                <Image 
                  src={img1} 
                  alt="Experience Illustration" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Badge */}
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-700 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Our Experience
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-tight mb-6">
              Partner with us for{' '}
              <span className="gradient-text">future-focused</span>{' '}
              tech excellence.
            </h2>

            {/* Description */}
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Experience innovative solutions with Marcel Grace Infotech, experts in robust software development. Modern, client-focused, and keen on creating scalable solutions, we redefine digital transformations. Let's build your vision together!
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Innovative Solutions', 'Modern Technology', 'Scalable Systems', 'Expert Team'].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-neutral-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ x: 5 }}>
              <Button variant="primary" className="group">
                Learn More
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
