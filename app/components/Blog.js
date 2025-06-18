'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SingleBlog from "../SingleBlog";
import SectionHeader from "./SectionHeader";
import { useRef } from 'react';
import { FiArrowRight, FiCalendar, FiTag, FiTrendingUp } from 'react-icons/fi';

const categories = [
  { name: 'Technology', color: 'from-blue-500 to-blue-600' },
  { name: 'Innovation', color: 'from-primary-500 to-primary-600' },
  { name: 'Development', color: 'from-secondary-500 to-secondary-600' },
  { name: 'AI & ML', color: 'from-purple-500 to-purple-600' }
];

const trendingTopics = [
  { name: 'Cloud Computing', count: '12+' },
  { name: 'DevOps', count: '8+' },
  { name: 'AI/ML', count: '15+' },
  { name: 'Cybersecurity', count: '10+' }
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
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <SingleBlog />
            </motion.div>
          ))}
        </div>

        {/* Trending Topics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-white/90 backdrop-blur-sm p-8 border border-neutral-100/50"
        >
          <h3 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <FiTrendingUp className="w-6 h-6 text-primary-600 mr-2" />
            Trending Topics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary-50/50 to-secondary-50/50 hover:from-primary-100/50 hover:to-secondary-100/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <FiTag className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-semibold text-primary-600">{topic.count}</span>
                  </div>
                  <h4 className="font-medium text-neutral-800">{topic.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm text-primary-700 text-sm font-medium">
            <FiCalendar className="w-4 h-4 mr-2" />
            <span>Weekly tech insights delivered to your inbox</span>
          </div>
          
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
