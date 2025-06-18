'use client';

import { clsx } from "clsx";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 focus:ring-primary-500 hover:shadow-glow relative overflow-hidden",
        secondary:
          "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:from-secondary-700 hover:to-secondary-600 focus:ring-secondary-500 hover:shadow-glow relative overflow-hidden",
        accent:
          "bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 focus:ring-accent-400 hover:shadow-glow relative overflow-hidden",
        outline:
          "border-2 border-primary-600 text-primary-600 bg-white/80 backdrop-blur-sm hover:bg-primary-50 focus:ring-primary-500 relative overflow-hidden",
        ghost:
          "text-primary-600 hover:bg-primary-50/80 focus:ring-primary-500 backdrop-blur-sm",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  children,
  className,
  variant,
  size,
  animate = true,
  ...props
}) {
  const ButtonComponent = animate ? motion.button : "button";

  return (
    <ButtonComponent
      className={clsx(buttonVariants({ variant, size }), className)}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {variant !== "ghost" && variant !== "outline" && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
      )}
    </ButtonComponent>
  );
}
