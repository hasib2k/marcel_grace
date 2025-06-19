'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 
                       to-primary-900 bg-clip-text text-transparent">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Have a project in mind? Need a custom software solution? Or just want to say hello? 
            We'd love to hear from you. At Marcel Grace Infotech, we're always ready to turn your 
            ideas into powerful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Get in Touch */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg 
                          border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">📞</span>
                <h2 className="text-2xl font-bold text-neutral-800">Get in Touch</h2>
              </div>
              <div className="space-y-4 text-neutral-600">
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Phone:</span>
                  <a href="tel:+8809638876711" className="hover:text-primary-600 transition-colors">
                    +8809638876711
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Email:</span>
                  <a href="mailto:info.marcelgrace@gmail.com" 
                     className="hover:text-primary-600 transition-colors">
                    info.marcelgrace@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Website:</span>
                  <a href="https://www.marcelgrace.com" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-primary-600 transition-colors">
                    www.marcelgrace.com
                  </a>
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg 
                          border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">📍</span>
                <h2 className="text-2xl font-bold text-neutral-800">Our Office</h2>
              </div>
              <div className="space-y-4 text-neutral-600">
                <p className="font-semibold">Marcel Grace Infotech</p>
                <p>Location: Dhaka, Bangladesh</p>
                <p>Business Hours:</p>
                <p className="text-neutral-500">Sunday – Thursday | 10:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Let's Collaborate */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg 
                          border border-neutral-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">🤝</span>
                <h2 className="text-2xl font-bold text-neutral-800">Let's Collaborate</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Whether you're a startup or an established business, we're here to bring your 
                vision to life. Contact us today and discover how we can help you grow with 
                smart, tailored technology.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl 
                          border border-neutral-200/50">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">📝</span>
                <h2 className="text-2xl font-bold text-neutral-800">Send Us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 
                               focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                               transition-all duration-300 bg-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 
                               focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                               transition-all duration-300 bg-white/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 
                               focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                               transition-all duration-300 bg-white/50"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 
                               focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                               transition-all duration-300 bg-white/50"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 
                               focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                               transition-all duration-300 bg-white/50 h-32 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 
                           text-white rounded-xl font-semibold hover:from-primary-700 
                           hover:to-primary-800 transition-all duration-300 shadow-lg 
                           hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
