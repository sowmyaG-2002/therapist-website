"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Dr. Serena Blake
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <a href="#about" className="block py-2 hover:text-primary">About</a>
          <a href="#services" className="block py-2 hover:text-primary">Services</a>
          <a href="#faq" className="block py-2 hover:text-primary">FAQ</a>
          <a href="#contact" className="block py-2 hover:text-primary">Contact</a>
        </div>
      )}
    </header>
  );
}
