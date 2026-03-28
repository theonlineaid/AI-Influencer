"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
};

export function HoverLift({ children, className }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}
