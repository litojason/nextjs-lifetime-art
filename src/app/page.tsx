import Hero from "@/features/home/hero";
import AboutUs from "@/features/home/about-us";
import Statistics from "@/features/home/statistics";
import Services from "@/features/home/services";
import OurWork from "@/features/home/our-work";
import Testimonials from "@/features/home/testimonials";
import Faqs from "@/features/home/faqs";
import Contact from "@/features/home/contact";
import Footer from "@/features/home/footer";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <AboutUs />

      <Statistics />

      <Services />

      <OurWork />

      <Testimonials />

      <Faqs />

      <div className="space-y-4">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
