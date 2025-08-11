import { motion } from "motion/react";

type StatisticItemProps = {
  data: {
    number: string;
    title: string;
    description: string;
  };
};

export default function StatisticItem({ data }: StatisticItemProps) {
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
