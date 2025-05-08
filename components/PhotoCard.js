import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ image }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg flex flex-col">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-4 bg-neutral-900/80 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-white">{image.title}</h3>
          <p className="text-sm text-neutral-400">{image.category}</p>
        </div>
        <Link
          href={`/projects/${image.id}`} // eventually map image to collection slug
          className="mt-4 inline-block text-sm text-white  hover:  text-zinc-400"
        >
          View Collection →
        </Link>
      </div>
    </div>
  );
}
