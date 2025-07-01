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
    <footer className="relative bg-white">
      <div className="w-full max-w-7xl mx-auto px-2 py-3 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 pb-0 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col gap-0.5">
            <Link
              href="/"
              className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent tracking-tight mb-0.5"
            >
              Marcel Grace Infotech
            </Link>
            <p className="text-primary-700 text-xs leading-snug max-w-xs mb-0.5">
              Empowering businesses through innovative digital solutions and cutting-edge technology services.
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col gap-0.5">
            <h3 className="text-primary-700 font-semibold text-xs uppercase tracking-wide mb-0.5">Quick Links</h3>
            <ul className="flex flex-col gap-0.5">
              {['About', 'Services', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-primary-600 hover:text-primary-500 font-medium text-xs"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div className="flex flex-col gap-0.5">
            <h3 className="text-primary-700 font-semibold text-xs uppercase tracking-wide mb-0.5">Services</h3>
            <ul className="flex flex-col gap-0.5">
              {['Web Development', 'App Development', 'UI/UX Design', 'Consulting'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary-600 hover:text-primary-500 font-medium text-xs"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-start-5 flex flex-col gap-0.5 mt-2 sm:mt-0 max-w-xs ml-auto">
            <h3 className="text-primary-700 font-semibold text-xs uppercase tracking-wide mb-0.5">Stay Updated</h3>
            <p className="text-primary-900/90 text-xs mb-0.5">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 rounded p-0.5 text-green-700 text-xs flex items-center gap-1">
                <span>✅</span> Subscribed!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/10 rounded p-0.5 text-red-700 text-xs flex items-center gap-1">
                <span>❌</span> Failed.
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-0.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="flex-1 px-1 py-0.5 rounded bg-white/60 text-primary-700 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-transparent disabled:opacity-50 text-xs shadow-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-2 py-0.5 rounded bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold disabled:opacity-50 text-xs shadow hover:from-secondary-500 hover:to-primary-500"
              >
                {isSubmitting ? '...' : <span className="text-primary-50">Subscribe</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
