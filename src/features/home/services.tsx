import Image from "next/image";

import data from "@/data/services-data.json";
import Pill from "@/components/pill";
import Accordion from "@/components/accordion";
import FadeInFromBottom from "@/components/fade-in-from-bottom";

const { pill, title, description, services } = data;

export default function Services() {
  return (
    <section className="flex flex-col w-full py-30 px-10 gap-24 bg-light-gray">
      <FadeInFromBottom className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </FadeInFromBottom>

      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <Image
            src="/images/kitchen.png"
            alt="services"
            className="rounded-xl"
            width={400}
            height={500}
          />
        </div>

        <div className="flex-1">
          {services.map((item) => (
            <Accordion key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
