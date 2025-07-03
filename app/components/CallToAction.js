'use client';

import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function CallToAction() {
  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="deep-glass-card p-12 rounded-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-deep-primary mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Let's discuss how our innovative solutions can help you achieve your goals. 
            Get in touch with our team of experts today.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glassmorphic p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <FiMail className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-deep-primary mb-2">Email Us</h3>
              <p className="text-deep-secondary font-medium">info@marcelgrace.com</p>
            </div>
            <div className="glassmorphic p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <FiPhone className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-deep-primary mb-2">Call Us</h3>
              <p className="text-deep-secondary font-medium">+1 (555) 123-4567</p>
            </div>
            <div className="glassmorphic p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
              <FiMessageCircle className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-deep-primary mb-2">Live Chat</h3>
              <p className="text-deep-secondary font-medium">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
