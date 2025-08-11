import Image from "next/image";

import data from "@/data/contact-data.json";
import Pill from "@/components/pill";
import FadeInFromBottom from "@/components/fade-in-from-bottom";
import SectionContainer from "@/components/section-container";
import SendMessageForm from "./components/send-message-form";

const { pill, title, description, contactInfo, social } = data;

export default function Contact() {
  return (
    <SectionContainer className="flex flex-col w-full px-5 gap-2">
      <div
        id="contact"
        className="flex flex-col lg:flex-row items-center py-15 px-5 gap-25 rounded-xl bg-foreground"
      >
        <FadeInFromBottom className="flex-1 w-full space-y-12">
          <div className="space-y-5">
            <Pill>{pill}</Pill>

            <h2 className="text-5xl font-medium text-background">{title}</h2>

            <span className="text-xl text-hero-desc">{description}</span>
          </div>

          <div className="space-y-7.5 pb-7.5 border-b border-border/10">
            {contactInfo.map((item) => (
              <ContactItem key={item.title} data={item} />
            ))}
          </div>

          <Social />
        </FadeInFromBottom>

        <FadeInFromBottom className="flex-1 w-full">
          <SendMessageForm />
        </FadeInFromBottom>
      </div>
    </SectionContainer>
  );
}

type ContactItemProps = {
  data: {
    title: string;
    description: string;
  };
};
function ContactItem({ data }: ContactItemProps) {
  const { title, description } = data;

  return (
    <div className="space-y-3">
      <div className="text-lg font-semibold text-background">{title}</div>
      <span className="text-xl text-hero-desc">{description}</span>
    </div>
  );
}

function Social() {
  return (
    <div className="space-y-4">
      <span className="text-lg font-semibold text-background">
        {social.title}
      </span>

      <div className="flex gap-5">
        {social.data.map((item) => (
          <div key={item.name}>
            <Image src={item.icon} alt={item.name} width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  );
}
