"use client";

import { motion } from "framer-motion";

import statistics from "@/data/statistics-data.json";

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

type StatisticItemProps = {
  data: {
    number: string;
    title: string;
    description: string;
  };
};
function StatisticItem({ data }: StatisticItemProps) {
  const { number, title, description } = data;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-2"
    >
      <span className="text-7xl font-light">{number}</span>
      <span className="text-xl font-semibold">{title}</span>
      <span className="text-gray">{description}</span>
    </motion.div>
  );
}
