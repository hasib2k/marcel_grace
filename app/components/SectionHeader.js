'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center w-full max-w-[800px] mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        
        <h2 className="heading-2 !leading-tight mb-4">
          <span className="gradient-text font-bold">
            {title}
          </span>
        </h2>
        
        <p className="text-lg text-primary-700 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      </motion.div>
    </div>
  );
}
