"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

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
      transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
