export default function Hero() {
  return (
    <section className="relative bg-black text-white px-6 md:px-12 py-32 overflow-hidden">
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        {/* LEFT: HERO TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-4">
            Where light, time,
            <br />
            and perspective
            <br />
            come into focus.
          </h1>
          <p className="text-lg text-neutral-400 max-w-md">
            WhatCJSees is a curated archive of moments that speak — landscapes,
            cityscapes, and scenes that linger.
          </p>
          <a
            href="#featured"
            className="inline-block mt-8 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition"
          >
            View Featured Work →
          </a>
        </div>

        {/* RIGHT: ARTISTIC PHOTO CLUSTER */}
        <div className="relative w-[350px] h-[400px] mx-auto md:mx-0">
          <img
            src="/collections/highpeaks/sample1.jpeg"
            className="absolute top-0 left-6 w-36 rounded-lg rotate-[-3deg] shadow-lg"
            alt=""
          />
          <img
            src="/collections/currents/sample2.jpeg"
            className="absolute top-24 right-0 w-44 rounded-lg rotate-2 shadow-lg"
            alt=""
          />
          <img
            src="/collections/cityscapes/veronacity.jpg"
            className="absolute bottom-0 left-10 w-52 rounded-lg rotate-1 shadow-lg z-10"
            alt=""
          />
          <img
            src="/collections/currents/sample3.jpeg"
            className="absolute bottom-4 right-8 w-32 -z-10 opacity-50 rounded-lg rotate-6 blur-sm"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
