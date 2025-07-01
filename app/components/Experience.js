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
    <section className="relative overflow-hidden pt-0 pb-10 bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-2 relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-xl bg-white p-3 border border-primary-100 shadow-sm">
                <Image
                  src={img1}
                  alt="Experience Illustration"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-neutral-900">
                Transform Your Business with Our Expertise
              </h2>
            </div>

            <p className="text-xs text-neutral-600 mb-3 leading-snug">
              Experience the power of cutting-edge technology solutions designed to elevate 
              your business to new heights. Our innovative approach combines industry expertise 
              with advanced technology to deliver exceptional results.
            </p>

            {/* Features List */}
            <ul className="space-y-1 mb-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-center text-xs text-neutral-700"
                >
                  <FiCheckCircle className="w-3.5 h-3.5 text-primary-600 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="primary" className="px-3 py-1 text-xs h-7 min-w-0">
              Get Started Today
              <BsArrowRight className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
