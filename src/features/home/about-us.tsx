"use client";

import { motion } from "motion/react";

import data from "@/data/about-us-data.json";
import Pill from "@/components/pill";
import FadeInFromBottom from "@/components/fade-in-from-bottom";
import SectionContainer from "@/components/section-container";

const { pill, title, description } = data;

export default function AboutUs() {
  return (
    <SectionContainer className="flex flex-col md:flex-row w-full py-30 px-10 gap-20">
      <FadeInFromBottom className="flex-1 space-y-1">
        <Pill>{pill}</Pill>

        <h2 className="text-[40px] font-medium whitespace-pre-line">{title}</h2>
      </FadeInFromBottom>

      <motion.div
        initial={{ opacity: 0, translateX: 10 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.4, duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 overflow-hidden"
      >
        <p className="text-xl text-gray">{description}</p>
      </motion.div>
    </SectionContainer>
  );
}
