"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-black text-white px-6 pt-20 md:pt-0 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 🔠 TEXT LEFT */}
        <div className="space-y-10 text-center md:text-left flex flex-col justify-center h-full">
          {/* Slash Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="origin-left h-[2px] w-32 bg-white mx-auto md:mx-0"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] uppercase"
          >
            Light. <br /> Time. <br /> Perspective.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto md:mx-0"
          >
            A precision-crafted lens on stillness and speed — from city shadows
            to alpine edges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#featured"
              className="inline-block mt-4 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition"
            >
              View the Gallery →
            </a>
          </motion.div>

          {/* 📊 Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm text-neutral-500 tracking-wide font-mono flex gap-6 flex-wrap justify-center md:justify-start pt-6"
          >
            <span>📍 6 Countries Shot!</span>
            <span>🎞 20+ Frames</span>
            <span>🕒 Moments That Linger</span>
          </motion.div>
        </div>

        {/* 🖼️ IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 grid-rows-3 h-[520px]">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/collections/cityscapes/veronaian-bustle.JPG"
              alt="Verona"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Tall Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="row-span-2"
          >
            <Image
              src="/collections/cityscapes/the-floating-city.jpeg"
              alt="Venice"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="/collections/high peaks/suspension-crossing.jpeg"
              alt="Suspension Bridge"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Full Width Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="col-span-2 row-span-2"
          >
            <Image
              src="/collections/currents/sugar-pot.jpeg"
              alt="Sugar Pot"
              width={1600}
              height={800}
              className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
