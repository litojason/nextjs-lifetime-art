"use client";

import { motion } from "motion/react";

type HeroTextProps = {
  lines: string[];
  description: string;
};

export default function HeroText({ lines, description }: HeroTextProps) {
  return (
    <>
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-[2.5rem] lg:text-[3.5rem] font-medium"
      >
        {lines.map((line, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            style={{ display: "block" }}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="text-base lg:text-xl text-hero-desc"
      >
        {description}
      </motion.p>
    </>
  );
}
