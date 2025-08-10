"use client";

import Image from "next/image";
import { useState } from "react";

type FaqAccordionProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function FaqAccordion({ data }: FaqAccordionProps) {
  const { title, description } = data;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col py-6 px-5 gap-5 bg-light-gray rounded-xl border border-border-card">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex items-center justify-between gap-4"
      >
        <span className="text-xl font-medium text-left">{title}</span>

        <Image
          className={
            isOpen ? "transition rotate-[45deg]" : "transition rotate-0"
          }
          src={"/icons/plus.svg"}
          alt="arrow"
          width={24}
          height={24}
        />
      </button>

      {isOpen && <p className="text-gray">{description}</p>}
    </div>
  );
}
