'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiGlobe, FiSmartphone, FiLayout, FiLightbulb } from 'react-icons/fi';

export default function ServicesPage() {
  const services = [
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      icon: FiSmartphone,
      description: "From concept to launch, we create high-performance mobile applications for Android and iOS. Whether you're a startup or an enterprise, we build intuitive, feature-rich apps that offer seamless user experiences and drive engagement.",
      expertise: [
        "Native & Cross-platform App Development",
        "API Integration & Backend Services", 
        "App Testing & Maintenance"
      ],
      gradient: "from-secondary-500 to-accent-600"
    },
    {
      id: "software-development",
      title: "Software Development", 
      icon: FiGlobe,
      description: "We develop custom software solutions tailored to your specific goals. Our expert developers combine functionality, scalability, and performance to deliver software that supports your business operations and growth.",
      expertise: [
        "Enterprise Software Development",
        "Cloud-based Solutions",
        "SaaS & ERP Systems",
        "Legacy Software Modernization"
      ],
      gradient: "from-accent-500 to-secondary-600"
    },
    {
      id: "website-development",
      title: "Website Development",
      icon: FiGlobe, 
      description: "Your website is your digital identity. We build responsive, fast, and secure websites that leave a lasting impression. From dynamic business sites to complex web applications — we craft experiences that convert.",
      expertise: [
        "Custom Website Development",
        "E-commerce Development", 
        "CMS Solutions (WordPress, Shopify, etc.)",
        "Website Maintenance & Optimization"
      ],
      gradient: "from-secondary-600 to-accent-500"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      icon: FiLayout,
      description: "Great design goes beyond aesthetics. Our UI/UX team crafts intuitive and engaging interfaces that enhance usability and delight users across devices. We focus on human-centered design that drives results.",
      expertise: [
        "User Research & Wireframing",
        "Interactive Prototypes",
        "Web & Mobile App UI/UX Design", 
        "Usability Testing"
      ],
      gradient: "from-accent-600 to-secondary-500"
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      icon: FiLayout,
      description: "Visual storytelling that communicates your brand effectively. From logos to promotional materials, our graphic designers bring creativity and precision to every project, helping you stand out in a crowded market.",
      expertise: [
        "Brand Identity Design",
        "Marketing Materials (Brochures, Banners, Posters)",
        "Social Media Graphics",
        "Product Packaging & Illustration"
      ],
      gradient: "from-secondary-500 to-accent-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-300/8 via-secondary-400/6 to-accent-300/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-secondary-200/6 via-accent-300/4 to-secondary-200/6 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
        >
          <div className="liquid-glass p-8 lg:p-12 rounded-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent font-museomoderno">
              Our Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-deep-primary leading-relaxed font-semibold max-w-3xl mx-auto">
              At Marcel Grace Infotech, we turn ideas into intelligent digital solutions. As a dedicated software development company, we deliver innovative, reliable, and scalable technology services to meet your unique business needs.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative h-full"
              >
                <div className="liquid-glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 h-full flex flex-col">
                  {/* Header */}
                  <div className={`relative bg-gradient-to-r ${service.gradient} p-6 lg:p-8`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white font-museomoderno">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white/90 leading-relaxed font-medium text-base lg:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-grow flex flex-col">
                    <h4 className="font-bold text-lg lg:text-xl mb-4 text-deep-secondary">
                      Our Expertise Includes:
                    </h4>
                    <div className="space-y-3 flex-grow">
                      {service.expertise.map((item, idx) => (
                        <div key={idx} className="deep-glass-card p-3 rounded-xl flex items-center gap-3 group/item hover:scale-105 transition-all duration-300">
                          <FiCheck className="w-4 h-4 text-secondary-600 group-hover/item:text-accent-600 transition-colors flex-shrink-0" />
                          <span className="text-deep-primary font-semibold text-sm lg:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="liquid-glass p-8 lg:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4 font-museomoderno">
              Let's Build the Future Together
            </h2>
            <p className="text-deep-primary mb-6 font-semibold text-base lg:text-lg">
              At Marcel Grace Infotech, we don't just develop software — we develop solutions that work for you. Contact us today to discuss how we can help bring your digital vision to life.
            </p>
            <button className="bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-400/25 inline-flex items-center gap-2">
              Get Started
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
