import { Metadata } from 'next';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Projects - Marcel Grace Infotech',
  description: 'Software development projects delivered by Marcel Grace Infotech',
};

const projects = [
  {
    id: 1,
    title: 'ENTERPRISE E-COMMERCE PLATFORM',
    description: 'A COMPREHENSIVE E-COMMERCE SOLUTION BUILT FOR RETAIL CHAINS WITH MULTI-STORE MANAGEMENT, INVENTORY TRACKING, PAYMENT GATEWAY INTEGRATION, AND ADVANCED ANALYTICS. THE PLATFORM HANDLES THOUSANDS OF DAILY TRANSACTIONS WITH 99.9% UPTIME.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
    codeUrl: 'https://github.com/marcelgrace/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.marcelgrace.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'HEALTHCARE MANAGEMENT SYSTEM',
    description: 'A COMPLETE HEALTHCARE MANAGEMENT SOLUTION FOR HOSPITALS AND CLINICS. FEATURES PATIENT RECORDS, APPOINTMENT SCHEDULING, BILLING, PRESCRIPTION MANAGEMENT, AND TELEMEDICINE CAPABILITIES SERVING 25+ HEALTHCARE FACILITIES.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'JWT'],
    codeUrl: 'https://github.com/marcelgrace/healthcare-system',
    liveUrl: 'https://healthcare-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'FINANCIAL ANALYTICS DASHBOARD',
    description: 'REAL-TIME FINANCIAL ANALYTICS PLATFORM FOR INVESTMENT FIRMS. FEATURES ADVANCED CHARTING, PORTFOLIO MANAGEMENT, RISK ASSESSMENT, AND AUTOMATED REPORTING WITH SUB-SECOND RESPONSE TIMES FOR MILLIONS OF DATA POINTS.',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'Azure', 'WebSockets'],
    codeUrl: 'https://github.com/marcelgrace/financial-dashboard',
    liveUrl: 'https://finance-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'LEARNING MANAGEMENT SYSTEM',
    description: 'MODERN LMS PLATFORM FOR EDUCATIONAL INSTITUTIONS WITH COURSE MANAGEMENT, STUDENT TRACKING, ASSESSMENTS, VIRTUAL CLASSROOMS, AND PROGRESS ANALYTICS.',
    technologies: ['React', 'Express.js', 'MySQL', 'WebRTC', 'AWS S3'],
    codeUrl: 'https://github.com/marcelgrace/lms-platform',
    liveUrl: 'https://lms-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'REAL ESTATE CRM',
    description: 'COMPREHENSIVE CRM SOLUTION FOR REAL ESTATE AGENCIES WITH PROPERTY LISTINGS, CLIENT MANAGEMENT, DEAL TRACKING, AUTOMATED FOLLOW-UPS, AND MARKET ANALYTICS.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Google Maps API'],
    codeUrl: 'https://github.com/marcelgrace/real-estate-crm',
    liveUrl: 'https://realestate-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'RESTAURANT MANAGEMENT SYSTEM',
    description: 'COMPLETE RESTAURANT MANAGEMENT SOLUTION WITH POS INTEGRATION, INVENTORY MANAGEMENT, STAFF SCHEDULING, AND CUSTOMER LOYALTY PROGRAMS.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
    codeUrl: 'https://github.com/marcelgrace/restaurant-system',
    liveUrl: 'https://restaurant-demo.marcelgrace.com/',
    featured: false,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* Tech Circuit Pattern Background - Same as Footer */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="tech-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#697565" strokeWidth="0.2"/>
              <circle cx="5" cy="5" r="1" fill="#697565"/>
              <circle cx="15" cy="15" r="1" fill="#697565"/>
              <line x1="5" y1="5" x2="15" y2="5" stroke="#697565" strokeWidth="0.2"/>
              <line x1="15" y1="5" x2="15" y2="15" stroke="#697565" strokeWidth="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#tech-circuit)"/>
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 md:mb-8 tracking-wider uppercase">
              PROJECT SHOWCASE
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center mb-6 sm:mb-10 md:mb-12 max-w-3xl mx-auto tracking-wide uppercase">
              SOFTWARE DEVELOPMENT PROJECTS DELIVERED BY MARCEL GRACE INFOTECH
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-lg p-6 sm:p-8 md:p-12">
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-8 tracking-wider uppercase text-center">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-8">
              {projects
                .filter(project => project.featured)
                .map((project) => (
                  <div key={project.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-4 tracking-wider">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed tracking-wide">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-gradient-to-r from-gray-100 to-gray-200 text-black px-3 py-1 rounded-lg text-xs font-semibold tracking-wide">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <Link
                            href={project.codeUrl}
                            target="_blank"
                            className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-2 rounded-xl font-black text-xs tracking-wider uppercase"
                          >
                            <FiGithub size={16} />
                            CODE
                          </Link>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-500 text-white px-4 py-2 rounded-xl font-black text-xs tracking-wider uppercase"
                          >
                            <FiExternalLink size={16} />
                            LIVE DEMO
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-8 tracking-wider uppercase text-center">
              ALL PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg p-6">
                  <h3 className="text-base sm:text-lg font-black text-black mb-3 tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed tracking-wide">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-gray-100 to-gray-200 text-black px-2 py-1 rounded text-xs font-semibold tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-2 rounded-lg font-black text-xs tracking-wider uppercase"
                    >
                      <FiGithub size={14} />
                      CODE
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-500 text-white px-3 py-2 rounded-lg font-black text-xs tracking-wider uppercase"
                    >
                      <FiExternalLink size={14} />
                      DEMO
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All on GitHub */}
          <div className="text-center mt-16">
            <Link
              href="https://github.com/marcelgrace"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-2xl font-black text-sm tracking-wider uppercase shadow-lg"
            >
              <FiGithub size={20} />
              VIEW ALL PROJECTS ON GITHUB
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
