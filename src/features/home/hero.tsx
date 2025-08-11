import Image from "next/image";

import data from "@/data/hero-data.json";
import StatusPill from "@/components/status-pill";
import CTAButton from "@/components/cta-button";

export default function Hero() {
  const { title, description } = data;

  return (
    <section className="p-5 bg-hero-bg">
      <div className="relative">
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero Banner"
          width={1500}
          height={841}
          className="object-cover rounded-xl h-[695px]"
        />
        <div className="absolute inset-0 bg-dark-overlay" />

        <div className="absolute top-0 left-0 flex flex-col justify-end size-full py-10 px-5 gap-14">
          <div className="space-y-6">
            <StatusPill>Available for work</StatusPill>

            <h1 className="text-[3.5rem] whitespace-pre-line lg:whitespace-normal">
              {title}
            </h1>
            <p className="text-xl text-hero-desc lg:whitespace-pre-line">
              {description}
            </p>
          </div>

          <CTAButton />
        </div>
      </div>
    </section>
  );
}
