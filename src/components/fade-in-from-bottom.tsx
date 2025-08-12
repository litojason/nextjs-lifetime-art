"use client";

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface FadeInFromBottomProps extends PropsWithChildren {
  className?: string;
}

export default function FadeInFromBottom({
  className,
  children,
}: FadeInFromBottomProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
