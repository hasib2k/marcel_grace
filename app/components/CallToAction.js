'use client';

import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white border border-white/20 text-sm font-medium">
            Ready to transform?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Digital Innovation
            </span>
          </h2>
          <p className="text-gray-100 text-lg">
            Join industry leaders who've already revolutionized their business processes.
            Book your free demo today and discover how we can elevate your digital presence.
          </p>
        </motion.div>

        {/* Right column - Call to action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Schedule Your Free Demo
              </h3>
              <p className="text-gray-200">
                • Custom solution walkthrough<br />
                • Live Q&A session<br />
                • ROI assessment<br />
                • Implementation roadmap
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button>
                  Get Started Now
                </Button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all duration-200"
                >
                  Watch Demo Video
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
