'use client';

import { motion } from 'framer-motion';
import img1 from "@/public/assets/Icon1.svg";
import img2 from "@/public/assets/Icon2.svg";
import img3 from "@/public/assets/Icon3.svg";
import img4 from "@/public/assets/Icon4.svg";
import Image from "next/image";

const achievements = [
  { icon: img1, number: '2,245,341', label: 'Members', color: 'from-blue-500 to-blue-600' },
  { icon: img2, number: '1,175,230', label: 'Events', color: 'from-primary-500 to-primary-600' },
  { icon: img3, number: '1,592,493', label: 'Users', color: 'from-secondary-500 to-secondary-600' },
  { icon: img4, number: '1,037,282', label: 'Downloads', color: 'from-accent-500 to-accent-600' },
];

export default function Achievements() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-glow)_1px,transparent_1px),linear-gradient(90deg,var(--grid-glow)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-100/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left w-full lg:w-2/5"
          >
            <h2 className="relative">
              <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-gradient-x">
                Marcel Grace
              </span>
              <span className="block text-3xl sm:text-4xl font-bold mt-2 text-neutral-800">
                Modern tech solutions.
              </span>
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-xl -z-10" />
            </h2>
            <p className="text-lg mt-6 text-neutral-600 max-w-lg">
              Professional content for Marcel Grace Infotech, delivering cutting-edge solutions for the digital age.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 
                                border border-neutral-100/50 transition-all duration-300
                                hover:shadow-lg hover:-translate-y-1">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 
                                   group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-xl opacity-20 
                                       group-hover:opacity-30 transition-opacity duration-300`} />
                        <Image
                          src={item.icon}
                          alt={item.label}
                          className="w-12 h-12 relative z-10 transition-transform duration-300 
                                   group-hover:scale-110 group-hover:rotate-3"
                        />
                      </div>

                      {/* Text Content */}
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neutral-800 
                                     to-neutral-600 bg-clip-text text-transparent">
                          {item.number}
                        </h4>
                        <p className="text-neutral-600 font-medium">{item.label}</p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial 
                                  from-white/40 via-transparent to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
