"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function GetInTouchButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, delay: 0.6 }}
    >
      <Link
        href="#contact"
        className="flex w-fit items-center py-2.5 px-4 gap-6 rounded-4xl bg-foreground/10 backdrop-blur-[10px]"
      >
        <span className="font-medium text-foreground">Get in touch</span>

        <div className="flex items-center justify-center size-10 rounded-full bg-foreground">
          <Image
            src="/icons/arrow-right-white.svg"
            alt="Arrow right"
            width={20}
            height={20}
          />
        </div>
      </Link>
    </motion.div>
  );
}
