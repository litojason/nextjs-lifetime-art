import data from "@/data/faqs-data.json";
import Pill from "@/components/pill";
import FaqAccordion from "@/components/faq-accordion";

const { pill, title, description, faqs } = data;

export default function Faqs() {
  return (
    <section className="flex flex-col w-full py-15 px-10 gap-20">
      <div className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </div>

      <div className="space-y-5">
        {faqs.map((item) => (
          <FaqAccordion key={item.title} data={item} />
        ))}
      </div>
    </section>
  );
}
