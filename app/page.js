"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-24"
      >
        <Hero />
        <Gallery />
        <Footer />
      </motion.div>
    </main>
  );
}
