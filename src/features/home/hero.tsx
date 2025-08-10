import data from "@/data/hero-data.json";
import StatusPill from "@/components/status-pill";

export default function Hero() {
  const { title, description } = data;

  return (
    <section className="pt-[98px] px-5 pb-5 h-[813px] bg-hero-bg">
      <StatusPill>Available for work</StatusPill>

      <h1>{title}</h1>
      <p className="text-hero-desc">{description}</p>
    </section>
  );
}
