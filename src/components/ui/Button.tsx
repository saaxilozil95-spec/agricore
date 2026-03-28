"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseClass =
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#15803D] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#15803D] to-[#22C55E] text-white hover:shadow-lg hover:shadow-green-500/25 active:shadow-md",
      secondary:
        "bg-[#F0FDF4] text-[#15803D] hover:bg-[#DCFCE7] border border-[#BBF7D0]",
      outline:
        "border-2 border-[#15803D] text-[#15803D] hover:bg-[#15803D] hover:text-white",
      ghost: "text-[#15803D] hover:bg-[#F0FDF4]",
      gold: "bg-gradient-to-r from-[#CA8A04] to-[#EAB308] text-white hover:shadow-lg hover:shadow-amber-500/25",
    };

    const sizes = {
      sm: "h-9 px-5 text-xs gap-1.5",
      md: "h-11 px-7 text-sm gap-2",
      lg: "h-14 px-10 text-base gap-2.5",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        ref={ref}
        className={cn(baseClass, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
