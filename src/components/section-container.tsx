import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface SectionContainerProps extends PropsWithChildren {
  sectionClassName?: string;
  className?: string;
}

export default function SectionContainer({
  sectionClassName,
  className,
  children,
}: SectionContainerProps) {
  return (
    <section
      className={cn("flex items-center justify-center", sectionClassName)}
    >
      <div className={cn("max-w-[90rem]", className)}>{children}</div>
    </section>
  );
}
