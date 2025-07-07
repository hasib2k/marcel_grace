'use client';

import { blogs } from '@/app/data/blogs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';

export default function BlogPost({ params }) {
  const blog = blogs.find(b => b.id === params.id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl"
    >
      {/* Back button */}
      <Link href="/#blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 
                                 font-medium mb-8 group">
        <FiArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 
                              group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      {/* Header */}
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {blog.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 text-neutral-600"
        >
          <div className="flex items-center">
            <FiCalendar className="w-4 h-4 mr-2" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 mr-2" />
            <span>{blog.category}</span>
          </div>
          <div className="flex items-center">
            <FiCalendar className="w-4 h-4 mr-2" />
            <span>{blog.readTime}</span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="prose prose-lg max-w-none prose-headings:text-neutral-800 prose-p:text-neutral-600
                   prose-strong:text-neutral-800 prose-strong:font-semibold"
      >
        {blog.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>
    </motion.article>
  );
}
