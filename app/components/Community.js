'use client';

import CommunityCard from "./CommunityCard";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

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

export default function Community() {
  return null;
}
