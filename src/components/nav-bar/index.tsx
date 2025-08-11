"use client";

import { motion } from "motion/react";

import DesktopNavBar from "./desktop-nav-bar";
import MobileNavBar from "./mobile-nav-bar";

const menus = ["About", "Services", "Our Work", "FAQs", "Contact"];

export default function NavBar() {
  return (
    <div className="w-full bg-foreground">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <DesktopNavBar menus={menus} />

        <MobileNavBar menus={menus} />
      </motion.div>
    </div>
  );
}
