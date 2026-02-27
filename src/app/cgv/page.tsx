import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Generales de Vente | ADM Services",
  description: "Conditions generales de vente des prestations ADM Services - Nettoyage et Renovation a Lyon.",
};

export default function CGV() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Conditions Generales de Vente</h1>
          <p className="mt-4 text-white/60">Derniere mise a jour : 27 fevrier 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[32px] border-[3px] border-gray-400 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Objet</h2>
            <p className="text-gray-600 leading-relaxed">
              Les presentes Conditions Generales de Vente (CGV) regissent les relations contractuelles
              entre la societe ADA CLEAN (SAS au capital de 500 euros, SIRET 921 504 387 00017),
              exploitant sous le nom commercial ADM Services, et ses clients, pour toute prestation de
              nettoyage, d'entretien et de renovation realisee a Lyon et sa region.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Prestations</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ADM Services propose les prestations suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong className="text-black">Nettoyage professionnel :</strong> syndics et coproprietes, cabinets medicaux, locaux commerciaux, restaurants, fin de chantier, maisons et appartements, cristallisation des sols, surfaces vitrees</li>
              <li><strong className="text-black">Renovation :</strong> peinture et revetements, sols et carrelage, plomberie, electricite, cloisons et placo, menuiserie, cuisine et salle de bain, renovation complete</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Le detail des prestations est defini dans le devis remis au client prealablement a toute intervention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Devis et commande</h2>
            <p className="text-gray-600 leading-relaxed">
              Tout devis est gratuit et sans engagement. Il est valable 30 jours a compter de sa date
              d'emission. La commande est consideree comme ferme et definitive apres acceptation ecrite
              du devis par le client (signature, email de confirmation ou validation par tout moyen).
              Toute modification du devis initial fera l'objet d'un avenant ecrit accepte par les deux parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Tarifs</h2>
            <p className="text-gray-600 leading-relaxed">
              Les prix sont indiques en euros et hors taxes (HT). La TVA applicable sera ajoutee
              conformement a la reglementation en vigueur au jour de la facturation. Les tarifs sont
              determines en fonction de la nature, de la surface et de la complexite de la prestation
              demandee. Ils sont detailles dans le devis remis au client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Modalites de paiement</h2>
            <div className="text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Le paiement s'effectue selon les modalites suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-black">Acompte :</strong> un acompte de 30% du montant total TTC est exige a la signature du devis pour les prestations de renovation</li>
                <li><strong className="text-black">Solde :</strong> le solde est du a la reception de la facture, a l'achevement de la prestation</li>
                <li><strong className="text-black">Delai de paiement :</strong> 30 jours a compter de la date de facturation pour les clients professionnels</li>
              </ul>
              <p className="leading-relaxed">
                Moyens de paiement acceptes : virement bancaire, cheque, especes (dans la limite legale).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Retard de paiement</h2>
            <p className="text-gray-600 leading-relaxed">
              En cas de retard de paiement, des penalites de retard seront appliquees de plein droit,
              au taux de trois fois le taux d'interet legal en vigueur, conformement a l'article L.441-10
              du Code de commerce. Une indemnite forfaitaire de 40 euros pour frais de recouvrement sera
              egalement due (article D.441-5 du Code de commerce).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Execution des prestations</h2>
            <p className="text-gray-600 leading-relaxed">
              ADM Services s'engage a executer les prestations avec le plus grand soin et dans le
              respect des delais convenus. Les dates et horaires d'intervention sont definis d'un
              commun accord. En cas d'impossibilite d'intervenir a la date prevue (intemperies,
              cas de force majeure), le client sera informe dans les meilleurs delais et une
              nouvelle date sera proposee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Obligations du client</h2>
            <p className="text-gray-600 leading-relaxed">
              Le client s'engage a fournir un acces libre et securise aux locaux concernes par
              la prestation, a communiquer toute information necessaire a la bonne execution des
              travaux, et a signaler toute particularite ou risque lie aux locaux (amiante,
              plomb, installations defectueuses, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Responsabilite et assurance</h2>
            <p className="text-gray-600 leading-relaxed">
              ADA CLEAN dispose d'une assurance responsabilite civile professionnelle couvrant
              les dommages pouvant survenir lors de l'execution des prestations. La responsabilite
              de ADA CLEAN est limitee au montant de la prestation concernee. ADA CLEAN ne saurait
              etre tenue responsable des dommages indirects ou imprevisibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Annulation et resiliation</h2>
            <div className="text-gray-600 space-y-4">
              <p className="leading-relaxed">
                <strong className="text-black">Par le client :</strong> toute annulation doit etre
                notifiee par ecrit au moins 48 heures avant la date d'intervention prevue.
                En cas d'annulation tardive ou de non-presentation, les frais de deplacement
                pourront etre factures.
              </p>
              <p className="leading-relaxed">
                <strong className="text-black">Pour les contrats de renovation :</strong> en cas
                d'annulation apres acceptation du devis, l'acompte verse reste acquis a titre
                d'indemnite forfaitaire.
              </p>
              <p className="leading-relaxed">
                <strong className="text-black">Droit de retractation :</strong> conformement aux
                articles L.221-18 et suivants du Code de la consommation, le client particulier
                dispose d'un delai de 14 jours a compter de l'acceptation du devis pour exercer
                son droit de retractation, sauf si l'execution de la prestation a commence avec
                son accord expres avant l'expiration de ce delai.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Reclamations</h2>
            <p className="text-gray-600 leading-relaxed">
              Toute reclamation doit etre adressee par ecrit dans un delai de 7 jours suivant
              l'execution de la prestation, a l'adresse email contact@adm-services.fr ou par
              courrier a : ADA CLEAN, 80 Rue Marcel Bramet, 69500 Bron. ADM Services s'engage
              a traiter toute reclamation dans un delai raisonnable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">12. Mediation</h2>
            <p className="text-gray-600 leading-relaxed">
              Conformement aux articles L.612-1 et suivants du Code de la consommation, en cas
              de litige non resolu, le client consommateur peut recourir gratuitement a un
              mediateur de la consommation. Les coordonnees du mediateur seront communiquees
              sur simple demande adressee a contact@adm-services.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">13. Droit applicable et juridiction</h2>
            <p className="text-gray-600 leading-relaxed">
              Les presentes CGV sont soumises au droit francais. En cas de litige, et apres
              echec de toute tentative de resolution amiable, les tribunaux competents du
              ressort du Tribunal de Commerce de Lyon seront seuls competents.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
