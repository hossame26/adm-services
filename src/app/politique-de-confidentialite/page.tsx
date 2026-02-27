import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialite | ADM Services",
  description: "Politique de confidentialite et protection des donnees personnelles - ADM Services.",
};

export default function PolitiqueConfidentialite() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Politique de Confidentialite</h1>
          <p className="mt-4 text-white/60">Derniere mise a jour : 27 fevrier 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[32px] border-[3px] border-gray-400 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Responsable du traitement</h2>
            <div className="text-gray-600 space-y-2">
              <p>Le responsable du traitement des donnees personnelles est :</p>
              <p><strong className="text-black">ADA CLEAN</strong> (SAS au capital de 500 euros)</p>
              <p>80 Rue Marcel Bramet, 69500 Bron</p>
              <p>SIRET : 921 504 387 00017</p>
              <p>Representee par Anis Marmouri, President</p>
              <p>Email : contact@adm-services.fr</p>
              <p>Telephone : 06 36 20 09 85</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Donnees collectees</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dans le cadre de son activite, ADM Services est amene a collecter les donnees
              personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong className="text-black">Donnees de contact :</strong> nom, prenom, adresse email, numero de telephone</li>
              <li><strong className="text-black">Donnees de localisation :</strong> adresse postale (pour l'intervention)</li>
              <li><strong className="text-black">Donnees de navigation :</strong> adresse IP, type de navigateur, pages visitees, duree de visite</li>
              <li><strong className="text-black">Donnees de demande :</strong> description du projet, type de prestation souhaitee</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Finalites du traitement</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les donnees personnelles collectees sont utilisees pour les finalites suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Repondre aux demandes de devis et de renseignements</li>
              <li>Assurer la gestion de la relation client</li>
              <li>Etablir des devis et des factures</li>
              <li>Ameliorer nos services et l'experience utilisateur du site</li>
              <li>Respecter nos obligations legales et reglementaires</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Base legale du traitement</h2>
            <p className="text-gray-600 leading-relaxed">
              Le traitement de vos donnees personnelles repose sur les bases legales suivantes,
              conformement au Reglement General sur la Protection des Donnees (RGPD) :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li><strong className="text-black">L'execution d'un contrat</strong> ou de mesures precontractuelles (demande de devis)</li>
              <li><strong className="text-black">L'interet legitime</strong> de ADA CLEAN (amelioration des services, statistiques)</li>
              <li><strong className="text-black">Le respect d'obligations legales</strong> (facturation, comptabilite)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Duree de conservation</h2>
            <p className="text-gray-600 leading-relaxed">
              Les donnees personnelles sont conservees pour les durees suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li><strong className="text-black">Donnees prospects :</strong> 3 ans a compter du dernier contact</li>
              <li><strong className="text-black">Donnees clients :</strong> 5 ans apres la fin de la relation commerciale</li>
              <li><strong className="text-black">Donnees de facturation :</strong> 10 ans (obligation legale)</li>
              <li><strong className="text-black">Donnees de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Destinataires des donnees</h2>
            <p className="text-gray-600 leading-relaxed">
              Vos donnees personnelles ne sont transmises a aucun tiers a des fins commerciales.
              Elles peuvent etre communiquees aux prestataires techniques intervenant dans le
              fonctionnement du site (hebergement, maintenance) et aux organismes publics
              exclusivement pour repondre a nos obligations legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Transferts de donnees</h2>
            <p className="text-gray-600 leading-relaxed">
              Le site est heberge par Vercel Inc. aux Etats-Unis. Ce transfert de donnees est
              encadre par les clauses contractuelles types de la Commission europeenne, garantissant
              un niveau de protection adequat de vos donnees personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conformement au RGPD et a la loi Informatique et Libertes, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong className="text-black">Droit d'acces :</strong> obtenir la confirmation du traitement de vos donnees et en obtenir une copie</li>
              <li><strong className="text-black">Droit de rectification :</strong> demander la correction de donnees inexactes ou incompletes</li>
              <li><strong className="text-black">Droit a l'effacement :</strong> demander la suppression de vos donnees dans les conditions prevues par la loi</li>
              <li><strong className="text-black">Droit a la limitation :</strong> demander la limitation du traitement de vos donnees</li>
              <li><strong className="text-black">Droit a la portabilite :</strong> recevoir vos donnees dans un format structure et lisible</li>
              <li><strong className="text-black">Droit d'opposition :</strong> vous opposer au traitement de vos donnees pour des motifs legitimes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous par email a <strong className="text-black">contact@adm-services.fr</strong> ou
              par courrier a l'adresse : ADA CLEAN, 80 Rue Marcel Bramet, 69500 Bron.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              En cas de difficulte, vous pouvez introduire une reclamation aupres de la Commission
              Nationale de l'Informatique et des Libertes (CNIL) : www.cnil.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies
              strictement necessaires au fonctionnement technique du site peuvent etre utilises.
              Ces cookies ne necessitent pas votre consentement prealable conformement a la
              reglementation en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Securite</h2>
            <p className="text-gray-600 leading-relaxed">
              ADA CLEAN met en oeuvre toutes les mesures techniques et organisationnelles
              appropriees pour assurer la securite et la confidentialite de vos donnees
              personnelles et les proteger contre toute alteration, destruction ou acces
              non autorise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Modification de la politique</h2>
            <p className="text-gray-600 leading-relaxed">
              La presente politique de confidentialite peut etre modifiee a tout moment.
              Nous vous invitons a la consulter regulierement. La date de derniere mise a jour
              est indiquee en haut de cette page.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
