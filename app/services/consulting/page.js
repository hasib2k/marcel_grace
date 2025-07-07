'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ConsultingPage() {
  const consultingServices = [
    {
      icon: "🎯",
      title: "Technology Strategy",
      description: "Develop comprehensive technology roadmaps aligned with your business objectives."
    },
    {
      icon: "🏗️",
      title: "Architecture Review",
      description: "Assess and optimize your current technology stack and system architecture."
    },
    {
      icon: "⚡",
      title: "Process Optimization",
      description: "Streamline workflows and improve operational efficiency through technology."
    },
    {
      icon: "👥",
      title: "Team Training",
      description: "Upskill your team with the latest technologies and best practices."
    }
  ];

  const expertiseAreas = [
    {
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation initiatives",
      icon: "🔄",
      benefits: ["Modernize Legacy Systems", "Cloud Migration", "Process Automation", "Data Analytics"]
    },
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape",
      icon: "🔍",
      benefits: ["System Audits", "Performance Analysis", "Security Review", "Scalability Planning"]
    },
    {
      title: "Strategic Planning",
      description: "Long-term technology planning and roadmap development",
      icon: "📋",
      benefits: ["Technology Roadmap", "Budget Planning", "Risk Assessment", "Vendor Selection"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on support during technology implementation projects",
      icon: "🛠️",
      benefits: ["Project Management", "Change Management", "Quality Assurance", "Go-Live Support"]
    }
  ];

  const industries = [
    { name: "Healthcare", experience: "5+ years" },
    { name: "FinTech", experience: "4+ years" },
    { name: "E-Commerce", experience: "6+ years" },
    { name: "Education", experience: "3+ years" },
    { name: "Manufacturing", experience: "4+ years" },
    { name: "Real Estate", experience: "3+ years" }
  ];

  const consultingProcess = [
    {
      step: "Assessment",
      description: "Comprehensive analysis of your current technology ecosystem and business needs.",
      duration: "1-2 weeks"
    },
    {
      step: "Strategy Development",
      description: "Create tailored recommendations and strategic roadmap for your organization.",
      duration: "2-3 weeks"
    },
    {
      step: "Implementation Planning",
      description: "Detailed planning for executing the recommended technology initiatives.",
      duration: "1-2 weeks"
    },
    {
      step: "Execution Support",
      description: "Ongoing guidance and support throughout the implementation process.",
      duration: "Ongoing"
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
              Technology Consulting
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Strategic technology consulting to guide your digital transformation journey 
              and maximize the value of your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-secondary-500 hover:to-primary-500 transition-all duration-300 shadow-lg"
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                href="#expertise"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Our Expertise
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
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting services to help you make informed technology decisions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingServices.map((service, index) => (
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

      {/* Expertise Areas Section */}
      <section id="expertise" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Expertise Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise across multiple domains to provide comprehensive consulting solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{area.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {area.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {area.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Industry Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We bring deep industry knowledge and experience across various sectors, 
                ensuring our recommendations are practical and industry-specific.
              </p>
              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-800 dark:text-white text-lg">
                      {industry.name}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">
                      {industry.experience}
                    </span>
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
                <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-secondary-400 to-accent-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Consulting Services</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A structured approach that delivers actionable insights and measurable results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {process.step}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                  {process.description}
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                  Duration: {process.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the engagement model that best fits your needs and budget.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                model: "Hourly Consulting",
                price: "$199/hour",
                description: "Perfect for short-term advice and specific questions",
                features: ["Expert consultation", "Flexible scheduling", "No minimum commitment", "Email support"]
              },
              {
                model: "Project-Based",
                price: "Custom Quote",
                description: "Comprehensive consulting for specific initiatives",
                features: ["Detailed project scope", "Fixed deliverables", "Timeline commitment", "Regular updates"],
                popular: true
              },
              {
                model: "Retainer Agreement",
                price: "Starting $5,000/month",
                description: "Ongoing strategic guidance and support",
                features: ["Dedicated consultant", "Priority support", "Monthly strategy sessions", "Quarterly reviews"]
              }
            ].map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                  model.popular 
                    ? 'border-primary-500 scale-105' 
                    : 'border-white/20'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {model.model}
                  </h3>
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {model.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {model.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    model.popular
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-secondary-500 hover:to-primary-500'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Schedule a consultation to discuss how we can help you achieve your technology goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Schedule Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
