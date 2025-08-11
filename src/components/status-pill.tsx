"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import Pill from "./pill";

export default function StatusPill({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="inline-block"
    >
      <Pill>{children}</Pill>
    </motion.div>
  );
}
