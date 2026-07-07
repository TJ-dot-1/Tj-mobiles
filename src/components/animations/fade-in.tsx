"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewMargin?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  viewMargin = "-50px",
}: FadeInProps) {
  const ref = React.useRef(null);
  // @ts-ignore - framer motion types mismatch in some versions
  const isInView = useInView(ref, { once: true, margin: viewMargin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
