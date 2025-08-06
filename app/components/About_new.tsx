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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full border-2 border-gray-700 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-lg group-hover:shadow-emerald-400/20">
              <Image
                src="/assets/banner.JPEG"
                alt="Marcel Grace Team"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 lg:mb-6">
              About Marcel Grace
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Marcel Grace Infotech is a leading software development company dedicated to transforming 
                businesses through innovative technology solutions. With over 5 years of experience, 
                we specialize in creating custom software that drives growth and efficiency.
              </p>
              
              <p className="text-sm sm:text-base">
                Our team of expert developers, designers, and consultants work closely with clients 
                to understand their unique challenges and deliver solutions that exceed expectations. 
                We combine technical expertise with business insight to create impactful digital experiences.
              </p>
              
              <p className="text-sm sm:text-base">
                From startups to enterprise-level organizations, we've helped companies across various 
                industries leverage technology to achieve their goals and stay competitive in today's 
                digital landscape.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-7 lg:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Our Expertise</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-7 lg:mt-8">
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
