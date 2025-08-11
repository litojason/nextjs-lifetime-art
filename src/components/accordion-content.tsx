"use client";

import { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "motion/react";

interface AccordionContentProps extends PropsWithChildren {
  isExpanded: boolean;
}

export default function AccordionContent({
  isExpanded,
  children,
}: AccordionContentProps) {
  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="accordion-content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={{
              expanded: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
