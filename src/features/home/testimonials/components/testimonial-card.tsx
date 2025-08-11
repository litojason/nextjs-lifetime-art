import Image from "next/image";

import Avatar from "@/components/avatar";

type TestimonialCardProps = {
  data: {
    review: string;
    author: {
      image: string;
      name: string;
    };
  };
};

export default function TestimonialCard({ data }: TestimonialCardProps) {
  const { review, author } = data;

  return (
    <div className="p-8 space-y-9 bg-light-gray rounded-xl border border-border-card">
      <div className="space-y-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src="/icons/star.svg"
              alt="Star Icon"
              width={20}
              height={20}
            />
          ))}
        </div>

        <p className="text-gray">{review}</p>
      </div>

      <Avatar image={author.image} name={author.name} />
    </div>
  );
}
