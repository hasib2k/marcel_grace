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
  <main className="min-h-screen bg-white pt-8 lg:pt-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
  <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-[15px] font-bold text-[#181C14] mb-1">Contact Us</h1>
          <p className="text-[11px] text-[#3C3D37] max-w-2xl mx-auto leading-relaxed">Ready to transform your business with innovative software solutions? <br />Get in touch with our expert team today.</p>
        </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-white rounded-none p-0 flex flex-col sm:flex-row items-stretch">
              {/* Contact Details vertically with left-aligned icons */}
              <div className="flex-1 flex flex-col justify-center p-5 sm:p-6">
                <h2 className="text-[13px] font-bold text-[#181C14] mb-2">Get In Touch</h2>
                <p className="text-[10px] text-[#3C3D37] mb-1">We're here to answer your questions, discuss your project, or just have a chat. Reach out to us anytime—our team is always happy to help!</p>
                <p className="text-[10px] text-[#3C3D37] mb-1">Whether you have a detailed brief or just an idea, we’re ready to listen and provide expert advice. We value clear communication and fast response, so you’ll never be left waiting.</p>
                <p className="text-[10px] text-[#3C3D37] mb-3">Let’s build something great together. Contact us for a free consultation or to learn more about how we can help your business grow.</p>
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 flex items-center justify-center"><FiMail className="text-[#697565]" size={17} /></span>
                    <div>
                      <div className="text-[12px] text-[#3C3D37]">Email</div>
                      <Link href="mailto:info.marcelgrce@gmail.com" className="text-[#181C14] text-[11px]">info.marcelgrce@gmail.com</Link>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 flex items-center justify-center"><FiPhone className="text-[#697565]" size={17} /></span>
                    <div>
                      <div className="text-[12px] text-[#3C3D37]">Phone</div>
                      <Link href="tel:+8809638-604252" className="text-[#181C14] text-[11px]">+8809638-604252</Link>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 flex items-center justify-center"><FiMapPin className="text-[#697565]" size={17} /></span>
                    <div>
                      <div className="text-[12px] text-[#3C3D37]">Address</div>
                      <div className="text-[#181C14] text-[11px]">Dhaka, Bangladesh<br />Available Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vertical Divider */}
              <div className="hidden sm:block w-px bg-[#ECDFCC] my-6"></div>
              {/* Quick Actions as vertical group */}
              <div className="flex flex-col justify-center items-center p-5 min-w-[120px]">
                <h3 className="text-[13px] font-bold text-[#181C14] mb-1">Quick Actions</h3>
                <div className="flex flex-col gap-2 w-full items-center">
                  <Link href="mailto:info.marcelgrce@gmail.com" className="flex items-center justify-center gap-1 bg-[#697565] text-white px-1.5 py-1 rounded-none font-semibold text-[11px] w-full text-center">
                    <FiMail size={12} />Send Email
                  </Link>
                  <Link href="/services" className="flex items-center justify-center gap-1 bg-[#ECDFCC] text-[#181C14] px-1.5 py-1 rounded-none font-semibold text-[11px] w-full text-center">View Services</Link>
                  <Link href="/portfolio" className="flex items-center justify-center gap-1 bg-[#ECDFCC] text-[#181C14] px-1.5 py-1 rounded-none font-semibold text-[11px] w-full text-center">View Portfolio</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white border border-[#ECDFCC] rounded-none p-5">
            <h2 className="text-[11px] font-bold text-[#181C14] mb-1">Start Your Project</h2>
            <form className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] text-[#3C3D37] font-medium mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] placeholder-[#3C3D37] focus:outline-none" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] placeholder-[#3C3D37] focus:outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label htmlFor="email" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] placeholder-[#3C3D37] focus:outline-none" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Company</label>
                  <input type="text" id="company" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] placeholder-[#3C3D37] focus:outline-none" placeholder="Your Company" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Service Needed</label>
                <select id="service" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] focus:outline-none">
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
                <label htmlFor="budget" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Budget Range</label>
                <select id="budget" className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] focus:outline-none">
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-[11px] text-[#3C3D37] font-medium mb-1">Project Details</label>
                <textarea id="message" rows={4} className="w-full px-2 py-2 bg-white border border-[#ECDFCC] rounded-none text-[11px] text-[#181C14] placeholder-[#3C3D37] focus:outline-none resize-none" placeholder="Tell us about your project requirements, timeline, and any specific features you need..." />
              </div>
              <button type="submit" className="w-full bg-[#697565] text-white py-1 px-2 rounded-none font-semibold text-[11px] mt-1">Submit</button>
            </form>
          </div>
        </div>
        {/* FAQ Section */}
  <div className="mt-10" ref={faqRef}>
          <h2 className="text-[13px] font-bold text-[#181C14] text-center mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-none p-3 cursor-pointer select-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h3 className="text-[11px] font-semibold text-[#181C14] mb-1 flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-[#697565]">
                    {openFaq === i ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                  </span>
                </h3>
                {openFaq === i && (
                  <p className="text-[11px] text-[#3C3D37] mt-1">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
