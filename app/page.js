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
      
      {/* Enhanced About Section with Liquid Glass Effect */}
      <section className="w-full py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-300/8 via-secondary-400/6 to-accent-300/8 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="container mx-auto px-2 relative">
          <div className="max-w-6xl mx-auto">
            <div className="liquid-glass p-8 lg:p-16 xl:p-20 rounded-3xl text-center group hover:scale-[1.02] transition-all duration-500">
              {/* Decorative Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-secondary-500 to-accent-500 shadow-lg">
                  <FiCpu className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-8">
                About Us
              </h2>
              
              {/* Mission Statement */}
              <div className="space-y-6 mb-8">
                <p className="text-base sm:text-lg lg:text-xl text-deep-primary leading-relaxed font-semibold">
                  Marcel Grace Infotech empowers businesses with innovative digital solutions. Our mission is to deliver reliable, modern, and scalable technology that drives real growth and value for our clients.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-deep-primary leading-relaxed font-semibold">
                  We value integrity, collaboration, and a relentless pursuit of excellence. Our team transforms ideas into impactful results, ensuring every partnership is built on trust and success.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: FiShield, title: "Integrity", desc: "Building trust through transparency" },
                  { icon: FiCpu, title: "Innovation", desc: "Cutting-edge technology solutions" },
                  { icon: FiBarChart2, title: "Excellence", desc: "Delivering exceptional results" }
                ].map((value, index) => (
                  <div 
                    key={index}
                    className="deep-glass-card p-4 rounded-xl group/card hover:scale-105 transition-all duration-300"
                  >
                    <value.icon className="w-6 h-6 text-secondary-600 mx-auto mb-2 group-hover/card:text-accent-600 transition-colors" />
                    <h3 className="text-deep-secondary font-bold mb-1">{value.title}</h3>
                    <p className="text-medium-primary text-sm font-medium">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="w-full py-16 flex justify-center items-center relative">
        <div className="liquid-glass w-full max-w-6xl mx-4 px-8 py-10 rounded-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Transform Your Business with Our Expertise
          </h2>
          <p className="text-sm sm:text-base text-deep-primary mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
            Experience the power of cutting-edge technology solutions designed to elevate your business. Our approach combines industry expertise with advanced technology for exceptional results.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
            {[
              { icon: FiCpu, text: "Advanced AI Technology Integration" },
              { icon: FiCloud, text: "Cloud-Native Architecture" },
              { icon: FiBarChart2, text: "Real-time Analytics Dashboard" },
              { icon: FiShield, text: "Secure Data Management" }
            ].map((item, index) => (
              <div 
                key={index}
                className="deep-glass-card flex items-center gap-3 px-4 py-3 rounded-xl group hover:scale-105 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-secondary-600 group-hover:text-accent-600 transition-colors" />
                <span className="text-deep-secondary text-sm font-bold">{item.text}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="/get-started" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary-400 to-accent-500 text-white font-semibold hover:from-secondary-300 hover:to-accent-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-secondary-400/25"
          >
            Get Started Today
          </a>
        </div>
      </section>
      
      {/* Services Section with Dark Glass */}
      <div className="relative">
        <Services />
      </div>
      
      {/* Experience Section */}
      <div className="relative">
        <Experience />
      </div>
      
      {/* Clients Section */}
      <div className="relative">
        <OurClients />
      </div>
      
      {/* Community Section */}
      <div className="relative">
        <Community />
      </div>
      
      {/* Blog Section */}
      <div className="relative">
        <Blog />
      </div>
      
      {/* Call to Action with Gradient Glass */}
      <div className="relative bg-gradient-to-r from-secondary-400/20 to-accent-500/20">
        <CallToAction />
      </div>
    </div>
  );
}
