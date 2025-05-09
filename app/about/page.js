"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  },
});

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* SECTION 1 – One Sentence Manifesto */}
      <section className="h-screen relative flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
        <Image
          src="/collections/cityscapes/the-floating-city.jpeg"
          alt="Floating City"
          fill
          className="object-cover opacity-30"
        />
        <motion.div
          className="relative z-10 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.3)}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Shooting pauses time.
          </h1>
          <p className="text-xl text-neutral-400">
            This website lets me share it.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 – Floating Thoughts */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            "Some moments  show up once. I try not to miss them.",
            "Light pulls me in. Motion holds me there.",
            "I don’t force the shot — I just stay ready.",
          ].map((line, i) => (
            <motion.p
              key={i}
              className="text-3xl md:text-4xl font-light text-center text-neutral-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp(i * 0.2)}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </section>

      {/* SECTION 3 – Dynamic Split Scroll */}
      <section className="grid md:grid-cols-2 min-h-[90vh] bg-black">
        <motion.div
          className="relative h-[500px] md:h-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
        >
          <Image
            src="/collections/currents/myrtle-lake.jpeg"
            alt="Myrtle Lake"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="flex items-center justify-center px-10 py-24 bg-[#0e0e0e]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.2)}
        >
          <div className="space-y-6 max-w-md text-left">
            <h2 className="text-4xl font-semibold">
              Every shot is a timestamp.
            </h2>
            <p className="text-neutral-400 text-lg">
              Not for likes. Not for perfection. Just to prove I saw it. Just to
              feel it again later.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 – Gallery Carousel Vibe */}
      <section className="py-24 px-6 md:px-12 bg-[#0b0b0b]">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
        >
          Here’s what I kept
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {[
            "/collections/high peaks/austrian-paragliders.jpg",
            "/collections/currents/clouds-over-tyrol.jpg",
            "/collections/high peaks/quartz-wall.jpeg",
            "/collections/cityscapes/the-floating-city.jpeg",
            "/collections/currents/still-gondolas.jpg",
            "/collections/high peaks/river-pulse.jpeg",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="relative h-[300px] rounded-lg overflow-hidden shadow-lg group"
              variants={fadeUp(i * 0.1)}
            >
              <Image
                src={src}
                alt={`Kept Frame ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 5 – Collab CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-center">
        <motion.div
          className="max-w-2xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.2)}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Want to pause time together?
          </h2>
          <p className="text-neutral-400 text-lg">
            Hit me up if you’re trying to shoot, build, or just share ideas. If
            you see what I see — we’ll make something timeless.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Reach Out →
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
