'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

export default function SingleBlog({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <motion.div 
        className="relative h-full cursor-pointer"
        whileHover={{ translateY: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
          {/* Image Container */}
          <div className="relative h-[240px] overflow-hidden rounded-t-2xl">
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <motion.span 
                className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary-600 text-sm font-medium
                         shadow-sm group-hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {blog.category}
              </motion.span>
            </div>
            
            {/* Image with hover effect */}
            <div className="relative h-full w-full">
              <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={`/assets/blog/${blog.image.split('/').pop()}`}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-neutral-600 mb-3">
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="w-4 h-4 mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-neutral-800 group-hover:text-primary-600 
                         transition-colors duration-300">{blog.title}</h3>

            {/* Excerpt */}
            <p className="text-neutral-600 mb-4 line-clamp-2">{blog.excerpt}</p>

            {/* Read More Link */}
            <div className="group/link inline-flex items-center text-primary-600 
                        font-medium group-hover:text-primary-700 transition-colors duration-300">
              Read More
              <FiArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 
                                   group-hover/link:translate-x-1" />
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                       bg-gradient-to-br from-primary-500/5 to-secondary-500/5
                       transition-opacity duration-300" />
        </div>
      </motion.div>
    </Link>
  );
}
