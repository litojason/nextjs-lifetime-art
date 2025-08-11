"use client";

import { useState } from "react";
import Image from "next/image";

import AccordionContent from "./accordion-content";
import AccordionIcon from "./accordion-icon";

type ServiceAccordionProps = {
  data: {
    icon: string;
    title: string;
    description: string;
  };
};

export default function ServiceAccordion({ data }: ServiceAccordionProps) {
  const { icon, title, description } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col border-b border-border">
      <button
        onClick={() => setIsExpanded((prevState) => !prevState)}
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
