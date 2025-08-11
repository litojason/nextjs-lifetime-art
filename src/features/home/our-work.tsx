import data from "@/data/our-work-data.json";
import Pill from "@/components/pill";
import WorkItem from "@/components/work-item";
import FadeInFromBottom from "@/components/fade-in-from-bottom";

const { pill, title, description, works } = data;

export default function OurWork() {
  return (
    <section className="flex flex-col w-full py-30 px-10 gap-24">
      <FadeInFromBottom className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </FadeInFromBottom>

      <div className="space-y-5">
        {works.map((item) => (
          <WorkItem key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
}
