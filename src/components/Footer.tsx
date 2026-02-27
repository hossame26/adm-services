"use client";

import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Nettoyage professionnel", href: "#nettoyage" },
    { name: "Nettoyage particulier", href: "#nettoyage" },
    { name: "Rénovation", href: "#renovation" },
    { name: "Fin de chantier", href: "#nettoyage" },
  ],
  navigation: [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#nettoyage" },
    { name: "Réalisations", href: "#realisations" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Mentions legales", href: "/mentions-legales" },
    { name: "Politique de confidentialite", href: "/politique-de-confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Card */}
        <div className="rounded-[32px] border-[3px] border-gray-400 bg-white p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div>
              <Link
                href="#accueil"
                className="inline-block px-5 py-2.5 bg-[#f5ebe0] rounded-full font-bold text-lg text-black mb-6"
              >
                ADM SERVICES.
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                Votre partenaire de confiance pour tous vos projets de nettoyage
                et rénovation à Lyon.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-black mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-black transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-black mb-4">Navigation</h4>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-black transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-black mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="tel:+33636200985" className="hover:text-black transition-colors">
                    06 36 20 09 85
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@adm-services.fr" className="hover:text-black transition-colors">
                    contact@adm-services.fr
                  </Link>
                </li>
                <li>80 Rue Marcel Bramet</li>
                <li>69500 Bron, Lyon</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-black mb-4">Informations legales</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-black transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-8 border-t border-gray-400 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ADM Services. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
