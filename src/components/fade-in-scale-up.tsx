"use client";

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface FadeInScaleUpProps extends PropsWithChildren {
  className?: string;
}

export default function FadeInScaleUp({
  className,
  children,
}: FadeInScaleUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
