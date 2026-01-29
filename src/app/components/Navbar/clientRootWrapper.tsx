"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import GrainOverlay from "../GrainOverlay/GrainOverlay";

import { ReactNode } from "react";

const pageTransition = { duration: 1.5, ease: [0.16, 1, 0.3, 1] } as const;
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: pageTransition },
  exit: { opacity: 0, transition: pageTransition },
};

export default function ClientRootWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/";

  return (
    <div className="min-h-screen bg-black">
      <GrainOverlay />
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          style={{ position: "relative", zIndex: 10}}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
