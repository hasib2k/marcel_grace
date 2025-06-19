'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Full-Cycle Development",
    description: "From ideation and UI/UX to launch and support — we handle it all.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Future-Proof Technologies",
    description: "We use the latest tools and frameworks to ensure your product is fast, modern, and ready for tomorrow.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Agile & Transparent Process",
    description: "You're involved at every step. We work in sprints with frequent updates and room for feedback.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Human-Centered Design",
    description: "Our products are not just functional — they delight users and boost engagement.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    gradient: "from-orange-500 to-rose-500"
  },
  {
    title: "Reliable Support",
    description: "We stand by our work with ongoing maintenance and proactive problem-solving.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-700 to-primary-900 
                         bg-clip-text text-transparent">
              Why Marcel Grace Infotech?
            </span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Innovation meets execution. We don't just write code — we solve real problems with 
            scalable, secure, and user-friendly solutions. Here's why businesses choose us:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                   style={{
                     background: `radial-gradient(circle at 50% 50%, ${feature.gradient.split(' ')[1]}, transparent 70%)`
                   }}>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg 
                           border border-neutral-200/50 hover:shadow-xl transition-all 
                           duration-300 h-full relative z-10 group-hover:bg-white/90">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} bg-opacity-20 
                             flex items-center justify-center text-primary-600 mb-6 
                             group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-700 
                             to-primary-900 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-neutral-600 mb-8">
            <span className="font-semibold">💡 Whether you're launching a new app, automating operations, 
            or scaling your platform</span> — we're here to make it happen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/service"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 
                     text-white rounded-xl font-semibold hover:from-primary-700 
                     hover:to-primary-800 transition-all duration-300 shadow-lg 
                     hover:shadow-xl transform hover:-translate-y-0.5"
            >
              👉 Explore Our Services
            </Link>
            <Link href="/product"
              className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold 
                     hover:bg-primary-50 transition-all duration-300 shadow-lg 
                     hover:shadow-xl transform hover:-translate-y-0.5 
                     border border-primary-200"
            >
              View Portfolio
            </Link>
            <Link href="/contact"
              className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold 
                     hover:bg-primary-50 transition-all duration-300 shadow-lg 
                     hover:shadow-xl transform hover:-translate-y-0.5 
                     border border-primary-200"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
