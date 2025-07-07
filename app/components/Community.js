'use client';

import CommunityCard from "./CommunityCard";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { FiUsers, FiHeart, FiTrendingUp, FiAward } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const communityStats = [
  {
    icon: FiUsers,
    number: "5K+",
    label: "Active Members",
    description: "Growing community of developers",
    gradient: "from-accent to-primary"
  },
  {
    icon: FiHeart,
    number: "95%",
    label: "Satisfaction Rate",
    description: "Client satisfaction score",
    gradient: "from-secondary to-accent"
  },
  {
    icon: FiTrendingUp,
    number: "200+",
    label: "Projects Delivered",
    description: "Successfully completed projects",
    gradient: "from-primary to-secondary"
  },
  {
    icon: FiAward,
    number: "50+",
    label: "Industry Awards",
    description: "Recognition for excellence",
    gradient: "from-accent to-tertiary"
  }
];

export default function Community() {
  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(106,137,167,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(106,137,167,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          title={<span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">Our Growing Community</span>}
          subtitle={<span className="text-base sm:text-lg text-slate-700 font-semibold">Join thousands of satisfied clients and partners worldwide</span>}
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="deep-glass-card p-6 rounded-2xl text-center group hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 h-full flex flex-col cursor-pointer relative overflow-hidden border border-transparent hover:border-secondary/30"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6 text-black group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-2 group-hover:from-secondary-500 group-hover:via-accent-500 group-hover:to-primary-500 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-slate-800 mb-2 group-hover:text-secondary-700 group-hover:scale-105 transition-all duration-300">
                    {stat.label}
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed font-semibold mt-auto group-hover:text-slate-700 transition-colors duration-300">
                    {stat.description}
                  </div>
                </div>
                
                {/* Subtle Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
