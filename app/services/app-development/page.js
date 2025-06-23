'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AppDevelopmentPage() {
  const features = [
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "One codebase for iOS and Android with native performance."
    },
    {
      icon: "🚀",
      title: "Fast Development",
      description: "Rapid prototyping and deployment using modern frameworks."
    },
    {
      icon: "🔄",
      title: "Real-time Sync",
      description: "Live data synchronization across all devices and platforms."
    },
    {
      icon: "🛡️",
      title: "Secure",
      description: "Enterprise-grade security and data protection measures."
    }
  ];

  const platforms = [
    { name: "React Native", level: 92 },
    { name: "Flutter", level: 88 },
    { name: "iOS (Swift)", level: 85 },
    { name: "Android (Kotlin)", level: 87 },
    { name: "Firebase", level: 90 },
    { name: "AWS Mobile", level: 82 }
  ];

  const appTypes = [
    {
      title: "E-Commerce Apps",
      description: "Full-featured shopping apps with payment integration",
      icon: "🛒",
      features: ["Product Catalog", "Payment Gateway", "Order Tracking", "Push Notifications"]
    },
    {
      title: "Social Media Apps", 
      description: "Engaging social platforms with real-time features",
      icon: "👥",
      features: ["User Profiles", "Chat System", "Media Sharing", "Live Streaming"]
    },
    {
      title: "Business Apps",
      description: "Productivity and business management applications",
      icon: "💼",
      features: ["Dashboard Analytics", "Team Collaboration", "Document Management", "CRM Integration"]
    },
    {
      title: "Healthcare Apps",
      description: "Medical and wellness applications with compliance",
      icon: "🏥",
      features: ["Patient Records", "Appointment Booking", "Telemedicine", "Health Tracking"]
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
              App Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              Native and cross-platform mobile applications that deliver exceptional user 
              experiences and drive engagement across iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-secondary-500 hover:to-primary-500 transition-all duration-300 shadow-lg"
              >
                Start Your App
              </motion.a>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                View App Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Why Choose Our App Development?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We create mobile applications that users love and businesses rely on.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From simple utilities to complex enterprise solutions, we build apps for every need.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{app.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {app.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {app.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Development Platforms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We use the latest technologies and frameworks to build high-performance 
                mobile applications that work seamlessly across all devices.
              </p>
              <div className="space-y-6">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800 dark:text-white">{platform.name}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">{platform.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${platform.level}%` }}
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
                  src="/assets/experience.svg"
                  alt="App Development Platforms"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Our App Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined process that ensures your app is delivered on time and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Planning",
                description: "Define app requirements, target audience, and technical specifications."
              },
              {
                step: "02", 
                title: "Design & Prototype",
                description: "Create wireframes, UI designs, and interactive prototypes."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build the app with rigorous testing at every stage."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy to app stores and provide ongoing maintenance."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
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
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your idea into a powerful mobile application that users will love.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your App Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
