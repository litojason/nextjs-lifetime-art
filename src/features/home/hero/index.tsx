import data from "@/data/hero-data.json";
import SectionContainer from "@/components/section-container";
import HeroImage from "./components/hero-image";
import StatusPill from "./components/status-pill";
import HeroText from "./components/hero-text";
import CTAButton from "./components/cta-button";

export default function Hero() {
  const { title, description } = data;

  return (
    <SectionContainer sectionClassName="bg-hero-bg" className="p-5 pt-0">
      <div className="relative">
        <HeroImage />

        <div className="absolute inset-0 bg-dark-overlay" />

        <div className="absolute top-0 left-0 flex flex-col justify-end size-full py-10 px-5 gap-14">
          <div className="space-y-6">
            <StatusPill>Available for work</StatusPill>

            <HeroText lines={title.split("\n")} description={description} />
          </div>

          <CTAButton />
        </div>
      </div>
    </SectionContainer>
  );
}
