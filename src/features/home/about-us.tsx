import data from "@/data/about-us-data.json";
import Pill from "@/components/pill";

const { pill, title, description } = data;

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row w-full py-30 px-10 gap-20">
      <div className="flex-1 space-y-1">
        <Pill>{pill}</Pill>

        <h2>{title}</h2>
      </div>

      <p className="flex-1 text-gray">{description}</p>
    </section>
  );
}
