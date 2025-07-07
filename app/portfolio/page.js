'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with advanced features and modern design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/portfolio/ecommerce-platform",
      status: "Completed",
      client: "TechStore Inc."
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "App Development", 
      description: "Patient management system with appointment scheduling and telemedicine features.",
      technologies: ["React Native", "Firebase", "Express", "Socket.io"],
      link: "/portfolio/healthcare-app",
      status: "Completed",
      client: "MediCare Solutions"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "Modern dashboard for financial data visualization and analytics.",
      technologies: ["Figma", "React", "D3.js", "TypeScript"],
      link: "/portfolio/financial-dashboard",
      status: "Completed",
      client: "FinTech Pro"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "Web Development",
      description: "Complete restaurant management solution with POS and inventory management.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      link: "/portfolio/restaurant-system",
      status: "In Progress",
      client: "Gourmet Bistro"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "App Development",
      description: "Comprehensive fitness app with workout plans and progress tracking.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
      link: "/portfolio/fitness-app",
      status: "Completed",
      client: "FitLife Studio"
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "Web Development",
      description: "Online learning platform with video streaming and interactive features.",
      technologies: ["React", "AWS", "GraphQL", "PostgreSQL"],
      link: "/portfolio/educational-platform",
      status: "Completed",
      client: "EduTech Academy"
    }
  ];

  const categories = ["All", "Web Development", "App Development", "UI/UX Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-deep-primary leading-relaxed mb-12">
              Explore our collection of successful projects that showcase our expertise 
              in creating innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                    : 'glassmorphic text-deep-primary hover:text-deep-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="deep-glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    Client: {project.client}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={project.link}
                    className="inline-block w-full text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-secondary-500 hover:to-primary-500 transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Project Success Metrics
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our list of satisfied clients and let us bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>      </section>
    </div>
  );
}
