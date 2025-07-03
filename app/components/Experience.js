'use client';

import img1 from "@/public/assets/Expertise.png";
import Image from "next/image";
import Button from "./Button";
import { BsArrowRight } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  "Advanced AI Technology Integration",
  "Cloud-Native Architecture",
  "Real-time Analytics Dashboard",
  "Secure Data Management",
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-300/10 via-accent-400/8 to-secondary-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="liquid-glass p-6 rounded-3xl">
                <Image
                  src={img1}
                  alt="Experience Illustration"
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Enhanced Content Section with deeper colors */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Transform Your Business with Our Expertise
              </h2>
            </div>

            <p className="text-base sm:text-lg text-deep-primary leading-relaxed font-semibold">
              Experience the power of cutting-edge technology solutions designed to elevate 
              your business to new heights. Our innovative approach combines industry expertise 
              with advanced technology to deliver exceptional results.
            </p>

            {/* Enhanced Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="deep-glass-card flex items-center p-4 rounded-xl group hover:scale-105 transition-all duration-300"
                >
                  <FiCheckCircle className="w-5 h-5 text-secondary-600 mr-3 group-hover:text-accent-600 transition-colors flex-shrink-0" />
                  <span className="text-deep-secondary font-bold">{feature}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary-400/25 flex items-center gap-2">
                Get Started Today
                <BsArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
