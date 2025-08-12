"use client";

import { Key, PropsWithChildren } from "react";
import { motion } from "motion/react";

interface FadeInScaleUpProps extends PropsWithChildren {
  id: Key;
  className?: string;
}

export default function FadeInScaleUp({
  id,
  className,
  children,
}: FadeInScaleUpProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
