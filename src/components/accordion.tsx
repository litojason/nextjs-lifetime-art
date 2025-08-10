"use client";

import { useState } from "react";
import Image from "next/image";

type AccordionProps = {
  data: { icon: string; title: string; description: string };
};

export default function Accordion({ data }: AccordionProps) {
  const { icon, title, description } = data;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5 border-b border-border">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="flex items-center justify-between py-5"
      >
        <div className="flex items-center gap-5">
          <Image src={icon} alt={`${title} Icon`} width={40} height={40} />
          <span className="text-xl font-medium">{title}</span>
        </div>

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

      {isOpen && <p className="text-gray pb-8">{description}</p>}
    </div>
  );
}
