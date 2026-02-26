"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🛡️", title: "Fiabilité", description: "Équipe professionnelle et ponctuelle" },
  { icon: "🌿", title: "Écologie", description: "Produits respectueux de l'environnement" },
  { icon: "⭐", title: "Qualité", description: "Finitions impeccables garanties" },
  { icon: "❤️", title: "Engagement", description: "Satisfaction client prioritaire" },
];

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16"
        >
          Pourquoi nous choisir :
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[32px] border-[3px] border-gray-400 overflow-hidden bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] aspect-[4/3] flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-sm">Image de l'équipe</p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] border-[3px] border-gray-400 p-6 hover:border-gray-300 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-[32px] border-[3px] border-gray-400 p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            Basés à <strong className="text-black">Lyon</strong>, nous mettons notre expertise au service de vos projets
            de nettoyage et de rénovation depuis plus de <strong className="text-black">10 ans</strong>. Notre engagement :
            des prestations de qualité, dans le respect de l'environnement et de vos attentes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
