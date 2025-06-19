'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SingleBlog from "@/app/SingleBlog";
import SectionHeader from "./SectionHeader";
import { useRef } from 'react';
import { FiArrowRight, FiCalendar, FiTag, FiTrendingUp } from 'react-icons/fi';
import { blogs } from '@/app/data/blogs.js';

const categories = [
  { name: 'Technology', color: 'from-blue-500 to-blue-600' },
  { name: 'Innovation', color: 'from-primary-500 to-primary-600' },
  { name: 'Development', color: 'from-secondary-500 to-secondary-600' },
  { name: 'AI & ML', color: 'from-primary-500 to-primary-600' }
];


export default function Blog() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="relative pt-0 pb-20 overflow-hidden" ref={containerRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/50 to-secondary-50/50">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(0,131,223,0.15) 0%, transparent 70%)",
            y,
            opacity
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Insights & Innovation Hub"
            subtitle="Explore cutting-edge insights, tech trends, and innovative solutions shaping the digital landscape."
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-medium 
                           hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 
                           transform hover:-translate-y-1`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>{/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium 
                     hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
          >
            View All Articles 
            <FiArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
