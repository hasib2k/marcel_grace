'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import SingleBlog from "@/app/SingleBlog";
import SectionHeader from "./SectionHeader";
import { useRef, useState } from 'react';
import { FiArrowRight, FiCalendar, FiTag, FiTrendingUp, FiSearch, FiFilter } from 'react-icons/fi';
import { blogs } from '@/app/data/blogs.js';
import Link from 'next/link';

const categories = [
  { 
    name: 'Technology', 
    color: 'from-blue-500 to-cyan-500',
    icon: FiTrendingUp,
    count: 12
  },
  { 
    name: 'Innovation', 
    color: 'from-violet-500 to-purple-500',
    icon: FiFilter,
    count: 8
  },
  { 
    name: 'Development', 
    color: 'from-primary-500 to-secondary-500',
    icon: FiTag,
    count: 15
  },
  { 
    name: 'AI & ML', 
    color: 'from-emerald-500 to-teal-500',
    icon: FiCalendar,
    count: 10
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      className="relative pt-8 pb-24 overflow-hidden" 
      ref={containerRef}
      style={{ scale }}
    >
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 70%, rgba(124,58,237,0.08) 0%, transparent 70%)",
            y,
            opacity
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(0,131,223,0.08) 0%, transparent 70%)",
            y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            opacity
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            title="Insights & Innovation Hub"
            subtitle="Explore cutting-edge insights, tech trends, and innovative solutions shaping the digital landscape."
          />

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200
                         focus:border-primary-300 focus:ring-4 focus:ring-primary-100 focus:outline-none
                         shadow-sm transition-all duration-300"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl
                               bg-gradient-to-r from-primary-500 to-primary-600 text-white
                               hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Enhanced Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border 
                       ${activeCategory === 'All' ? 'border-primary-200 text-primary-600' : 'border-neutral-200 text-neutral-600'} 
                       hover:border-primary-200 hover:text-primary-600 font-medium shadow-sm
                       hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 
                       transform hover:-translate-y-0.5`}
            >
              All Categories
            </motion.button>
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 
                           ${activeCategory === category.name 
                             ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-primary-500/20' 
                             : 'bg-white/80 backdrop-blur-sm border border-neutral-200 hover:border-primary-200 text-neutral-600 hover:text-primary-600'} 
                           hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 
                           transform hover:-translate-y-0.5`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="ml-1 text-xs opacity-80">({category.count})</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/blogs">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 
                       text-white font-medium shadow-lg shadow-primary-500/20
                       hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300
                       relative overflow-hidden group"
            >
              <span className="relative z-10">View All Articles</span>
              <FiArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"
                initial={false}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
