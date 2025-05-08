import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoCard from "@/components/PhotoCard";
import Footer from "@/components/Footer";

const dummyImages = [
  {
    id: "1",
    src: "/collections/cityscapes/city.jpg",
    alt: "City View",
    title: "Cityscapes",
    category: "Cityscapes",
  },
  {
    id: "2",
    src: "/collections/currents/verona.jpg",
    alt: "Verona River View",
    title: "Currents",
    category: "Currents",
  },
  {
    id: "3",
    src: "/collections/highpeaks/highpeaks.jpg",
    alt: "Mountain Overlook",
    title: "High Peaks",
    category: "High Peaks",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <section className="px-6 md:px-12 py-10 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {dummyImages.map((img) => (
            <PhotoCard key={img.id} image={img} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
