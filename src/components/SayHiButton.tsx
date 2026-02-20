"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SayHiButton() {
  return (
    <Link href="/contact">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-semibold shadow-2xl cursor-pointer glow-effect flex items-center gap-2">

        <span className="text-2xl">👋</span>
        <span className="!text-white">Say Hi!</span>
      </motion.div>
    </Link>);

}