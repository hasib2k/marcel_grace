'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { communityData } from '@/app/data/communityData';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';

export default function CommunityDetail({ params }) {
  const community = communityData.find(c => c.id === params.id);

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <Link href="/#community" className="inline-flex items-center text-primary-600 hover:text-primary-700 
                                       font-medium mb-8 group">
          <FiArrowLeft className="mr-2 w-4 h-4 transition-transform duration-300 
                                group-hover:-translate-x-1" />
          Back to Community
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 
                           bg-clip-text text-transparent">
                {community.title}
              </h1>
              <p className="text-xl text-neutral-600 mb-8">
                {community.fullContent.subtitle}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {community.fullContent.overview}
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="relative aspect-square">
                <Image
                  src={community.image}
                  alt={community.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {community.fullContent.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300
                         border border-neutral-200/50 group"
              >
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 group-hover:text-primary-600 
                             transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {community.fullContent.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-lg text-neutral-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8 lg:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl text-neutral-700 mb-6 italic">
              "{community.fullContent.testimonial.quote}"
            </p>
            <div>
              <p className="font-semibold text-neutral-800">
                {community.fullContent.testimonial.author}
              </p>
              <p className="text-neutral-600">
                {community.fullContent.testimonial.position}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600
                       text-white font-medium shadow-lg shadow-primary-500/20
                       hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
