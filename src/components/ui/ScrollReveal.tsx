"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  yOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  width = "100%",
  yOffset = 40,
  duration = 0.8,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }} // Smooth easing
      >
        {children}
      </motion.div>
    </div>
  );
}
