'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const expertise = [
    'Web Development',
    'Mobile App Development', 
    'Custom Software Solutions',
    'Cloud Services',
    'DevOps & Automation',
    'UI/UX Design',
    'API Development',
    'Database Design',
    'Quality Assurance',
    'Digital Transformation'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-dark-950 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] glass-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
              {/* Your custom image */}
              <Image
                src="/assets/banner.jpeg"
                alt="Marcel Grace Infotech Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Optional overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              About Marcel Grace
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Marcel Grace Infotech is a leading software development company dedicated to transforming 
                businesses through innovative technology solutions. With over 5 years of experience, 
                we specialize in creating custom software that drives growth and efficiency.
              </p>
              
              <p>
                Our team of expert developers, designers, and consultants work closely with clients 
                to understand their unique challenges and deliver solutions that exceed expectations. 
                We combine technical expertise with business insight to create impactful digital experiences.
              </p>
              
              <p>
                From startups to enterprise-level organizations, we've helped companies across various 
                industries leverage technology to achieve their goals and stay competitive in today's 
                digital landscape.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
