'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Tell Us About Your Project",
    description: "Share your goals, challenges, and vision — we'll listen, consult, and advise.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Receive a Custom Plan",
    description: "We analyze your requirements and craft a roadmap tailored to your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Kick Off Development",
    description: "With clear milestones and agile delivery, we bring your product to life — fast and reliably.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 
                       to-primary-900 bg-clip-text text-transparent">
            Let's Build the Future Together
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Ready to transform your ideas into reality? At Marcel Grace Infotech, we make starting 
            your digital journey simple and effective. Whether you're a startup with a bold vision 
            or an enterprise scaling operations, our expert team is here to help you every step of the way.
          </p>
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Here's how to get started:</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 
                           rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity 
                           duration-500 blur-xl">
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg 
                           border border-neutral-200/50 hover:shadow-xl transition-all 
                           duration-300 relative h-full group-hover:bg-white/90">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 
                             to-secondary-500/20 flex items-center justify-center text-primary-600 
                             mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xl text-neutral-600 mb-8">
            Let's innovate together. Get in touch today and take the first step toward building 
            something extraordinary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 
                     text-white rounded-xl font-semibold hover:from-primary-700 
                     hover:to-primary-800 transition-all duration-300 shadow-lg 
                     hover:shadow-xl transform hover:-translate-y-0.5"
            >
              👉 Contact Us
            </Link>
            <Link href="/contact"
              className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold 
                     hover:bg-primary-50 transition-all duration-300 shadow-lg 
                     hover:shadow-xl transform hover:-translate-y-0.5 
                     border border-primary-200"
            >
              Book a Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
