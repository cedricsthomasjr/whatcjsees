"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = (dir = "up", delay = 0) => ({
  hidden: { opacity: 0, y: dir === "up" ? 20 : 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <section className="max-w-4xl mx-auto space-y-20">
        {/* 👋 Back Link */}
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition mb-10 inline-block"
        >
          ← Back to Home
        </Link>

        {/* 📝 Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0)}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Whether it’s creative work, tech collabs, or just to say what’s up —
            drop a line.
          </p>
        </motion.div>

        {/* 📬 Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.2)}
          className="grid gap-5"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-neutral-200 transition w-max"
          >
            Send →
          </button>
        </motion.form>

        {/* 📱 Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn("up", 0.4)}
          className="text-center text-neutral-500"
        >
          <p>
            Email:{" "}
            <a href="mailto:cj@whatcjsees.com" className="underline">
              cj@whatcjsees.com
            </a>
          </p>
          <p className="mt-2">
            IG:{" "}
            <a
              href="https://instagram.com/whatcjsees"
              target="_blank"
              className="underline"
            >
              @whatcjsees
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
