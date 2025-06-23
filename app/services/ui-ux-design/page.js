'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function UIUXDesignPage() {
  const designServices = [
    {
      icon: "🔍",
      title: "User Research",
      description: "In-depth analysis of user behavior and needs to inform design decisions."
    },
    {
      icon: "📐",
      title: "Wireframing",
      description: "Structural blueprints that define the layout and functionality of your interface."
    },
    {
      icon: "🎨",
      title: "Visual Design",
      description: "Beautiful, modern interfaces that align with your brand identity."
    },
    {
      icon: "🖼️",
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts."
    }
  ];

  const designTools = [
    { name: "Figma", level: 95 },
    { name: "Adobe XD", level: 90 },
    { name: "Sketch", level: 85 },
    { name: "InVision", level: 88 },
    { name: "Principle", level: 82 },
    { name: "Framer", level: 80 }
  ];

  const designProcess = [
    {
      phase: "Research",
      description: "Understanding your users, business goals, and market landscape.",
      deliverables: ["User Personas", "Competitor Analysis", "Requirements Document"]
    },
    {
      phase: "Strategy",
      description: "Defining the design strategy and information architecture.",
      deliverables: ["Site Map", "User Journey", "Content Strategy"]
    },
    {
      phase: "Design",
      description: "Creating wireframes, visual designs, and interactive prototypes.",
      deliverables: ["Wireframes", "Visual Designs", "Interactive Prototypes"]
    },
    {
      phase: "Testing",
      description: "Validating designs through user testing and iteration.",
      deliverables: ["Usability Testing", "Design Refinements", "Final Assets"]
    }
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Mobile App",
      category: "Mobile UI/UX",
      image: "/assets/hero.svg",
      description: "Complete redesign of shopping experience with 40% increase in conversions."
    },
    {
      title: "SaaS Dashboard",
      category: "Web UI/UX", 
      image: "/assets/experience.svg",
      description: "Complex data visualization made simple and intuitive for business users."
    },
    {
      title: "Healthcare Platform",
      category: "Web UI/UX",
      image: "/assets/hero.svg",
      description: "Patient portal design focusing on accessibility and ease of use."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              UI/UX Design
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Creating intuitive, beautiful, and user-centered designs that enhance user 
              experience and drive business success through thoughtful design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-secondary-500 hover:to-primary-500 transition-all duration-300 shadow-lg"
              >
                Start Design Project
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View Design Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Design Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive design solutions from research to final implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Featured Design Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Examples of our design excellence across different industries and platforms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures every design decision is purposeful and user-focused.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {process.phase}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 text-sm leading-relaxed">
                  {process.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white text-sm">Deliverables:</h4>
                  <ul className="space-y-1">
                    {process.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Design Tools We Master
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We use industry-leading design tools and stay updated with the latest 
                design trends and methodologies to deliver exceptional results.
              </p>
              <div className="space-y-6">
                {designTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-white">{tool.name}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="/assets/hero.svg"
                  alt="UI/UX Design Tools"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
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
              Ready to Enhance Your User Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's create designs that not only look beautiful but also drive results for your business.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Design Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
