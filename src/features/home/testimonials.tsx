import data from "@/data/testimonials-data.json";
import Pill from "@/components/pill";
import TestimonialCard from "@/components/testimonial-card";
import FadeInFromBottom from "@/components/fade-in-from-bottom";

const { pill, title, description, testimonials } = data;

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full pt-30 pb-15 px-10 gap-24">
      <FadeInFromBottom className="space-y-4 text-center">
        <div className="space-y-2">
          <Pill>{pill}</Pill>
          <h2>{title}</h2>
        </div>

        <span className="text-xl text-gray">{description}</span>
      </FadeInFromBottom>

      <div className="flex flex-col gap-12">
        <div className="flex gap-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.review} data={item} />
          ))}
        </div>

        <div className="flex gap-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.review} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
