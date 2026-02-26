"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "(Lyon 6) Appartement Foch",
    description: "Rénovation complète d'un appartement haussmannien",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 2,
    title: "(Villeurbanne) Résidence Gratte-Ciel",
    description: "Entretien des parties communes",
    category: "Nettoyage",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: 3,
    title: "(Bron) Maison Familiale",
    description: "Rénovation cuisine et salle de bain",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 4,
    title: "(Lyon 3) Cabinet Médical",
    description: "Nettoyage et désinfection aux normes",
    category: "Nettoyage",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
  {
    id: 5,
    title: "(Lyon 7) Loft Industriel",
    description: "Transformation complète d'un loft",
    category: "Rénovation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 6,
    title: "(Caluire) Villa Contemporaine",
    description: "Nettoyage fin de chantier",
    category: "Nettoyage",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
];

export default function Portfolio() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = 380;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1));
      }
    }
  };

  return (
    <section id="realisations" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            📸 Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Nos dernières réalisations :
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            Découvrez quelques-uns de nos projets récents à Lyon et sa région.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full border-[3px] border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg hidden md:flex"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full border-[3px] border-gray-400 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg hidden md:flex"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="flex-shrink-0 w-[340px] md:w-[380px] snap-center group"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-[32px] border-[3px] border-gray-400 bg-white group-hover:border-gray-500 transition-all group-hover:shadow-xl">
                  {/* Image Container */}
                  <div className="aspect-[3/4] w-full relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                        project.category === "Rénovation"
                          ? "bg-orange-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    </div>
                  </div>

                  {/* Footer */}
                  <Link
                    href="#contact"
                    className="block py-4 text-center text-[11px] font-semibold tracking-[0.25em] text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-all uppercase border-t border-gray-200"
                  >
                    Découvrir le projet
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = 380;
                    const gap = 24;
                    sliderRef.current.scrollTo({
                      left: index * (cardWidth + gap),
                      behavior: "smooth",
                    });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-gray-800 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-full transition-all hover:scale-105"
          >
            Demander un devis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
