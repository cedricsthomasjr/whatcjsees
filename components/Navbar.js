export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-800 bg-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold">WhatCJSees</h1>
        <nav className="space-x-6 text-sm font-medium text-neutral-400">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
