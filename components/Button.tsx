"use client";

import { ButtonProps } from "@/types/Page";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({
  link,
  title,
  styles,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link href={link}>
      <motion.button
        className={`btn ${styles}`}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
      >
        {title}
      </motion.button>
    </Link>
  );
}
