import { cn } from "@/lib/utils";

type CarouselIndicatorProps = {
  active?: boolean;
};

export default function CarouselIndicator({ active }: CarouselIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-5 h-7.5">
      <div
        className={cn("size-2.5 rounded-full bg-foreground", {
          "opacity-50": !active,
        })}
      />
    </div>
  );
}
