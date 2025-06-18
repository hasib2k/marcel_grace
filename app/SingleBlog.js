'use client';

import { motion } from 'framer-motion';
import img1 from "@/public/assets/blog1.jpg";
import Image from "next/image";
import { FiArrowRight, FiCalendar, FiMessageCircle } from 'react-icons/fi';

export default function SingleBlog() {
  return (
    <motion.div 
      className="relative h-full"
      whileHover={{ translateY: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-[240px] overflow-hidden rounded-t-2xl">
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.span 
              className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Technology
            </motion.span>
          </div>
          
          {/* Image with hover effect */}
          <div className="relative h-full transform transition-transform duration-300 hover:scale-105">
            <Image
              className="w-full h-full object-cover"
              src={img1}
              alt="Blog Image"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-neutral-600 mb-3">
            <div className="flex items-center">
              <FiCalendar className="w-4 h-4 mr-2" />
              <span>June 18, 2025</span>
            </div>
            <div className="flex items-center">
              <FiMessageCircle className="w-4 h-4 mr-2" />
              <span>24 Comments</span>
            </div>
          </div>

          {/* Title with hover effect */}
          <h3 className="text-xl font-bold text-neutral-800 mb-3 line-clamp-2 transition-colors duration-300 hover:text-primary-600">
            Revamping the Membership Model with Triathlon Australia
          </h3>

          {/* Description */}
          <p className="text-neutral-600 mb-4 line-clamp-3">
            Discover how we transformed Triathlon Australia's digital presence with modern technology solutions and innovative approaches to member engagement.
          </p>

          {/* Read More Link with independent hover effect */}
          <div className="inline-block">
            <motion.a
              href="#"
              className="inline-flex items-center text-primary-600 font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Read More
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
