'use client';

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="deep-glass-card p-3 rounded-full bg-gradient-to-r from-secondary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-110 group relative overflow-hidden border border-secondary/20 hover:border-secondary/40"
          aria-label="Scroll to top"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-sm" />
          
          {/* Icon with animation */}
          <FiArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
          
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full" />
        </button>
      )}
    </div>
  );
}
