import Image from "next/image";

import { cn } from "@/lib/utils";
import Pill from "./pill";
import Avatar from "./avatar";

export type Work = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  quote: {
    text: string;
    author: {
      image: string;
      name: string;
    };
  };
};

type WorkItemProps = {
  mode: "light" | "dark";
  data: Work;
};

export default function WorkItem({ mode, data }: WorkItemProps) {
  const { image, title, description, tags, quote } = data;

  const isDarkMode = mode === "dark";

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 p-5 gap-x-10 gap-y-2 bg-card rounded-xl",
        { "bg-card-dark": isDarkMode }
      )}
    >
      <div className="col-span-1 xl:row-span-2">
        <Image
          src={image}
          alt={title}
          width={819}
          height={1024}
          className="aspect-square lg:aspect-[432/380.28] xl:aspect-[560/492.96] object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col justify-center col-span-1 gap-6">
        <div className="space-y-[15px]">
          <h3
            className={cn("text-[40px] font-medium", {
              "text-background": isDarkMode,
            })}
          >
            {title}
          </h3>

          <p className={cn("text-gray", { "text-background": isDarkMode })}>
            {description}
          </p>
        </div>

        <div className="flex gap-4">
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 xl:col-span-1 space-y-6">
        <div className="flex items-start gap-2">
          <Image
            src={isDarkMode ? "/icons/quote-white.svg" : "/icons/quote.svg"}
            alt="Quote Icon"
            width={24}
            height={24}
          />

          <p
            className={cn("text-lg text-gray", {
              "text-background": isDarkMode,
            })}
          >
            {quote.text}
          </p>
        </div>

        <div
          className={cn("px-8", {
            "text-background": isDarkMode,
          })}
        >
          <Avatar image={quote.author.image} name={quote.author.name} />
        </div>
      </div>
    </div>
  );
}
