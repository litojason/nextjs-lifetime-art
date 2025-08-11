import Image from "next/image";

export default function CTAButton() {
  return (
    <button className="flex w-fit items-center py-2.5 px-4 gap-6 rounded-4xl bg-background/10 backdrop-blur-[10px]">
      <span className="font-medium text-background">Work with us</span>

      <div className="flex items-center justify-center size-10 rounded-full bg-background">
        <Image
          src="/icons/arrow-right.svg"
          alt="Arrow right"
          width={20}
          height={20}
        />
      </div>
    </button>
  );
}
