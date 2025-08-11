"use client";

import { useState } from "react";

import AccordionContent from "./accordion-content";
import AccordionIcon from "./accordion-icon";

type FaqAccordionProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function FaqAccordion({ data }: FaqAccordionProps) {
  const { title, description } = data;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col py-6 px-5 bg-light-gray rounded-xl border border-border-card">
      <button
        onClick={() => setIsExpanded((prevState) => !prevState)}
        className="flex items-center justify-between gap-4"
      >
        <span className="text-xl font-medium text-left">{title}</span>

        <AccordionIcon isExpanded={isExpanded} />
      </button>

      <AccordionContent isExpanded={isExpanded}>
        <p className="text-gray pt-5">{description}</p>
      </AccordionContent>
    </div>
  );
}
