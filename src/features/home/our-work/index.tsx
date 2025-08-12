import data from "@/data/our-work-data.json";
import Pill from "@/components/pill";
import FadeInFromBottom from "@/components/fade-in-from-bottom";
import SectionContainer from "@/components/section-container";
import WorkItemList from "./components/work-item-list";

const { pill, title, description, works } = data;

export default function OurWork() {
  return (
    <SectionContainer className="flex flex-col w-full py-30 2xl:pb-0 px-10 gap-24">
      <FadeInFromBottom className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </FadeInFromBottom>

      <WorkItemList works={works} />
    </SectionContainer>
  );
}
