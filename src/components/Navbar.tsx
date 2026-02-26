"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Nettoyage", href: "#nettoyage" },
  { name: "Rénovation", href: "#renovation" },
  { name: "Réalisations", href: "#realisations" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled ? "bg-white/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
    }`}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {/* Navbar avec bordure */}
        <div className={`flex items-center justify-between rounded-full px-3 py-2 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-2 border-gray-300 shadow-lg"
            : "bg-white/90 backdrop-blur-sm border-2 border-gray-800"
        }`}>
          {/* Logo avec fond beige */}
          <Link
            href="#accueil"
            className="flex items-center gap-2 px-4 py-1.5 bg-[#f5ebe0] rounded-full border border-gray-300"
          >
            <Image
              src="/images/logo.png"
              alt="ADM Services"
              width={40}
              height={40}
              className="rounded-full object-contain"
            />
            <span className="font-bold text-base text-black tracking-tight">ADM SERVICES.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] text-gray-600 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="#contact"
              className="px-6 py-3 bg-[#d4e4bc] hover:bg-[#c5d9a4] text-black text-[15px] font-medium rounded-full transition-colors"
            >
              Devis gratuit
            </Link>
            <Link
              href="tel:+33636200985"
              className="px-6 py-3 border-2 border-gray-800 text-gray-700 text-[15px] rounded-full hover:bg-gray-50 transition-colors"
            >
              +33 6 36 20 09 85
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-3xl p-6 border-2 border-gray-800 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-black py-2 text-lg"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-3 bg-[#d4e4bc] text-black text-center font-medium rounded-full"
                >
                  Devis gratuit
                </Link>
                <Link
                  href="tel:+33636200985"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-3 border-2 border-gray-800 text-gray-700 text-center rounded-full"
                >
                  +33 6 36 20 09 85
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
