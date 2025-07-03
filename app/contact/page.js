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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-32">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-deep-primary via-deep-secondary to-deep-accent bg-clip-text text-transparent">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl text-deep-primary leading-relaxed font-medium">
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
            <div className="deep-glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">📞</span>
                <h2 className="text-2xl font-bold text-deep-primary">Get in Touch</h2>
              </div>
              <div className="space-y-4 text-deep-secondary">
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Phone:</span>
                  <a href="tel:+8809638876711" className="hover:text-accent transition-colors">
                    +8809638876711
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Email:</span>
                  <a href="mailto:info.marcelgrace@gmail.com" 
                     className="hover:text-accent transition-colors">
                    info.marcelgrace@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold w-20">Website:</span>
                  <a href="https://www.marcelgrace.com" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-accent transition-colors">
                    www.marcelgrace.com
                  </a>
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div className="deep-glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">📍</span>
                <h2 className="text-2xl font-bold text-deep-primary">Our Office</h2>
              </div>
              <div className="space-y-4 text-deep-secondary">
                <p className="font-semibold">Marcel Grace Infotech</p>
                <p>Location: Dhaka, Bangladesh</p>
                <p>Business Hours:</p>
                <p className="text-deep-tertiary">Sunday – Thursday | 10:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Let's Collaborate */}
            <div className="deep-glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">🤝</span>
                <h2 className="text-2xl font-bold text-deep-primary">Let's Collaborate</h2>
              </div>
              <p className="text-deep-secondary leading-relaxed">
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
            <div className="deep-glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">📝</span>
                <h2 className="text-2xl font-bold text-deep-primary">Send Us a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-primary mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl glassmorphic text-deep-primary placeholder-deep-tertiary
                               focus:ring-2 focus:ring-secondary/50 focus:outline-none
                               transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-primary mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl glassmorphic text-deep-primary placeholder-deep-tertiary
                               focus:ring-2 focus:ring-secondary/50 focus:outline-none
                               transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-primary mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl glassmorphic text-deep-primary placeholder-deep-tertiary
                               focus:ring-2 focus:ring-secondary/50 focus:outline-none
                               transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-primary mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl glassmorphic text-deep-primary placeholder-deep-tertiary
                               focus:ring-2 focus:ring-secondary/50 focus:outline-none
                               transition-all duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-primary mb-1">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl glassmorphic text-deep-primary placeholder-deep-tertiary
                               focus:ring-2 focus:ring-secondary/50 focus:outline-none
                               transition-all duration-300 h-32 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent 
                           text-white rounded-xl font-semibold hover:scale-105
                           transition-all duration-300 shadow-lg hover:shadow-lg hover:shadow-secondary/25"
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
