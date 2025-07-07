"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="relative">
      <div className="deep-glass-card w-full max-w-7xl mx-auto px-6 py-12 relative overflow-hidden border-t border-white/10">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent tracking-tight"
            >
              Marcel Grace Infotech
            </Link>
            <p className="text-deep-primary text-base leading-relaxed max-w-sm font-semibold">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-deep-primary font-bold text-lg uppercase tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['About', 'Services', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-deep-secondary hover:text-secondary font-medium text-base transition-all duration-300 hover:translate-x-2 hover:font-semibold group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-deep-primary font-bold text-lg uppercase tracking-wide">Services</h3>
            <ul className="flex flex-col gap-3">
              {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-deep-secondary hover:text-secondary font-medium text-base transition-all duration-300 hover:translate-x-2 hover:font-semibold group flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 group-hover:w-4 transition-all duration-300"></span>
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-start-5 flex flex-col gap-4">
            <h3 className="text-deep-primary font-bold text-lg uppercase tracking-wide">Stay Updated</h3>
            <p className="text-deep-secondary text-base leading-relaxed font-medium">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            {submitStatus === 'success' && (
              <div className="glassmorphic bg-green-500/20 rounded-xl p-3 text-green-300 text-sm flex items-center gap-2">
                <span>✅</span> Successfully subscribed!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="glassmorphic bg-red-500/20 rounded-xl p-3 text-red-300 text-sm flex items-center gap-2">
                <span>❌</span> Subscription failed.
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="glassmorphic px-4 py-3 rounded-xl text-deep-primary placeholder-deep-tertiary focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-30 text-base font-medium hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 border border-transparent hover:border-secondary/30"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-secondary to-accent text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 hover:from-secondary-500 hover:to-accent-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
