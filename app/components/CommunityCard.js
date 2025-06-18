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
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent"
  },
  {
    image: community2,
    title: "National Associations",
    description: "Craft compelling content for Marcel Grace Infotech; modern, confident clarity for business clients.",
    gradient: "from-purple-500/20 via-purple-400/10 to-transparent"
  },
  {
    image: community3,
    title: "Small Businesses",
    description: "Develop engaging content that showcases Marcel Grace Infotech's expertise in digital solutions.",
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent"
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
          whileHover={{ translateY: -5 }}
          className="relative h-full"
        >
          <div className="h-full relative rounded-2xl transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary-500/10">
            {/* Card Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-white/80 via-white/60 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Main Card */}
            <div className="relative h-full bg-white/90 backdrop-blur-sm border border-neutral-100/50 rounded-2xl overflow-hidden flex flex-col">
              {/* Top Decoration */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Icon Container */}
              <div className="relative pt-8">
                <motion.div 
                  className="w-[80px] h-[80px] mx-auto mb-6 relative"
                  whileHover={{ rotate: [0, -5, 5, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon Background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl"
                    whileHover={{ rotate: -12 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="text-center px-6 relative z-10 flex-1 flex flex-col">
                <motion.h3 
                  className="text-2xl font-bold text-neutral-800 mb-4"
                  whileHover={{ color: '#0083df' }}
                  transition={{ duration: 0.3 }}
                >
                  {card.title}
                </motion.h3>
                <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                
                {/* Learn More Button */}
                <div className="pb-6">
                  <motion.button
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Learn More</span>
                    <motion.span
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BsArrowRight />
                    </motion.span>
                  </motion.button>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
