"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Athlytic",
    description:
      "NBA & CFB stat explorer powered by AI blurbs, advanced analytics, and player breakdowns. Built with React, Flask, and the NBA API.",
    tech: ["React", "Tailwind", "Flask", "nba_api", "Selenium"],
    status: "In Progress",
    link: "https://athlytic.vercel.app",
  },
  {
    title: "WhatCJSees",
    description:
      "Photography portfolio that captures urban texture, motion, and quiet — with dynamic filtering and routing.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "JSON API"],
    status: "Live",
    link: "https://whatcjsees.com",
  },
  {
    title: "DegreeMind",
    description:
      "AI-powered degree planner for students to map courses, align majors, and visualize career paths.",
    tech: ["React", "OpenAI API", "MongoDB", "Express"],
    status: "Design Phase",
    link: "#",
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <section className="max-w-5xl mx-auto space-y-20">
        {/* 👋 Back Link */}
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition mb-10 inline-block"
        >
          ← Back to Home
        </Link>

        {/* 🔖 Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            From product builds to portfolio polish — here’s what I’ve been
            coding, designing, and shipping.
          </p>
        </motion.div>

        {/* 🧠 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(i * 0.2)}
              className="block border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 rounded-xl p-6 space-y-4 transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{proj.title}</h2>
                <span className="text-xs px-2 py-1 rounded-full border border-neutral-600 text-neutral-400">
                  {proj.status}
                </span>
              </div>
              <p className="text-neutral-400">{proj.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 border border-neutral-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
