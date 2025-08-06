'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface BlogFilterProps {
  blogPosts: BlogPost[];
  categories: string[];
}

export default function BlogFilter({ blogPosts, categories }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              category === selectedCategory
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Blog Image</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="skill-tag text-xs">{post.category}</span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-emerald-400 hover:text-cyan-400 transition-colors font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No blog posts found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
