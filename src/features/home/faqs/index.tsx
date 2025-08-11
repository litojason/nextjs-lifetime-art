import data from "@/data/faqs-data.json";
import Pill from "@/components/pill";
import FadeInFromBottom from "@/components/fade-in-from-bottom";
import FaqAccordion from "./components/faq-accordion";
import GetInTouchButton from "./components/get-in-touch-button";

const { pill, title, description, faqs } = data;

export default function Faqs() {
  return (
    <section className="flex flex-col w-full py-15 px-10 gap-20">
      <FadeInFromBottom className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>

        <div className="mt-14">
          <GetInTouchButton />
        </div>
      </FadeInFromBottom>

      <FadeInFromBottom className="space-y-5">
        {faqs.map((item) => (
          <FaqAccordion key={item.title} data={item} />
        ))}
      </FadeInFromBottom>
    </section>
  );
}
