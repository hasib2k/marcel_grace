'use client';

import { motion } from 'framer-motion';
import SingleBlog from "@/app/SingleBlog";
import { blogs } from '@/app/data/blogs.js';
import { FiSearch, FiFilter } from 'react-icons/fi';
import Link from 'next/link';

const categories = [
  'All', 'Technology', 'Design', 'Business', 'Innovation', 'Development'
];

export default function AllBlogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100">
      {/* Header Section */}
      <div className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Our Latest Articles
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
              Explore our collection of insights, trends, and innovative solutions shaping the digital landscape
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
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
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200 
                           hover:border-primary-200 text-neutral-600 hover:text-primary-600 
                           font-medium shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
