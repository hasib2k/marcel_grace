'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from 'react-icons/bs';
import { communityData } from "@/app/data/communityData";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function CommunityCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {communityData.map((card, index) => (
        <Link href={`/community/${card.id}`} key={card.id}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
          >
            <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300
                          hover:shadow-xl border border-neutral-200/50">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-all duration-300 ${card.hoverGradient}`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-4 text-center text-xl font-semibold text-neutral-800 group-hover:text-primary-600 
                             transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="mb-6 text-center text-neutral-600">
                  {card.description}
                </p>
                
                {/* Learn More Button */}
                <div className="flex justify-center">
                  <div className={`inline-flex items-center justify-center space-x-2 rounded-xl px-4 py-2 
                                text-primary-600 transition-all duration-300 border border-neutral-200/80 
                                ${card.accentColor}`}>
                    <span className="font-medium">Learn More</span>
                    <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Gradients */}
              <div className="absolute top-0 left-0 h-32 w-32 bg-gradient-radial from-white/40 via-transparent to-transparent 
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-radial from-white/40 via-transparent to-transparent 
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
