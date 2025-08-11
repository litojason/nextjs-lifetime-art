"use client";

import { motion } from "motion/react";

import WorkItem, { Work } from "./work-item";

type WorkItemListProps = {
  works: Work[];
};

export default function WorkItemList({ works }: WorkItemListProps) {
  return (
    <div className="space-y-5">
      {works.map((item, index) => (
        <motion.div
          key={item.title}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.2, duration: 0.2 }}
        >
          <WorkItem data={item} mode={index % 2 === 0 ? "light" : "dark"} />
        </motion.div>
      ))}
    </div>
  );
}
