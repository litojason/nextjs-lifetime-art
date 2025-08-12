import data from "@/data/faqs-data.json";
import Pill from "@/components/pill";
import FadeInFromBottom from "@/components/fade-in-from-bottom";
import SectionContainer from "@/components/section-container";
import FadeInFromRight from "@/components/fade-in-from-right";
import FaqAccordion from "./components/faq-accordion";
import GetInTouchButton from "./components/get-in-touch-button";

const { pill, title, description, faqs } = data;

export default function Faqs() {
  return (
    <SectionContainer className="flex flex-col 2xl:flex-row w-full py-15 px-10 gap-20">
      <FadeInFromBottom className="2xl:flex-1 flex flex-col items-center 2xl:items-start gap-4 text-center 2xl:text-left">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>

        <div className="mt-14">
          <GetInTouchButton />
        </div>
      </FadeInFromBottom>

      <FadeInFromRight className="2xl:flex-2 space-y-5">
        {faqs.map((item) => (
          <FaqAccordion key={item.title} data={item} />
        ))}
      </FadeInFromRight>
    </SectionContainer>
  );
}
