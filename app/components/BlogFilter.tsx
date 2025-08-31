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
      <div className="flex flex-wrap justify-start gap-1 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-2 py-0.5 border text-xs font-medium transition-none ${
              category === selectedCategory
                ? 'border-[#697565] bg-[#697565] text-white'
                : 'border-[#ECDFCC] bg-white text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {currentPosts.map((post) => (
          <article key={post.id} className="bg-white border border-[#ECDFCC] p-3 flex flex-col gap-2">
            <div className="flex items-center gap-1 mb-1">
              <span className="inline-block px-2 py-0.5 text-xs font-medium border border-[#697565] bg-[#697565] text-white">
                {post.category}
              </span>
              <span className="text-[#3C3D37] text-xs">{post.readTime}</span>
            </div>
            <h2 className="text-xs md:text-base font-semibold text-[#181C14] mb-1 leading-tight">{post.title}</h2>
            <p className="text-xs md:text-sm text-[#3C3D37] mb-1 leading-relaxed">{post.excerpt}</p>
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
                className="font-medium text-xs text-[#697565] border-b border-[#697565] hover:opacity-80"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
  <div className="flex flex-wrap justify-start items-center gap-1 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-0.5 border text-xs font-medium transition-none ${
              currentPage === 1
                ? 'border-[#ECDFCC] text-[#ECDFCC] bg-white cursor-not-allowed'
                : 'border-[#697565] text-[#697565] bg-white'
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-2 py-0.5 border text-xs font-medium transition-none ${
                page === currentPage
                  ? 'border-[#697565] bg-[#697565] text-white'
                  : 'border-[#ECDFCC] bg-white text-black'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-2 py-0.5 border text-xs font-medium transition-none ${
              currentPage === totalPages
                ? 'border-[#ECDFCC] text-[#ECDFCC] bg-white cursor-not-allowed'
                : 'border-[#697565] text-[#697565] bg-white'
            }`}
          >
            Next
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#181C14] text-xs md:text-sm">
            No blog posts found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
