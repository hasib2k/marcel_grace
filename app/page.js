'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import OurClients from './components/OurClients';
import Community from './components/Community';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import { FiCpu, FiCloud, FiBarChart2, FiShield } from "react-icons/fi";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen">
      <Hero />
      <section className="w-full py-12 bg-white border-t flex justify-center items-center">
        <div className="glassy-card w-full max-w-6xl mx-2 px-8 py-10 rounded-2xl shadow border border-primary-100 bg-white/70 backdrop-blur-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3">About Us</h2>
          <p className="text-sm sm:text-base text-neutral-700 mb-3">
            Marcel Grace Infotech empowers businesses with innovative digital solutions. Our mission is to deliver reliable, modern, and scalable technology that drives real growth and value for our clients.
          </p>
          <p className="text-sm sm:text-base text-neutral-700">
            We value integrity, collaboration, and a relentless pursuit of excellence. Our team transforms ideas into impactful results, ensuring every partnership is built on trust and success.
          </p>
        </div>
      </section>
      <section className="w-full py-10 flex justify-center items-center bg-white">
        <div className="glassy-card w-full max-w-6xl mx-2 px-8 py-8 rounded-2xl shadow border border-primary-100 bg-white/70 backdrop-blur-md text-center">
          <h2 className="text-lg sm:text-xl font-bold text-primary-700 mb-2">Transform Your Business with Our Expertise</h2>
          <p className="text-xs sm:text-sm text-neutral-700 mb-4 max-w-2xl mx-auto leading-snug font-normal">
            Experience the power of cutting-edge technology solutions designed to elevate your business. Our approach combines industry expertise with advanced technology for exceptional results.
          </p>
          <ul className="text-xs sm:text-sm text-neutral-800 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch justify-center max-w-2xl mx-auto font-normal">
            <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur border border-primary-50 shadow-sm w-full justify-center"><FiCpu className="w-4 h-4 text-primary-600" /><span>Advanced AI Technology Integration</span></li>
            <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur border border-primary-50 shadow-sm w-full justify-center"><FiCloud className="w-4 h-4 text-primary-600" /><span>Cloud-Native Architecture</span></li>
            <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur border border-primary-50 shadow-sm w-full justify-center"><FiBarChart2 className="w-4 h-4 text-primary-600" /><span>Real-time Analytics Dashboard</span></li>
            <li className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur border border-primary-50 shadow-sm w-full justify-center"><FiShield className="w-4 h-4 text-primary-600" /><span>Secure Data Management</span></li>
          </ul>
          <a href="/get-started" className="inline-block px-4 py-2 rounded-full bg-primary-600 text-white text-xs sm:text-sm font-semibold hover:bg-primary-700 transition-colors shadow min-w-0 h-8">Get Started Today</a>
        </div>
      </section>
      <div className="bg-white border-b border-primary-100">
        <Services />
      </div>
      <div className="bg-white border-b border-primary-100">
        <Experience />
      </div>
      <div className="bg-white border-b border-primary-100">
        <OurClients />
      </div>
      <div className="bg-white border-b border-primary-100">
        <Community />
      </div>
      <div className="bg-white border-b border-primary-100">
        <Blog />
      </div>
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500">
        <CallToAction />
      </div>
    </div>
  );
}
