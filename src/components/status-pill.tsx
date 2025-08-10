import { PropsWithChildren } from "react";

import Pill from "./pill";

export default function StatusPill({ children }: PropsWithChildren) {
  return <Pill>{children}</Pill>;
}
