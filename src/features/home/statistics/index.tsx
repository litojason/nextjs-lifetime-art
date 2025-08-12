"use client";

import { motion, stagger } from "motion/react";

import statistics from "@/data/statistics-data.json";
import SectionContainer from "@/components/section-container";
import StatisticItem from "./components/statistic-item";

export default function Statistics() {
  return (
    <SectionContainer className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: stagger(0.1),
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-30 py-30 px-10"
      >
        {statistics.map((item) => (
          <StatisticItem key={item.title} data={item} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
