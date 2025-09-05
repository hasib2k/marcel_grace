import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiMapPin, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Careers - Marcel Grace Infotech',
  description: 'Join Marcel Grace Infotech - Explore career opportunities in software development',
};

const openPositions = [
  {
    id: 1,
  title: 'Senior Full Stack Developer',
  department: 'Engineering',
  location: 'Remote / Dhaka, Bangladesh',
  type: 'Full-time',
  experience: '3-5 years',
  salary: '৳40,000 - ৳60,000',
  description: 'We are looking for an experienced full stack developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '3+ years of experience in full-stack development',
      'Proficiency in React, Node.js, and databases',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong problem-solving and communication skills',
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Mentor junior developers',
    ],
  },
  {
    id: 2,
  title: 'UI/UX Designer',
  department: 'Design',
  location: 'Remote / Dhaka, Bangladesh',
  type: 'Full-time',
  experience: '2-4 years',
  salary: '৳30,000 - ৳45,000',
  description: 'Join our design team to create beautiful and intuitive user experiences for our clients\' digital products.',
    requirements: [
      "Bachelor's degree in Design or related field",
      '2+ years of experience in UI/UX design',
      'Proficiency in Figma, Adobe Creative Suite',
      'Understanding of user-centered design principles',
      'Portfolio demonstrating design skills',
    ],
    responsibilities: [
      'Create wireframes and prototypes',
      'Design user interfaces for web and mobile',
      'Conduct user research and testing',
      'Collaborate with development teams',
      'Maintain design systems',
    ],
  },
  {
    id: 3,
  title: 'DevOps Engineer',
  department: 'Infrastructure',
  location: 'Remote / Dhaka, Bangladesh',
  type: 'Full-time',
  experience: '2-4 years',
  salary: '৳35,000 - ৳50,000',
  description: 'We need a DevOps engineer to help us scale our infrastructure and improve our deployment processes.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '2+ years of experience in DevOps',
      'Experience with AWS, Docker, Kubernetes',
      'Knowledge of CI/CD pipelines',
      'Scripting skills in Python or Bash',
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Set up and maintain CI/CD pipelines',
      'Monitor system performance',
      'Implement security best practices',
      'Automate deployment processes',
    ],
  },
  {
    id: 4,
  title: 'QA Engineer',
  department: 'Quality Assurance',
  location: 'Remote / Dhaka, Bangladesh',
  type: 'Full-time',
  experience: '1-3 years',
  salary: '৳30,000 - ৳50,000',
  description: 'Join our QA team to ensure the highest quality standards for our software products.',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '1+ years of experience in software testing',
      'Knowledge of manual and automated testing',
      'Experience with testing frameworks',
      'Attention to detail and analytical skills',
    ],
    responsibilities: [
      'Create and execute test cases',
      'Perform manual and automated testing',
      'Report and track bugs',
      'Work with development teams',
      'Ensure quality standards',
    ],
  },
];

const benefits = [
  {
  icon: <FiDollarSign size={24} className="text-[#697565]" />,
  title: 'Competitive salary',
  description: 'We offer competitive salaries based on experience and market standards.',
  },
  {
  icon: <FiClock size={24} className="text-[#697565]" />,
  title: 'Flexible hours',
  description: 'Work-life balance with flexible working hours and remote work options.',
  },
  {
  icon: <FiUsers size={24} className="text-[#697565]" />,
  title: 'Learning & growth',
  description: 'Continuous learning opportunities and career development programs.',
  },
  {
  icon: <FiMapPin size={24} className="text-[#697565]" />,
  title: 'Remote work',
  description: 'Work from anywhere with our fully remote-friendly culture.',
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen relative bg-white overflow-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* SVG Line Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="line-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#697565" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#line-grid)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4 sm:py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 md:mb-4 tracking-wider uppercase">
              Join our team
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center mb-4 sm:mb-6 max-w-3xl mx-auto tracking-wide uppercase">
              Join Marcel Grace Infotech and be part of a passionate team building innovative software solutions for global clients.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pb-4 sm:pb-6 md:pb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
          {/* Open Positions */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-6 tracking-wider text-center uppercase">
              Open positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col gap-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-black text-black mb-2 tracking-wider uppercase">{position.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-3">
                    <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg"><FiUsers className="text-gray-600" size={14} /> {position.department}</span>
                    <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg"><FiClock className="text-gray-600" size={14} /> {position.type}</span>
                    <span className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg"><FiDollarSign className="text-gray-600" size={14} /> {position.salary}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 tracking-wide">{position.description}</p>
                  <div className="mb-3">
                    <span className="font-black text-xs sm:text-sm text-black tracking-wider uppercase">Requirements:</span>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 ml-3 mt-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="tracking-wide">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="font-black text-xs sm:text-sm text-black tracking-wider uppercase">Responsibilities:</span>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 ml-3 mt-2">
                      {position.responsibilities.map((res, idx) => (
                        <li key={idx} className="tracking-wide">{res}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link href="/contact" className="inline-block px-4 py-2 text-xs font-black bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl shadow-lg tracking-wider uppercase">
                      Apply now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-6 tracking-wider text-center uppercase">
              Why join us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-4 text-center">
                  <div className="flex justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-black text-black mb-2 tracking-wider uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-700 tracking-wide">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-6 tracking-wider text-center uppercase">
              Application process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-3 shadow-lg">
                  01
                </div>
                <h3 className="text-sm font-black text-black mb-2 tracking-wider uppercase">
                  Apply online
                </h3>
                <p className="text-xs text-gray-700 tracking-wide">
                  Submit your resume and cover letter through our application form.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-3 shadow-lg">
                  02
                </div>
                <h3 className="text-sm font-black text-black mb-2 tracking-wider uppercase">
                  Initial review
                </h3>
                <p className="text-xs text-gray-700 tracking-wide">
                  Our HR team will review your application and contact you within 3-5 days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-3 shadow-lg">
                  03
                </div>
                <h3 className="text-sm font-black text-black mb-2 tracking-wider uppercase">
                  Technical interview
                </h3>
                <p className="text-xs text-gray-700 tracking-wide">
                  Technical assessment and interview with our engineering team.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-3 shadow-lg">
                  04
                </div>
                <h3 className="text-sm font-black text-black mb-2 tracking-wider uppercase">
                  Final decision
                </h3>
                <p className="text-xs text-gray-700 tracking-wide">
                  Final interview and job offer for successful candidates.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-3 tracking-wider uppercase">
              Don't see a perfect match?
            </h2>
            <p className="text-sm text-gray-700 mb-4 tracking-wide">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              href="mailto:info.marcelgrace@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 font-black text-sm rounded-xl shadow-lg tracking-wider uppercase"
            >
              Send your resume
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
