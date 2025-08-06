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
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              category === selectedCategory
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700 hover:border-emerald-400/30'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {currentPosts.map((post) => (
          <article key={post.id} className="group bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-400/30">
                {post.category}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm">{post.readTime}</span>
            </div>
            
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors leading-tight">
              {post.title}
            </h2>
            
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs sm:text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-emerald-400 hover:text-cyan-400 font-medium text-sm sm:text-base group-hover:translate-x-1 transition-all duration-300"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 sm:mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
              currentPage === 1
                ? 'bg-gray-800/60 text-gray-500 cursor-not-allowed border border-gray-700'
                : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700 hover:border-emerald-400/30'
            }`}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                page === currentPage
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700 hover:border-emerald-400/30'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? 'bg-gray-800/60 text-gray-500 cursor-not-allowed border border-gray-700'
                : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700 hover:border-emerald-400/30'
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
