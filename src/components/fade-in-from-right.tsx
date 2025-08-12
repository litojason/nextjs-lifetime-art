"use client";

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface FadeInFromRightProps extends PropsWithChildren {
  className?: string;
}

export default function FadeInFromRight({
  className,
  children,
}: FadeInFromRightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 20, position: "absolute" }}
      whileInView={{ opacity: 1, translateX: 0, position: "relative" }}
      transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
