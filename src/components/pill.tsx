import { PropsWithChildren } from "react";

export default function Pill({ children }: PropsWithChildren) {
  return (
    <div className="inline-block py-2 px-3 rounded-3xl bg-pill-bg text-pill-text">
      {children}
    </div>
  );
}
