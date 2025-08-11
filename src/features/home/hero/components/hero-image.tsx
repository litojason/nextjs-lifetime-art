"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src="/images/hero-banner.jpg"
        alt="Hero Banner"
        width={1500}
        height={841}
        className="object-cover rounded-xl h-[695px]"
      />
    </motion.div>
  );
}
