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
    icon: <FiDollarSign size={24} />,
    title: 'Competitive Salary',
    description: 'We offer competitive salaries based on experience and market standards.',
  },
  {
    icon: <FiClock size={24} />,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible working hours and remote work options.',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities and career development programs.',
  },
  {
    icon: <FiMapPin size={24} />,
    title: 'Remote Work',
    description: 'Work from anywhere with our fully remote-friendly culture.',
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-black pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Build the future of software development with us. We're looking for talented 
            individuals who are passionate about creating innovative solutions.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/20">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-cyan-400/5 group-hover:to-emerald-400/10 transition-all duration-500 rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative p-4 sm:p-6 lg:p-8">
                  {/* Header Section */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-all duration-300 leading-tight">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                          <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 text-white shadow-lg">
                            {position.department}
                          </span>
                          <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/20">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      
                      {/* Salary Badge - Responsive */}
                      <div className="bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center min-w-[100px] sm:min-w-[120px] self-start">
                        <div className="text-emerald-400 font-bold text-base sm:text-lg">{position.salary}</div>
                        <div className="text-gray-400 text-xs">per month</div>
                      </div>
                    </div>
                    
                    {/* Quick Info - Mobile Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiMapPin size={14} className="text-emerald-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm truncate">{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FiUsers size={14} className="text-emerald-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300 text-sm sm:text-base">
                    {position.description}
                  </p>
                  
                  {/* Requirements & Responsibilities - Mobile Optimized */}
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></span>
                        Requirements
                      </h4>
                      <div className="space-y-1 sm:space-y-2">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <div key={index} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{req}</span>
                          </div>
                        ))}
                        {position.requirements.length > 3 && (
                          <div className="text-gray-400 text-xs">
                            +{position.requirements.length - 3} more requirements
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></span>
                        Key Responsibilities
                      </h4>
                      <div className="space-y-1 sm:space-y-2">
                        {position.responsibilities.slice(0, 3).map((resp, index) => (
                          <div key={index} className="text-gray-300 text-xs sm:text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </div>
                        ))}
                        {position.responsibilities.length > 3 && (
                          <div className="text-gray-400 text-xs">
                            +{position.responsibilities.length - 3} more responsibilities
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons - Mobile Responsive */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link
                      href={`mailto:info.marcelgrce@gmail.com?subject=Application for ${position.title}`}
                      className="flex-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/40 text-center text-sm sm:text-base"
                    >
                      Apply Now
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-emerald-400/50 transition-all duration-300 text-center text-sm sm:text-base"
                    >
                      Learn More
                    </Link>
                  </div>
                  
                  {/* Decorative bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Application Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Application Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Apply Online
              </h3>
              <p className="text-gray-400 text-sm">
                Submit your resume and cover letter through our application form.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Initial Review
              </h3>
              <p className="text-gray-400 text-sm">
                Our HR team will review your application and contact you within 3-5 days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Technical Interview
              </h3>
              <p className="text-gray-400 text-sm">
                Technical assessment and interview with our engineering team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Final Decision
              </h3>
              <p className="text-gray-400 text-sm">
                Final interview and job offer for successful candidates.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Don't See a Perfect Match?
          </h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          
          <Link
            href="mailto:info.marcelgrace@gmail.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            Send Your Resume
          </Link>
        </div>
      </div>
    </main>
  );
}
