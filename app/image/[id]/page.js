"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import gallery from "@/data/gallery.json";

export default function ImagePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const photo = gallery.find((img) => img.id === params.id);
  if (!photo) return notFound();

  const [zoomed, setZoomed] = useState(false);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  };

  const similar = gallery
    .filter(
      (img) =>
        img.category === photo.category &&
        img.id !== photo.id &&
        !["1", "2", "3"].includes(img.id)
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-24">
        {/* 🔙 Back Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/#featured"
            className="group inline-flex items-center text-sm text-neutral-400 hover:text-white transition font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Gallery
          </Link>
        </div>

        {/* 📝 Title + Description */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              {photo.title}
            </h1>
            {photo.description && (
              <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
                {photo.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-neutral-400">
            {photo.location && (
              <div title="Location">
                <p className="text-neutral-500 text-xs uppercase mb-1 tracking-wide">
                  Location
                </p>
                <p className="text-white font-medium">{photo.location}</p>
              </div>
            )}
            {photo.date && (
              <div title="Capture Date">
                <p className="text-neutral-500 text-xs uppercase mb-1 tracking-wide">
                  Captured
                </p>
                <p className="text-white font-medium">{photo.date}</p>
              </div>
            )}
            {photo.category && (
              <div title="Collection">
                <p className="text-neutral-500 text-xs uppercase mb-1 tracking-wide">
                  Collection
                </p>
                <p className="text-white font-medium">{photo.category}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* 🖼️ Hero Image w/ Zoom */}
        <div
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl pt-4"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            style={{ transformOrigin: `${pos.x} ${pos.y}` }}
            className="object-cover rounded-2xl transition-transform duration-300 ease-out hover:scale-200"
          />
        </div>

        {/* 🔍 Zoom Modal */}
        {zoomed && (
          <div
            onClick={() => setZoomed(false)}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-zoom-out"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={1600}
              height={1200}
              className="rounded-xl max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        )}

        {/* ⚙️ Technical Info */}
        {(photo.camera || photo.lens || photo.settings || photo.software) && (
          <div className="pt-16 border-t border-neutral-800 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Technical Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm bg-neutral-900/40 p-6 rounded-xl border border-neutral-800">
              {photo.camera && (
                <div title="Camera Used">
                  <p className="text-xs uppercase text-neutral-500 tracking-wide mb-1">
                    Camera
                  </p>
                  <p className="text-white font-mono">{photo.camera}</p>
                </div>
              )}
              {photo.lens && (
                <div title="Lens Info">
                  <p className="text-xs uppercase text-neutral-500 tracking-wide mb-1">
                    Lens
                  </p>
                  <p className="text-white font-mono">{photo.lens}</p>
                </div>
              )}
              {photo.settings && (
                <div title="Exposure Settings">
                  <p className="text-xs uppercase text-neutral-500 tracking-wide mb-1">
                    Settings
                  </p>
                  <p className="text-white font-mono">{photo.settings}</p>
                </div>
              )}
              {photo.software && (
                <div title="Editing Software">
                  <p className="text-xs uppercase text-neutral-500 tracking-wide mb-1">
                    Edited In
                  </p>
                  <p className="text-white font-mono">{photo.software}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 🎨 Color Palette */}
        {photo.palette && photo.palette.length > 0 && (
          <div className="pt-12 border-t border-neutral-800 space-y-6">
            <h2 className="text-xl font-semibold text-white">Color Palette</h2>
            <div className="flex gap-3">
              {photo.palette.map((hex, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border shadow-md"
                  style={{ backgroundColor: hex }}
                  title={hex}
                />
              ))}
            </div>
          </div>
        )}

        {/* 🤝 Share */}
        <div className="pt-12 border-t border-neutral-800 space-y-4">
          <h2 className="text-xl font-semibold text-white">Share This Shot</h2>
          <div className="flex gap-6 items-center text-neutral-400 text-sm">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              X
            </a>
            <button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="hover:text-white transition"
              title="Copy link to clipboard"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* 🧠 Similar */}
        {similar.length > 0 && (
          <div className="pt-12 border-t border-neutral-800 space-y-6">
            <h2 className="text-xl font-semibold text-white">More Like This</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similar.map((img) => (
                <Link
                  key={img.id}
                  href={`/image/${img.id}`}
                  className="group relative block overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm text-white">
                    <p className="text-sm font-medium">{img.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
