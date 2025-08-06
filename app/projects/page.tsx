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
    title: 'Enterprise E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built for retail chains with multi-store management, inventory tracking, payment gateway integration, and advanced analytics. The platform handles thousands of daily transactions with 99.9% uptime.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
    codeUrl: 'https://github.com/marcelgrace/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.marcelgrace.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'A complete healthcare management solution for hospitals and clinics. Features patient records, appointment scheduling, billing, prescription management, and telemedicine capabilities serving 25+ healthcare facilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker', 'JWT'],
    codeUrl: 'https://github.com/marcelgrace/healthcare-system',
    liveUrl: 'https://healthcare-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial analytics platform for investment firms. Features advanced charting, portfolio management, risk assessment, and automated reporting with sub-second response times for millions of data points.',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'Azure', 'WebSockets'],
    codeUrl: 'https://github.com/marcelgrace/financial-dashboard',
    liveUrl: 'https://finance-demo.marcelgrace.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Modern LMS platform for educational institutions with course management, student tracking, assessments, virtual classrooms, and progress analytics.',
    technologies: ['React', 'Express.js', 'MySQL', 'WebRTC', 'AWS S3'],
    codeUrl: 'https://github.com/marcelgrace/lms-platform',
    liveUrl: 'https://lms-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'Real Estate CRM',
    description: 'Comprehensive CRM solution for real estate agencies with property listings, client management, deal tracking, automated follow-ups, and market analytics.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Google Maps API'],
    codeUrl: 'https://github.com/marcelgrace/real-estate-crm',
    liveUrl: 'https://realestate-demo.marcelgrace.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    description: 'Complete restaurant management solution with POS integration, inventory management, staff scheduling, and customer loyalty programs.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
    codeUrl: 'https://github.com/marcelgrace/restaurant-system',
    liveUrl: 'https://restaurant-demo.marcelgrace.com/',
    featured: false,
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-dark-950 pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 text-center">
          Our Projects
        </h1>
        
        <p className="text-gray-400 text-base sm:text-lg text-center mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          Explore our comprehensive portfolio of software development projects. Each solution 
          demonstrates our expertise in modern technologies and commitment to delivering exceptional results.
        </p>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Featured Projects</h2>
          <div className="space-y-8">
            {projects
              .filter(project => project.featured)
              .map((project) => (
                <div key={project.id} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="skill-tag text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Link
                          href={project.codeUrl}
                          target="_blank"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <FiGithub size={16} />
                          Code
                        </Link>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="btn-primary flex items-center gap-2"
                        >
                          <FiExternalLink size={16} />
                          Live Demo
                        </Link>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex items-center justify-center">
                      <div className="w-full h-48 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Project Preview</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project) => (
                <div key={project.id} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-full h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Project Preview</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="skill-tag text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      className="btn-secondary flex items-center gap-1 text-sm flex-1 justify-center"
                    >
                      <FiGithub size={14} />
                      Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="btn-primary flex items-center gap-1 text-sm flex-1 justify-center"
                    >
                      <FiExternalLink size={14} />
                      Live
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
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiGithub size={20} />
            View All Projects on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
