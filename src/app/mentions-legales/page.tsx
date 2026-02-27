import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Legales | ADM Services",
  description: "Mentions legales du site ADM Services - Nettoyage et Renovation a Lyon.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour a l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Mentions Legales</h1>
          <p className="mt-4 text-white/60">Derniere mise a jour : 27 fevrier 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[32px] border-[3px] border-gray-400 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Editeur du site</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong className="text-black">Raison sociale :</strong> ADA CLEAN</p>
              <p><strong className="text-black">Forme juridique :</strong> Societe par actions simplifiee (SAS)</p>
              <p><strong className="text-black">Capital social :</strong> 500,00 euros</p>
              <p><strong className="text-black">Siege social :</strong> 80 Rue Marcel Bramet, 69500 Bron</p>
              <p><strong className="text-black">SIREN :</strong> 921 504 387</p>
              <p><strong className="text-black">SIRET :</strong> 921 504 387 00017</p>
              <p><strong className="text-black">Numero TVA intracommunautaire :</strong> FR78921504387</p>
              <p><strong className="text-black">Code APE / NAF :</strong> 8121Z - Nettoyage courant des batiments</p>
              <p><strong className="text-black">President :</strong> Anis Marmouri</p>
              <p><strong className="text-black">Telephone :</strong> 06 36 20 09 85</p>
              <p><strong className="text-black">Email :</strong> contact@adm-services.fr</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Hebergement</h2>
            <div className="text-gray-600 space-y-2">
              <p><strong className="text-black">Hebergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-black">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis</p>
              <p><strong className="text-black">Site web :</strong> vercel.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Propriete intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logos, icones, elements graphiques, videos)
              est la propriete exclusive de la societe ADA CLEAN, exploitant la marque commerciale ADM Services,
              ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, representation, modification,
              publication ou adaptation de tout ou partie des elements du site, quel que soit le moyen ou le
              procede utilise, est interdite sans autorisation ecrite prealable de ADA CLEAN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Limitation de responsabilite</h2>
            <p className="text-gray-600 leading-relaxed">
              ADA CLEAN s'efforce de fournir sur le site des informations aussi precises que possible.
              Toutefois, elle ne pourra etre tenue responsable des oublis, des inexactitudes et des
              carences dans la mise a jour, qu'elles soient de son fait ou du fait des tiers partenaires
              qui lui fournissent ces informations. Toutes les informations indiquees sur le site sont
              donnees a titre indicatif et sont susceptibles d'evoluer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Liens hypertextes</h2>
            <p className="text-gray-600 leading-relaxed">
              Le site peut contenir des liens hypertextes vers d'autres sites. ADA CLEAN n'exerce aucun
              controle sur le contenu de ces sites tiers et decline toute responsabilite quant a leur
              contenu ou aux eventuels collectes et traitements de donnees personnelles effectues par ces sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Droit applicable</h2>
            <p className="text-gray-600 leading-relaxed">
              Les presentes mentions legales sont regies par le droit francais. En cas de litige,
              et apres echec de toute tentative de recherche d'une solution amiable, les tribunaux
              francais seront seuls competents pour connaitre de ce litige. Pour toute question
              relative aux presentes mentions legales, vous pouvez nous contacter a l'adresse
              email : contact@adm-services.fr.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
