"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white px-6 md:px-12 pt-28 pb-24">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
            Light. Time. <br /> Perspective.
          </h1>
          <p className="text-lg text-neutral-400 max-w-md">
            A living archive of stillness in motion — landscapes, city scenes,
            and fleeting moments through my lens.
          </p>
          <a
            href="#featured"
            className="inline-block mt-8 px-6 py-2 bg-white text-black font-medium rounded hover:bg-neutral-200 transition"
          >
            Explore the Gallery →
          </a>
        </div>

        {/* RIGHT: IMAGE CLUSTER */}
        <div className="relative w-[420px] h-[500px] mx-auto md:mx-0 scale-105">
          <Image
            src="/collections/highpeaks/peaks.jpeg"
            alt="High peaks"
            width={176}
            height={264}
            className="absolute top-0 left-6 rounded-xl rotate-[-6deg] shadow-2xl z-10 w-40 md:w-44"
          />
          <Image
            src="/collections/currents/sienne.jpeg"
            alt="River in Europe"
            width={208}
            height={288}
            className="absolute top-24 right-0 rounded-xl rotate-3 shadow-2xl z-20 w-48 md:w-52"
          />
          <Image
            src="/collections/cityscapes/inn-flow.jpg"
            alt="Verona city view"
            width={240}
            height={320}
            className="absolute bottom-0 left-10 rounded-xl rotate-1 shadow-2xl z-30 w-56 md:w-60"
          />
          <Image
            src="/collections/currents/sample3.jpeg"
            alt="Water blur detail"
            width={160}
            height={160}
            className="absolute bottom-4 right-8 -z-10 opacity-40 rounded-xl rotate-6 blur-sm w-36 md:w-40"
          />
        </div>
      </div>
    </section>
  );
}
