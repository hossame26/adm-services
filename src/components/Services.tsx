"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";
import { getWhatsAppLink } from "./WhatsAppButton";

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  category: "nettoyage" | "renovation";
  image: string;
  tags: string[];
}

const nettoyageServices: Service[] = [
  {
    id: "syndics",
    title: "Syndics & Copropriétés",
    icon: "🏢",
    description: "Entretien complet et régulier des parties communes de vos immeubles pour un environnement propre et accueillant.",
    features: [
      "Nettoyage des halls d'entrée et escaliers",
      "Entretien des ascenseurs",
      "Nettoyage des locaux poubelles",
      "Lavage des vitres et miroirs",
      "Entretien des espaces extérieurs",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    tags: ["Professionnel", "Régulier"],
  },
  {
    id: "medical",
    title: "Cabinets Médicaux",
    icon: "🏥",
    description: "Nettoyage et désinfection professionnelle aux normes sanitaires strictes pour les établissements de santé.",
    features: [
      "Désinfection des surfaces de contact",
      "Nettoyage des salles d'attente",
      "Entretien des sanitaires aux normes",
      "Gestion des déchets médicaux",
      "Protocoles anti-contamination",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    tags: ["Sanitaire", "Normes"],
  },
  {
    id: "commercial",
    title: "Locaux Commerciaux",
    icon: "🏪",
    description: "Maintenez une image professionnelle avec un entretien régulier de vos bureaux et espaces commerciaux.",
    features: [
      "Nettoyage des bureaux et open-spaces",
      "Entretien des sanitaires",
      "Nettoyage des cuisines et espaces détente",
      "Dépoussiérage du mobilier",
      "Nettoyage des sols tous types",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Bureau", "Commercial"],
  },
  {
    id: "restaurant",
    title: "Restaurants & Brasseries",
    icon: "🍽️",
    description: "Nettoyage professionnel conforme aux normes HACCP pour les établissements de restauration.",
    features: [
      "Nettoyage cuisine professionnelle",
      "Dégraissage hottes et extracteurs",
      "Entretien salle et terrasse",
      "Nettoyage chambre froide",
      "Respect des normes HACCP",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["HACCP", "Restaurant"],
  },
  {
    id: "fin-chantier",
    title: "Fin de Chantier",
    icon: "🔨",
    description: "Remise en état complète après travaux pour une livraison impeccable de vos locaux.",
    features: [
      "Évacuation des gravats et déchets",
      "Nettoyage des poussières de chantier",
      "Décapage des sols",
      "Nettoyage des vitres et menuiseries",
      "Remise en état complète",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    tags: ["Chantier", "Livraison"],
  },
  {
    id: "maison",
    title: "Maisons & Appartements",
    icon: "🏠",
    description: "Service de ménage régulier ou ponctuel adapté à vos besoins et votre emploi du temps.",
    features: [
      "Ménage complet ou partiel",
      "Nettoyage des sanitaires",
      "Entretien de la cuisine",
      "Dépoussiérage et aspirateur",
      "Repassage sur demande",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["Particulier", "Domicile"],
  },
  {
    id: "cristallisation",
    title: "Cristallisation des Sols",
    icon: "✨",
    description: "Traitement professionnel pour redonner brillance et protection à vos sols en marbre et pierre naturelle.",
    features: [
      "Ponçage et lustrage marbre",
      "Cristallisation pierre naturelle",
      "Protection anti-taches",
      "Rénovation sols ternis",
      "Entretien périodique",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Marbre", "Lustrage"],
  },
  {
    id: "vitres",
    title: "Surfaces Vitrées",
    icon: "🪟",
    description: "Nettoyage professionnel de toutes vos surfaces vitrées sans traces ni résidus.",
    features: [
      "Vitres intérieures et extérieures",
      "Baies vitrées et vérandas",
      "Vitrines commerciales",
      "Miroirs et parois de douche",
      "Accès difficiles avec matériel adapté",
    ],
    category: "nettoyage",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80",
    tags: ["Vitres", "Sans traces"],
  },
];

const renovationServices: Service[] = [
  {
    id: "peinture",
    title: "Peinture & Revêtements",
    icon: "🎨",
    description: "Travaux de peinture intérieure et extérieure pour transformer et embellir vos espaces.",
    features: [
      "Peinture intérieure tous supports",
      "Ravalement de façade",
      "Pose de papier peint",
      "Enduits décoratifs",
      "Traitement anti-humidité",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    tags: ["Intérieur", "Extérieur"],
  },
  {
    id: "sols",
    title: "Sols & Carrelage",
    icon: "🏗️",
    description: "Pose et rénovation de tous types de revêtements de sol pour un intérieur moderne.",
    features: [
      "Pose de carrelage et faïence",
      "Installation parquet massif/stratifié",
      "Pose de vinyle et PVC",
      "Ragréage et préparation des sols",
      "Rénovation sols anciens",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    tags: ["Carrelage", "Parquet"],
  },
  {
    id: "plomberie",
    title: "Plomberie",
    icon: "🚿",
    description: "Installation et rénovation complète de vos équipements sanitaires et plomberie.",
    features: [
      "Installation sanitaires",
      "Remplacement robinetterie",
      "Pose chauffe-eau/ballon",
      "Réparation fuites",
      "Création salle de bain",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    tags: ["Sanitaire", "Installation"],
  },
  {
    id: "electricite",
    title: "Électricité",
    icon: "⚡",
    description: "Mise aux normes et installation électrique par des professionnels qualifiés.",
    features: [
      "Mise aux normes tableau",
      "Installation prises et interrupteurs",
      "Pose luminaires",
      "Câblage réseau/TV",
      "Dépannage électrique",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    tags: ["Normes", "Sécurité"],
  },
  {
    id: "cloisons",
    title: "Cloisons & Placo",
    icon: "🧱",
    description: "Création et modification de cloisons pour optimiser l'agencement de vos espaces.",
    features: [
      "Création de cloisons",
      "Pose de placo BA13",
      "Isolation thermique/phonique",
      "Faux plafonds",
      "Doublage des murs",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    tags: ["Isolation", "Agencement"],
  },
  {
    id: "menuiserie",
    title: "Menuiserie",
    icon: "🪚",
    description: "Pose et remplacement de menuiseries intérieures et extérieures.",
    features: [
      "Pose de portes intérieures",
      "Remplacement fenêtres",
      "Installation placards",
      "Pose de parquet",
      "Aménagements sur mesure",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1558618047-f4b511eae4cd?w=800&q=80",
    tags: ["Portes", "Fenêtres"],
  },
  {
    id: "cuisine-sdb",
    title: "Cuisine & Salle de Bain",
    icon: "🛁",
    description: "Rénovation complète ou partielle de vos pièces d'eau et cuisines équipées.",
    features: [
      "Création cuisine équipée",
      "Rénovation salle de bain",
      "Pose de meubles",
      "Plomberie et électricité",
      "Carrelage et faïence",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    tags: ["Cuisine", "Salle de bain"],
  },
  {
    id: "complete",
    title: "Rénovation Complète",
    icon: "🏡",
    description: "Transformation totale de votre bien immobilier, de la conception à la réalisation.",
    features: [
      "Étude et conception projet",
      "Coordination des corps de métier",
      "Gros œuvre et second œuvre",
      "Finitions soignées",
      "Accompagnement complet",
    ],
    category: "renovation",
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&q=80",
    tags: ["Complet", "Clé en main"],
  },
];

function ServiceSlider({
  services,
  onServiceClick,
  accentColor
}: {
  services: Service[];
  onServiceClick: (service: Service) => void;
  accentColor: string;
}) {
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
        setCurrentIndex(Math.min(services.length - 1, currentIndex + 1));
      }
    }
  };

  return (
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
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onServiceClick(service)}
            className="flex-shrink-0 w-[340px] md:w-[380px] h-[480px] rounded-[32px] border-[3px] border-gray-400 overflow-hidden cursor-pointer relative group snap-center"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              {/* Top: Tag */}
              <div>
                <span className={`inline-block px-4 py-2 ${accentColor} backdrop-blur-sm text-white text-sm font-semibold rounded-full`}>
                  {service.category === "nettoyage" ? "Nettoyage" : "Rénovation"}
                </span>
              </div>

              {/* Bottom: Info */}
              <div>
                {/* Dots indicator */}
                <div className="flex gap-1.5 mb-4">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className={`w-2 h-2 rounded-full ${dot === 0 ? "bg-white" : "bg-white/40"}`}
                    />
                  ))}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-2 mb-4">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                  En savoir plus
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_, index) => (
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
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 200);
  };

  return (
    <>
      {/* Section Nettoyage */}
      <section id="nettoyage" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🧹 Services de nettoyage
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Nettoyage professionnel :
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl">
              Des solutions écologiques et efficaces pour particuliers et professionnels.
            </p>
          </motion.div>

          <ServiceSlider
            services={nettoyageServices}
            onServiceClick={openModal}
            accentColor="bg-blue-600/80"
          />

          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href={getWhatsAppLink("Bonjour, je suis intéressé(e) par vos services de nettoyage.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Demander un devis nettoyage
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Rénovation */}
      <section id="renovation" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              🔨 Services de rénovation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              Rénovation complète :
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl">
              Tous corps de métier pour transformer et moderniser vos espaces.
            </p>
          </motion.div>

          <ServiceSlider
            services={renovationServices}
            onServiceClick={openModal}
            accentColor="bg-orange-600/80"
          />

          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href={getWhatsAppLink("Bonjour, je suis intéressé(e) par vos services de rénovation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Demander un devis rénovation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
