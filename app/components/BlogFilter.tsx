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
      <div className="flex flex-wrap justify-start gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`font-body px-3 py-1.5 border text-xs font-semibold tracking-wide rounded-lg shadow-md ${
              category === selectedCategory
                ? 'border-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 text-white'
                : 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 text-[#3C3D37]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentPosts.map((post) => (
          <article key={post.id} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-4 flex flex-col gap-2 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg">
                {post.category}
              </span>
              <span className="text-[#3C3D37] text-xs">{post.readTime}</span>
            </div>
            <h2 className="font-heading text-sm md:text-base font-semibold text-[#181C14] mb-1 leading-tight">{post.title}</h2>
            <p className="font-body text-xs md:text-sm text-[#3C3D37] mb-2 leading-relaxed">{post.excerpt}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-[#3C3D37] text-xs">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-body font-medium text-xs text-[#697565] border-b border-[#697565]"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-start items-center gap-1 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1.5 border text-xs font-medium rounded-lg ${
              currentPage === 1
                ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'border-gray-200 text-[#697565] bg-white shadow-md'
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1.5 border text-xs font-medium rounded-lg ${
                page === currentPage
                  ? 'border-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 text-white'
                  : 'border-gray-200 bg-white text-[#3C3D37] shadow-md'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1.5 border text-xs font-medium rounded-lg ${
              currentPage === totalPages
                ? 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                : 'border-gray-200 text-[#697565] bg-white shadow-md'
            }`}
          >
            Next
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="font-body text-[#181C14] text-xs md:text-sm">
            No blog posts found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
