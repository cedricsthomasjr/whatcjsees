"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // requires lucide-react or swap icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-neutral-800 px-6 md:px-12 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">WhatCJSees</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-neutral-400 text-sm">
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

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2 text-sm text-neutral-400">
          <Link
            href="/"
            className="block px-4 py-2 rounded hover:bg-neutral-900"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 rounded hover:bg-neutral-900"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block px-4 py-2 rounded hover:bg-neutral-900"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 rounded hover:bg-neutral-900"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
