"use client";

import { useState } from "react";

import CarouselIndicator from "@/components/carousel-indicator";
import ImageCard from "@/components/image-card";
import data from "@/data/image-list-data.json";

const { images } = data;

export default function ImageList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-full gap-10">
      <div className="relative flex w-full snap-x snap-mandatory gap-8 overflow-x-auto">
        {images.map((item) => (
          <ImageCard key={item.name} data={item} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {Array.from({ length: images.length }).map((_, i) => (
          <CarouselIndicator key={i} active={activeIndex === i} />
        ))}
      </div>
    </div>
  );
}
