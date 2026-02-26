"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-[32px] border-[3px] border-gray-400 bg-[#d4e4bc] p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à transformer votre espace ?
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
          </p>
          <Link
            href="#contact"
            className="inline-block px-10 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-full transition-all hover:scale-105"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
