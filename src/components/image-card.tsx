import Image from "next/image";

type ImageCardProps = {
  data: {
    name: string;
    url: string;
  };
};

export default function ImageCard({ data }: ImageCardProps) {
  const { name, url } = data;

  return (
    <Image
      src={url}
      alt={name}
      width={400}
      height={500}
      className="w-80 h-100 2xl:w-100 2xl:h-125 object-cover"
    />
  );
}
