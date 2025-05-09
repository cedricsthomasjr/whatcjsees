"use client";

import { useRef, useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import galleryData from "@/data/gallery.json";
import Link from "next/link";

const featured = galleryData.slice(0, 3);
const gallery = galleryData.slice(3);
const categories = ["All", ...new Set(gallery.map((img) => img.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterRef = useRef(null);

  const handleViewCollection = (category) => {
    setSelectedCategory(category);
    // 👇 Smooth scroll to the category pills
    setTimeout(() => {
      filterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const filteredGallery =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((img) => img.category === selectedCategory);

  return (
    <section
      id="featured"
      className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto"
    >
      {/* ⭐ Featured Work */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((img) => (
            <PhotoCard
              key={img.id}
              image={img}
              showLink
              onViewCollection={() => handleViewCollection(img.category)}
            />
          ))}
        </div>
      </div>

      {/* 🖼️ Full Gallery Heading */}
      <h2 className="text-2xl font-semibold mb-4" ref={filterRef}>
        Full Gallery
      </h2>

      {/* 🧭 Category Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-white text-black font-semibold"
                : "border-white text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🖼️ Filtered Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGallery.map((img) => (
          <Link key={img.id} href={`/image/${img.id}`}>
            <PhotoCard image={img} />
          </Link>
        ))}
      </div>
    </section>
  );
}
