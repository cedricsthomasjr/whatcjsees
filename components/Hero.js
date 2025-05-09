"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-12 pt-24 pb-20">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* GRID: 1 COL MOBILE, 2 COL DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 text-center md:text-left">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight tracking-tight mb-4">
              Light. Time. <br /> Perspective.
            </h1>
            <p className="text-base md:text-lg text-neutral-400 max-w-md mx-auto md:mx-0">
              A living archive of stillness in motion — landscapes, city scenes,
              and fleeting moments through my lens.
            </p>
            <a
              href="#featured"
              className="inline-block mt-6 md:mt-8 px-6 py-2 bg-white text-black font-medium rounded hover:bg-neutral-200 transition"
            >
              Explore the Gallery →
            </a>
          </div>

          {/* UNIFIED IMAGE CLUSTER */}
          <div className="relative w-full max-w-[300px] h-[320px] sm:max-w-[340px] sm:h-[360px] md:max-w-[420px] md:h-[500px] mx-auto md:mx-0 scale-105">
            <Image
              src="/collections/highpeaks/peaks.jpeg"
              alt="High peaks"
              width={160}
              height={240}
              className="absolute top-0 left-4 sm:left-6 rounded-xl rotate-[-6deg] shadow-2xl z-10 w-28 sm:w-36 md:w-44"
            />
            <Image
              src="/collections/currents/sienne.jpeg"
              alt="River"
              width={208}
              height={288}
              className="absolute top-20 right-0 rounded-xl rotate-3 shadow-2xl z-20 w-32 sm:w-40 md:w-52"
            />
            <Image
              src="/collections/cityscapes/inn-flow.jpg"
              alt="Verona"
              width={240}
              height={320}
              className="absolute bottom-0 left-6 sm:left-10 rounded-xl rotate-1 shadow-2xl z-30 w-36 sm:w-48 md:w-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
