import statistics from "@/data/statistics-data.json";

export default function Statistics() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 py-30 px-10">
      {statistics.map((item) => (
        <StatisticItem key={item.title} data={item} />
      ))}
    </section>
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
    <div className="flex flex-col gap-2">
      <span className="text-7xl font-light">{number}</span>
      <span className="text-xl font-semibold">{title}</span>
      <span className="text-gray">{description}</span>
    </div>
  );
}
