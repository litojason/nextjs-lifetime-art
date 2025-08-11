"use client";

import { useState } from "react";
import Image from "next/image";

import Logo from "./logo";

type MobileNavBarProps = {
  menus: string[];
};

export default function MobileNavBar({ menus }: MobileNavBarProps) {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="lg:hidden w-full p-5 pb-0">
      <div className="flex items-center justify-between py-[15px] px-5">
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

      {visible && (
        <div className="absolute top-17.5 right-0 left-0 bg-mobile-nav-overlay backdrop-blur-[10px] z-10">
          <div className="flex flex-col w-screen h-screen pt-20 px-10 pb-10 gap-20">
            <ul className="space-y-6">
              {menus.map((menu) => (
                <NavItem key={menu} name={menu} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

type NavItemProps = {
  name: string;
};
function NavItem({ name }: NavItemProps) {
  return <li className="text-2xl text-background">{name}</li>;
}
