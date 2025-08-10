import data from "@/data/our-work-data.json";
import Pill from "@/components/pill";
import WorkItem from "@/components/work-item";

const { pill, title, description, works } = data;

export default function OurWork() {
  return (
    <section className="flex flex-col w-full py-30 px-10 gap-24">
      <div className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </div>

      <div className="space-y-5">
        {works.map((item) => (
          <WorkItem key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
}
