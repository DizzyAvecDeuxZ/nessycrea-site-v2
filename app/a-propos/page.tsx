'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function APropos() {
  const fabricationSteps = [
    {
      number: "01",
      title: "Sélection de la Cire",
      description: "Cire de soja 100% naturelle, sans paraffine ni dérivés pétroliers"
    },
    {
      number: "02",
      title: "Création du Moule",
      description: "Design personnalisé selon vos envies et votre événement"
    },
    {
      number: "03",
      title: "Fonte & Parfumage",
      description: "Chauffage précis et ajout de fragrances naturelles premium"
    },
    {
      number: "04",
      title: "Coulage Artisanal",
      description: "Versé à la main avec soin dans chaque moule"
    },
    {
      number: "05",
      title: "Refroidissement",
      description: "Séchage naturel pour garantir la qualité optimale"
    },
    {
      number: "06",
      title: "Finitions",
      description: "Personnalisation finale : étiquettes, décorations, emballage"
    }
  ];

  return (
    <>\r\n      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-soft overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-script text-6xl md:text-8xl text-terracotta mb-6">
                À Propos de NessyCrea
              </h1>
              <p className="font-serif text-2xl md:text-3xl text-brown-medium max-w-3xl">
                L'histoire d'une passion transformée en art artisanal
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-brown mb-8">
                  Notre Histoire
                </h2>
                <p className="font-script text-3xl text-terracotta mb-6">
                  "De l'union de deux générations naît une flamme unique"
                </p>
                <div className="space-y-4 font-sans text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-terracotta">NessyCrea</strong> est née de la fusion de deux prénoms :
                    <strong> Noémie</strong>, la créatrice aux multiples talents qui refuse l'ennui, et
                    <strong> Kessy</strong>, sa fille, symbole de l'avenir et de la transmission.
                  </p>
                  <p>
                    Noémie a toujours été animée par la création. De la décoration d'intérieur à l'artisanat,
                    elle a exploré de nombreux univers avant de découvrir sa véritable passion :
                    la fabrication de bougies artisanales.
                  </p>
                  <p>
                    Ce qui a commencé comme un hobby est devenu une véritable vocation.
                    Chaque bougie raconte une histoire, capture un moment, évoque une émotion.
                  </p>
                  <p className="text-terracotta font-semibold">
                    NessyCrea, c'est l'alliance de la tradition artisanale et de la personnalisation moderne,
                    pour créer des bougies qui vous ressemblent.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-soft p-8 rounded-lg shadow-medium"
              >
                <h3 className="font-serif text-3xl text-brown mb-6">Portrait de Noémie</h3>
                <div className="space-y-4 font-sans text-gray-700">
                  <p>
                    <strong>Créatrice polyvalente</strong> qui n'aime pas s'ennuyer,
                    Noémie apporte à chaque création son sens du détail et son exigence de qualité.
                  </p>
                  <p>
                    Passionnée par les parfums et les ambiances, elle transforme chaque commande
                    en une expérience sensorielle unique.
                  </p>
                  <p>
                    Son approche ? <strong className="text-terracotta">Écouter, créer, sublimer</strong>.
                    Chaque bougie est le reflet des souhaits et de la personnalité de ses clients.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-20 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Notre Processus de Fabrication
              </h2>
              <p className="font-script text-3xl text-brown-light">
                "Chaque étape est un geste d'amour"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fabricationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="font-script text-5xl text-terracotta mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl text-brown mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Commitments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Nos Engagements Qualité
              </h2>
              <p className="font-script text-3xl text-terracotta mb-8">
                "Zéro compromis, 100% excellence"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Cire de Soja 100% Naturelle",
                  items: [
                    "Sans paraffine",
                    "Sans dérivés pétroliers",
                    "Écologique & biodégradable",
                    "Combustion propre et lente"
                  ]
                },
                {
                  title: "Conformité aux Normes",
                  items: [
                    "Respect des réglementations",
                    "Tests de sécurité rigoureux",
                    "Traçabilité complète",
                    "Certifications qualité"
                  ]
                },
                {
                  title: "Personnalisation Totale",
                  items: [
                    "Formes sur-mesure",
                    "Large choix de fragrances",
                    "Couleurs personnalisées",
                    "Étiquettes customisées"
                  ]
                }
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-soft p-8 rounded-lg shadow-soft"
                >
                  <h3 className="font-serif text-2xl text-terracotta mb-6">
                    {commitment.title}
                  </h3>
                  <ul className="space-y-3">
                    {commitment.items.map((item, i) => (
                      <li key={i} className="font-sans text-gray-700 flex items-start">
                        <span className="text-terracotta mr-3">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-terracotta text-white p-8 md:p-12 rounded-lg text-left"
            >
              <p className="font-script text-4xl mb-4">
                "Votre satisfaction est notre priorité absolue"
              </p>
              <p className="font-sans text-xl mb-8">
                Chaque bougie est fabriquée avec passion et inspectée minutieusement
                avant de rejoindre votre événement.
              </p>
              <Link
                href="/collection"
                className="inline-block px-10 py-4 bg-white text-terracotta font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-medium"
              >
                Découvrir Nos Créations
              </Link>
            </motion.div>
          </div>
        </section>
      </main>\r\n    </>
  );
}




