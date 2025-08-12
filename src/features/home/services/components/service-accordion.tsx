import Image from "next/image";

import AccordionIcon from "@/components/accordion-icon";
import AccordionContent from "@/components/accordion-content";

type ServiceAccordionProps = {
  data: {
    image: string;
    icon: string;
    title: string;
    description: string;
  };
  isExpanded: boolean;
  onClick: () => void;
};

export default function ServiceAccordion({
  data,
  isExpanded,
  onClick,
}: ServiceAccordionProps) {
  const { icon, title, description } = data;

  return (
    <div className="flex flex-col border-b border-border">
      <button
        onClick={onClick}
        className="flex items-center justify-between py-5"
      >
        <div className="flex items-center gap-5">
          <Image src={icon} alt={`${title} Icon`} width={40} height={40} />
          <span className="text-xl font-medium">{title}</span>
        </div>

        <AccordionIcon isExpanded={isExpanded} />
      </button>

      <AccordionContent isExpanded={isExpanded}>
        <p className="text-gray pt-5 pb-8">{description}</p>
      </AccordionContent>
    </div>
  );
}
