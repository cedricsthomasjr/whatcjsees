import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-neutral-800 px-6 md:px-12 py-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-semibold">WhatCJSees</h1>
      <div className="flex space-x-6 text-neutral-400 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:text-white transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
