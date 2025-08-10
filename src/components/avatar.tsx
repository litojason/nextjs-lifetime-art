import Image from "next/image";

type AvatarProps = {
  image: string;
  name: string;
};

export default function Avatar({ image, name }: AvatarProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="size-[50px] rounded-full overflow-hidden">
        <Image src={image} alt={name} width={771} height={1024} />
      </div>

      <span>{name}</span>
    </div>
  );
}
