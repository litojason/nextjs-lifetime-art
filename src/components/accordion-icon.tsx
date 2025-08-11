import Image from "next/image";

type AccordionIconProps = {
  isExpanded: boolean;
};

export default function AccordionIcon({ isExpanded }: AccordionIconProps) {
  return (
    <Image
      className={
        isExpanded ? "transition rotate-[45deg]" : "transition rotate-0"
      }
      src={"/icons/plus.svg"}
      alt="arrow"
      width={24}
      height={24}
    />
  );
}
