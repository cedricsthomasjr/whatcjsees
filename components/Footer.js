export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-muted-foreground px-6 md:px-12 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} WhatCJSees. Built by CJ Thomas.
        </p>

        {/* Center: Nav */}
        <nav className="flex gap-6 text-sm">
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
    </footer>
  );
}
