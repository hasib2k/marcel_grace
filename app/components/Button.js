'use client';

import { clsx } from "clsx";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 backdrop-blur-sm",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 focus:ring-primary-500 hover:shadow-glow relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0)_40%)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        secondary:
          "bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:from-secondary-700 hover:to-secondary-600 focus:ring-secondary-500 hover:shadow-glow relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0)_40%)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        accent:
          "bg-gradient-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 focus:ring-accent-400 hover:shadow-glow relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_20%,rgba(255,255,255,0)_40%)] before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        outline:
          "border-2 border-primary-600 text-primary-600 bg-white/80 backdrop-blur-sm hover:bg-primary-50 focus:ring-primary-500 relative overflow-hidden after:absolute after:inset-0 after:border-2 after:border-primary-400/0 after:rounded-xl hover:after:border-primary-400/50 after:transition-colors after:duration-500",
        ghost:
          "text-neutral-600 hover:text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={clsx(buttonVariants({ variant, size, className }))}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
