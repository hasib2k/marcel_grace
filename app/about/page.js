'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marcel Grace",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in tech innovation"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Technical architect specializing in scalable solutions"
    },
    {
      name: "David Chen",
      role: "Lead Developer",
      description: "Full-stack expert with passion for clean code"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      description: "UX/UI specialist creating intuitive experiences"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver future-ready solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs."
    },
    {
      icon: "💎",
      title: "Quality",
      description: "We maintain the highest standards in every project we undertake."
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description: "We deliver projects on time without compromising on quality."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text text-transparent">
              About Marcel Grace
            </h1>
            <p className="text-xl text-deep-primary leading-relaxed mb-12 font-medium">
              We are a passionate team of innovators, developers, and designers committed to 
              transforming ideas into powerful digital experiences that drive business growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="deep-glass-card p-6 rounded-xl text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-deep-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-deep-secondary font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-deep-primary">
                Our Story
              </h2>
              <div className="space-y-6 text-deep-secondary leading-relaxed">
                <p>
                  Founded in 2019, Marcel Grace Infotech emerged from a simple vision: 
                  to bridge the gap between innovative technology and practical business solutions. 
                  What started as a small team of passionate developers has grown into a 
                  full-service digital agency.
                </p>
                <p>
                  We believe that technology should empower, not complicate. Every project 
                  we undertake is driven by this philosophy, ensuring that our solutions 
                  are not only cutting-edge but also user-friendly and scalable.
                </p>
                <p>
                  Today, we're proud to have helped over 50 businesses transform their 
                  digital presence and achieve their goals through innovative web and 
                  mobile applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-deep-primary max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="deep-glass-card p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-deep-primary">
                  {value.title}
                </h3>
                <p className="text-deep-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind Marcel Grace Infotech, dedicated to bringing your vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help transform your ideas into powerful digital solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
