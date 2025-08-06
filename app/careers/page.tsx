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
    salary: '$40,000 - $60,000',
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
    salary: '$30,000 - $45,000',
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
    salary: '$35,000 - $50,000',
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
    salary: '$25,000 - $35,000',
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
    <main className="min-h-screen bg-dark-950 pt-20 lg:pt-24">
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
          
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="glass-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {position.title}
                      </h3>
                      <span className="skill-tag text-sm">{position.department}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock size={16} />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUsers size={16} />
                        {position.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign size={16} />
                        {position.salary}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex flex-col justify-center">
                    <Link
                      href={`mailto:careers@marcelgrace.com?subject=Application for ${position.title}`}
                      className="btn-primary w-full mb-4"
                    >
                      Apply Now
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-secondary w-full"
                    >
                      Learn More
                    </Link>
                  </div>
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
            href="mailto:careers@marcelgrace.com"
            className="btn-primary inline-flex items-center gap-2"
          >
            Send Your Resume
          </Link>
        </div>
      </div>
    </main>
  );
}
