"use client";
import { useState, useRef, useEffect } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';


export default function Contact() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Close FAQ on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (faqRef.current && !faqRef.current.contains(e.target as Node)) {
        setOpenFaq(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const faqs = [
    {
      q: "What's your response time?",
      a: 'We typically respond to emails within 24 hours during business days. For urgent matters, feel free to call or message us directly.'
    },
    {
      q: 'Do you work remotely?',
      a: "Yes, we work remotely with clients worldwide. We're comfortable with various time zones and communication tools."
    },
    {
      q: 'What are your rates?',
      a: 'Our rates vary depending on the project scope and requirements. Contact us for a detailed quote tailored to your needs.'
    },
    {
      q: 'Do you provide ongoing support?',
      a: "Yes, we offer ongoing support and maintenance services for projects we've worked on, including bug fixes and feature updates."
    },
    {
      q: 'Can you sign an NDA?',
      a: 'Yes, we are happy to sign a Non-Disclosure Agreement to protect your project and ideas.'
    },
    {
      q: 'What technologies do you specialize in?',
      a: 'We specialize in React, Next.js, Node.js, Python, AWS, Azure, and more. Contact us for a full tech stack.'
    },
    {
      q: 'How do we start a project?',
      a: 'Simply contact us with your requirements. We will schedule a call to discuss your needs and next steps.'
    },
    {
      q: 'Do you offer post-launch support?',
      a: 'Yes, we provide post-launch support and maintenance packages tailored to your needs.'
    }
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      {/* SVG Line Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="line-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#697565" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#line-grid)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-4 sm:py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2 sm:mb-3 md:mb-4 tracking-wider uppercase">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center mb-4 sm:mb-6 max-w-3xl mx-auto tracking-wide uppercase">
              Ready to transform your business with innovative software solutions? Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pb-4 sm:pb-6 md:pb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-5">
                <h2 className="text-sm sm:text-base font-black text-black mb-3 tracking-wider uppercase">Get In Touch</h2>
                <p className="text-xs sm:text-sm text-gray-700 mb-3 tracking-wide">We're here to answer your questions, discuss your project, or just have a chat. Reach out to us anytime—our team is always happy to help!</p>
                <p className="text-xs sm:text-sm text-gray-700 mb-4 tracking-wide">Whether you have a detailed brief or just an idea, we're ready to listen and provide expert advice. We value clear communication and fast response, so you'll never be left waiting.</p>
                
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg"><FiMail className="text-gray-600" size={16} /></span>
                    <div>
                      <div className="text-xs font-black text-black tracking-wider uppercase">Email</div>
                      <Link href="mailto:info.marcelgrace@gmail.com" className="text-gray-700 text-xs tracking-wide">info.marcelgrace@gmail.com</Link>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg"><FiPhone className="text-gray-600" size={16} /></span>
                    <div>
                      <div className="text-xs font-black text-black tracking-wider uppercase">Phone</div>
                      <Link href="tel:+8809638-604252" className="text-gray-700 text-xs tracking-wide">+8809638-604252</Link>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg"><FiMapPin className="text-gray-600" size={16} /></span>
                    <div>
                      <div className="text-xs font-black text-black tracking-wider uppercase">Address</div>
                      <div className="text-gray-700 text-xs tracking-wide">Dhaka, Bangladesh<br />Available Worldwide</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-xs font-black text-black mb-3 tracking-wider uppercase">Quick Actions</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="mailto:info.marcelgrace@gmail.com" className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-2 rounded-xl font-black text-xs tracking-wider uppercase">
                      <FiMail size={12} />Send Email
                    </Link>
                    <Link href="/services" className="flex items-center justify-center gap-2 bg-gray-200 text-black px-3 py-2 rounded-xl font-black text-xs tracking-wider uppercase">View Services</Link>
                    <Link href="/portfolio" className="flex items-center justify-center gap-2 bg-gray-200 text-black px-3 py-2 rounded-xl font-black text-xs tracking-wider uppercase">View Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-4 sm:p-5">
              <h2 className="text-sm sm:text-base font-black text-black mb-3 tracking-wider uppercase">Start Your Project</h2>
              <form className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">First Name</label>
                    <input type="text" id="firstName" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Company</label>
                    <input type="text" id="company" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Your Company" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Service Needed</label>
                  <select id="service" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black focus:outline-none focus:ring-2 focus:ring-gray-300">
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
                  <label htmlFor="budget" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Budget Range</label>
                  <select id="budget" className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black focus:outline-none focus:ring-2 focus:ring-gray-300">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-700 font-black mb-1 tracking-wider uppercase">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none" placeholder="Tell us about your project requirements, timeline, and any specific features you need..." />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white py-2 px-4 rounded-xl font-black text-xs tracking-wider uppercase">Submit</button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8" ref={faqRef}>
            <h2 className="text-base sm:text-lg font-black text-black text-center mb-4 tracking-wider uppercase">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 shadow-lg p-3 cursor-pointer select-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className="text-xs font-black text-black mb-1 flex items-center justify-between tracking-wider uppercase">
                    {faq.q}
                    <span className="ml-2 text-gray-600">
                      {openFaq === i ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                    </span>
                  </h3>
                  {openFaq === i && (
                    <p className="text-xs text-gray-700 mt-2 tracking-wide">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
