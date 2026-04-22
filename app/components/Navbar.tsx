"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-gray-700/50">
      <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              🚗
            </div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              CarWash
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/book"
            className="hidden lg:inline-flex bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link
              href="/book"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-gray-700/50 backdrop-blur-xl rounded-b-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 block font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 block font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 block font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
