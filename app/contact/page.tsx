import { Metadata } from 'next';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Contact - Marcel Grace Infotech',
  description: 'Get in touch with Marcel Grace Infotech for software development services and consultation',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-20 lg:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with innovative software solutions? 
            Get in touch with our expert team today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <FiMail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <Link
                      href="mailto:info.marcelgrce@gmail.com"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      info.marcelgrce@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Phone</div>
                    <Link
                      href="tel:+8809638-604252"
                      className="text-white hover:text-emerald-400 transition-colors"
                    >
                      +8809638-604252
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Address</div>
                    <div className="text-white">
                      Dhaka, Bangladesh<br />
                      Available Worldwide
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links section removed as requested */}
            </div>
            
            {/* Quick Actions */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <Link
                  href="mailto:info.marcelgrce@gmail.com"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <FiMail size={18} />
                  Send Email
                </Link>
                
                <Link
                  href="/services"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  View Services
                </Link>
                
                <Link
                  href="/portfolio"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Start Your Project
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="devops">DevOps & Automation</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-gray-300 text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Project Request
              </button>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What's your response time?
              </h3>
              <p className="text-gray-300">
                We typically respond to emails within 24 hours during business days. 
                For urgent matters, feel free to call or message us directly.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Do you work remotely?
              </h3>
              <p className="text-gray-300">
                Yes, we work remotely with clients worldwide. We're comfortable with 
                various time zones and communication tools.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What are your rates?
              </h3>
              <p className="text-gray-300">
                Our rates vary depending on the project scope and requirements. 
                Contact us for a detailed quote tailored to your needs.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Do you provide ongoing support?
              </h3>
              <p className="text-gray-300">
                Yes, we offer ongoing support and maintenance services for projects 
                we've worked on, including bug fixes and feature updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
