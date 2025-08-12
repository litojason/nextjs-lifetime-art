"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    >
      <button className="flex w-fit items-center py-2.5 px-4 gap-6 rounded-4xl bg-background/10 backdrop-blur-[10px]">
        <span className="font-medium text-background">Work with us</span>

        <div className="flex items-center justify-center size-10 rounded-full bg-background">
          <Image
            src="/icons/arrow-right.svg"
            alt="Arrow right"
            width={20}
            height={20}
          />
        </div>
      </button>
    </motion.div>
  );
}
