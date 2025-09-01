'use client';

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
  <section id="about" className="py-10 bg-white rounded-xl shadow-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side - Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative h-80 md:h-96 w-full bg-white overflow-hidden">
              <Image
                src="/assets/banner_2.jpg"
                alt="Marcel Grace Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </div>
          {/* Right side - Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-xl font-extrabold bg-gradient-to-r from-[#697565] to-[#ECDFCC] bg-clip-text text-transparent mb-1 text-left">About Marcel Grace</h2>
            <div className="space-y-2 text-[#3C3D37] leading-relaxed">
              <p className="text-xs md:text-sm">
                Marcel Grace Infotech is a leading software development company dedicated to transforming businesses through innovative technology solutions. With over 5 years of experience, we specialize in creating custom software that drives growth and efficiency.
              </p>
              <p className="text-xs md:text-sm">
                Our team of expert developers, designers, and consultants work closely with clients to understand their unique challenges and deliver solutions that exceed expectations. We combine technical expertise with business insight to create impactful digital experiences.
              </p>
              <p className="text-xs md:text-sm">
                From startups to enterprise-level organizations, we've helped companies across various industries leverage technology to achieve their goals and stay competitive in today's digital landscape.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xs md:text-base font-semibold text-[#181C14] mb-1">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#F3EDE2] text-[#3C3D37] text-sm font-medium rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Link href="/about" className="px-4 py-2 text-[#697565] bg-white font-semibold text-sm rounded shadow-none">
                Learn More
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-[#697565] text-white font-semibold text-sm rounded shadow-none">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
