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
    description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
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
      'Bachelor\'s degree in Design or related field',
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
    description: 'We need a DevOps Engineer to help us scale our infrastructure and improve our deployment processes.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
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
      'Bachelor\'s degree in Computer Science or related field',
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
    title: 'Competitive Salary',
    description: 'We offer competitive salaries based on experience and market standards.',
  },
  {
  icon: <FiClock size={24} className="text-[#697565]" />,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible working hours and remote work options.',
  },
  {
  icon: <FiUsers size={24} className="text-[#697565]" />,
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities and career development programs.',
  },
  {
  icon: <FiMapPin size={24} className="text-[#697565]" />,
    title: 'Remote Work',
    description: 'Work from anywhere with our fully remote-friendly culture.',
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-white pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-xs sm:text-sm md:text-lg font-bold text-black mb-4 sm:mb-6 md:mb-8 text-center">
          Careers
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-black text-center mb-6 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Join Marcel Grace Infotech and be part of a passionate team building innovative software solutions for global clients.
        </p>
        {/* Open Positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {openPositions.map((position) => (
            <div key={position.id} className="bg-white border border-[#ECDFCC] p-2 sm:p-3 md:p-4 flex flex-col gap-2">
              <h2 className="text-xs sm:text-sm md:text-base font-bold text-[#181C14] mb-1">{position.title}</h2>
              <div className="flex flex-wrap gap-2 text-xs text-[#3C3D37] mb-1">
                <span className="flex items-center gap-1"><FiUsers className="text-[#697565]" size={14} /> {position.department}</span>
                <span className="flex items-center gap-1"><FiMapPin className="text-[#697565]" size={14} /> {position.location}</span>
                <span className="flex items-center gap-1"><FiClock className="text-[#697565]" size={14} /> {position.type}</span>
                <span className="flex items-center gap-1"><FiDollarSign className="text-[#697565]" size={14} /> {position.salary}</span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-[#3C3D37] mb-1">{position.description}</p>
              <div>
                <span className="font-semibold text-xs sm:text-sm md:text-base text-[#181C14]">Requirements:</span>
                <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-[#3C3D37] ml-4">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-xs sm:text-sm md:text-base text-[#181C14]">Responsibilities:</span>
                <ul className="list-disc list-inside text-xs sm:text-sm md:text-base text-[#3C3D37] ml-4">
                  {position.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Link href="/contact" className="inline-block px-3 py-1 text-xs font-bold bg-[#697565] text-white border border-[#697565] rounded-none">Apply Now</Link>
              </div>
            </div>
          ))}
        </div>
        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-xs md:text-base font-bold text-black text-center mb-12">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-xs md:text-sm mx-auto mb-4">
                01
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-2">
                Apply Online
              </h3>
              <p className="text-xs md:text-sm text-gray-700">
                Submit your resume and cover letter through our application form.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-xs md:text-sm mx-auto mb-4">
                02
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-2">
                Initial Review
              </h3>
              <p className="text-xs md:text-sm text-gray-700">
                Our HR team will review your application and contact you within 3-5 days.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-xs md:text-sm mx-auto mb-4">
                03
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-2">
                Technical Interview
              </h3>
              <p className="text-xs md:text-sm text-gray-700">
                Technical assessment and interview with our engineering team.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-xs md:text-sm mx-auto mb-4">
                04
              </div>
              <h3 className="text-xs md:text-sm font-semibold text-black mb-2">
                Final Decision
              </h3>
              <p className="text-xs md:text-sm text-gray-700">
                Final interview and job offer for successful candidates.
              </p>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="bg-white border border-gray-200 p-8 text-center">
          <h2 className="text-xs md:text-base font-bold text-black mb-4">
            Don't See a Perfect Match?
          </h2>
          <p className="text-xs md:text-sm text-gray-700 mb-6">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="mailto:info.marcelgrace@gmail.com"
            className="inline-flex items-center gap-2 bg-[#697565] text-white px-4 py-2 font-semibold text-xs md:text-sm"
          >
            Send Your Resume
          </Link>
        </div>
      </div>
    </main>
  );
}
