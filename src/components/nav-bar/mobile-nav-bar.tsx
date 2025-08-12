"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, stagger } from "motion/react";

import Logo from "../logo";

type MobileNavBarProps = {
  menus: string[];
};

const ulVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.1),
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const liVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 50, opacity: 0 },
};

export default function MobileNavBar({ menus }: MobileNavBarProps) {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex flex-col lg:hidden justify-center w-full h-24 px-5">
      <div className="flex items-center justify-between px-5">
        <Logo />

        <button
          onClick={() => setVisible((prevState) => !prevState)}
          className="size-10"
        >
          <Image
            src={visible ? "/icons/close.svg" : "/icons/hamburger.svg"}
            alt={visible ? "Close" : "Hamburger"}
            width={40}
            height={20}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {visible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 right-0 left-0 bg-mobile-nav-overlay backdrop-blur-[10px] z-10"
          >
            <div className="flex flex-col w-screen h-screen p-10 gap-20">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={ulVariants}
                className="space-y-6"
              >
                {menus.map((menu) => (
                  <NavItem key={menu} name={menu} />
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

type NavItemProps = {
  name: string;
};
function NavItem({ name }: NavItemProps) {
  return (
    <motion.li variants={liVariants} className="text-2xl text-background">
      {name}
    </motion.li>
  );
}
