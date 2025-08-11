"use client";

import { motion } from "motion/react";

import statistics from "@/data/statistics-data.json";
import StatisticItem from "./components/statistic-item";

export default function Statistics() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 py-30 px-10"
    >
      {statistics.map((item) => (
        <StatisticItem key={item.title} data={item} />
      ))}
    </motion.section>
  );
}
