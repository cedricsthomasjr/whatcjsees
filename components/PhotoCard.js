import Image from "next/image";

export default function PhotoCard({
  image,
  showLink = false,
  onViewCollection,
}) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg flex flex-col h-full">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-3 bg-neutral-900/80 flex flex-col justify-between flex-grow">
        {/* Title + Category */}
        <div className="min-h-[3.5rem]">
          <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg leading-snug line-clamp-2">
            {image.title}
          </h3>
          <p className="text-xs text-neutral-400">{image.category}</p>
        </div>

        {/* Optional Button */}
        {showLink && (
          <button
            onClick={onViewCollection}
            className="mt-3 text-sm text-white hover:text-zinc-400 transition self-start"
          >
            View Collection →
          </button>
        )}
      </div>
    </div>
  );
}
