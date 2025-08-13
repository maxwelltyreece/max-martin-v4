"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { pageGradients } from "@/lib/pageGradient";
import GrainOverlay from "../GrainOverlay/GrainOverlay";

import { ReactNode } from "react";

export default function ClientRootWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentColors = pageGradients[pathname] || pageGradients["/"];

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
        }}
        animate={{
          background: `linear-gradient(135deg, ${currentColors[0]} 0%, ${currentColors[1]} 50%, ${currentColors[2]} 100%)`,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

      <GrainOverlay />

      <Navbar />

      <main style={{ position: "relative", zIndex: 10, marginTop: "8rem" }}>{children}</main>
    </>
  );
}
