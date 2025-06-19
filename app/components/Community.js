'use client';

import CommunityCard from "./CommunityCard";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

export default function Community() {
  return (
    <section className="relative overflow-hidden pt-0 pb-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/50 to-secondary-50/50" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <motion.div 
        className="relative container mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader
          title="Partner with us for future-focused tech excellence"
          subtitle="Transforming businesses through innovative technology solutions"
        />
        <div className="mt-16">
          <CommunityCard />
        </div>
      </motion.div>
    </section>
  );
}
