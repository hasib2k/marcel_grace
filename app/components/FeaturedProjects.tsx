'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built for a retail chain with 50+ stores. Features include inventory management, multi-vendor support, advanced analytics, payment gateway integration, and mobile-responsive design. The platform processes over 10,000 transactions daily.',
    codeUrl: 'https://github.com/marcelgrace/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.marcelgrace.com/',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'A complete healthcare management solution for hospitals and clinics. Includes patient records, appointment scheduling, billing, prescription management, and telemedicine capabilities. Serves over 25 healthcare facilities with 99.9% uptime.',
    codeUrl: 'https://github.com/marcelgrace/healthcare-system',
    liveUrl: 'https://healthcare-demo.marcelgrace.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
    gradient: 'from-emerald-400 to-cyan-400',
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial analytics and reporting platform for investment firms. Features advanced charting, portfolio management, risk assessment, and automated reporting. Handles millions of data points with sub-second response times.',
    codeUrl: 'https://github.com/marcelgrace/financial-dashboard',
    liveUrl: 'https://finance-demo.marcelgrace.com/',
    technologies: ['Vue.js', 'Python', 'Redis', 'Chart.js', 'Azure'],
    gradient: 'from-emerald-400 to-cyan-400',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/6 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-accent-200/8 via-secondary-300/6 to-accent-200/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="liquid-glass p-8 lg:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-base lg:text-lg xl:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
              Showcasing our latest software solutions that have transformed businesses 
              and delivered exceptional results for our clients across various industries.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="liquid-glass p-8 hover:scale-[1.02] transition-all duration-500 rounded-3xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <FiExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-deep-secondary group-hover:text-secondary-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-deep-primary mb-6 leading-relaxed font-semibold text-base lg:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="deep-glass-card px-3 py-2 rounded-xl text-sm font-semibold text-deep-secondary hover:text-secondary-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href={project.codeUrl}
                      target="_blank"
                      className="deep-glass-card px-6 py-3 rounded-xl font-semibold text-deep-secondary hover:text-secondary-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-transparent hover:border-secondary/30"
                    >
                      <FiGithub size={16} />
                      Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 flex items-center gap-2"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </Link>
                  </div>
                </div>
                
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-full h-48 deep-glass-card rounded-2xl flex items-center justify-center relative overflow-hidden group/preview">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-50"></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <FiExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-deep-secondary font-semibold text-sm">Project Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-400/25 text-lg"
          >
            <FiArrowRight size={20} />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
