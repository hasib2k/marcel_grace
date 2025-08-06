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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
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
        {currentPosts.map((post) => (
          <article key={post.id} className="glass-card p-6 hover:scale-105 transition-all duration-300 group">
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
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === 1
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                page === currentPage
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Next
          </button>
        </div>
      )}
      
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
