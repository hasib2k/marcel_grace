'use client';

import community1 from "@/public/assets/community-1.svg";
import community2 from "@/public/assets/community-2.svg";
import community3 from "@/public/assets/community-3.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from 'react-icons/bs';

const cardData = [
  {
    image: community1,
    title: "Membership Organizations",
    description: "Create compelling content for Marcel Grace Infotech: confident, modern copy promoting innovation",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    accentColor: "group-hover:border-blue-400",
    hoverGradient: "group-hover:from-blue-500/30 group-hover:via-blue-400/20",
  },
  {
    image: community2,
    title: "National Associations",
    description: "Craft compelling content for Marcel Grace Infotech; modern, confident clarity for business clients.",
    gradient: "from-purple-500/20 via-purple-400/10 to-transparent",
    accentColor: "group-hover:border-purple-400",
    hoverGradient: "group-hover:from-purple-500/30 group-hover:via-purple-400/20",
  },
  {
    image: community3,
    title: "Small Businesses",
    description: "Develop engaging content that showcases Marcel Grace Infotech's expertise in digital solutions.",
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
    accentColor: "group-hover:border-orange-400",
    hoverGradient: "group-hover:from-orange-500/30 group-hover:via-orange-400/20",
  }
];

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Card wrapper with hover effects */}
          <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-sm p-6 
                          border border-neutral-100/50 transition-all duration-300 
                          hover:shadow-lg hover:-translate-y-1 overflow-hidden 
                          hover:border-primary-200/50 group cursor-pointer">
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-30 
                           transition-opacity duration-300 ${card.hoverGradient}`} />
            
            {/* Content wrapper */}
            <div className="relative z-10">
              {/* Image container */}
              <div className="relative w-16 h-16 mb-6">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} 
                               blur-xl transition-all duration-300 ${card.hoverGradient}`} />
                <div className="relative z-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-16 h-16 object-contain transition-transform duration-300 
                             group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 
                           transition-colors duration-300 group-hover:text-primary-600">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 mb-6 line-clamp-3">
                {card.description}
              </p>

              {/* Learn More link */}
              <div className="flex items-center text-primary-600 font-medium 
                            transition-all duration-300 group-hover:translate-x-2">
                Learn More
                <BsArrowRight className="ml-2 transition-transform duration-300 
                                       group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial 
                          from-white/40 via-transparent to-transparent opacity-0 
                          transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-radial 
                          from-white/40 via-transparent to-transparent opacity-0 
                          transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
