'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Heart, Building2, Sparkles } from 'lucide-react';

export default function Evenements() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    candleQuantity: '',
    customization: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with dashboard API
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous recontacterons très vite.');
  };

  const eventPackages = [
    {
      title: "Mariage de Rêve",
      icon: Heart,
      description: "Des bougies élégantes pour illuminer votre grand jour",
      features: [
        "Bougies personnalisées pour la cérémonie",
        "Cadeaux invités uniques",
        "Gravure prénoms & date",
        "Coordination couleurs mariage",
        "Emballage premium",
        "Livraison sur site"
      ],
      startingPrice: "500€"
    },
    {
      title: "Événement Corporate",
      icon: Building2,
      description: "Impressionnez vos clients et collaborateurs",
      features: [
        "Logo entreprise sur bougies",
        "Packaging branded",
        "Commandes en volume",
        "Senteurs corporates",
        "Livraison express",
        "Facture professionnelle"
      ],
      startingPrice: "800€"
    },
    {
      title: "Anniversaire Festif",
      icon: Sparkles,
      description: "Créez une ambiance unique pour votre fête",
      features: [
        "Bougies colorées & parfumées",
        "Message personnalisé",
        "Packs cadeau invités",
        "Thème sur-mesure",
        "Options décoratives",
        "Conseil styling"
      ],
      startingPrice: "300€"
    }
  ];

  return (
    <>\r\n      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="font-script text-6xl md:text-8xl text-terracotta mb-6">
                Événements Sur-Mesure
              </h1>
              <p className="font-serif text-2xl md:text-3xl text-brown-medium max-w-3xl">
                Des bougies personnalisées pour rendre vos événements inoubliables
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Nos Formules Événements
              </h2>
              <p className="font-script text-3xl text-terracotta">
                "Chaque événement mérite sa touche unique"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {eventPackages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-soft p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="mb-4 text-left">
                    <IconComponent className="w-16 h-16 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-3xl text-brown text-left mb-4">
                    {pkg.title}
                  </h3>
                  <p className="font-sans text-gray-700 text-left mb-6">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="font-sans text-gray-700 flex items-start">
                        <span className="text-terracotta mr-3 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-left">
                    <p className="font-serif text-2xl text-terracotta mb-4">
                      À partir de {pkg.startingPrice}
                    </p>
                    <a
                      href="#devis"
                      className="inline-block px-8 py-3 bg-gradient-warm text-white font-sans font-medium rounded-full hover:scale-105 transition-transform shadow-soft"
                    >
                      Demander un Devis
                    </a>
                  </div>
                </motion.div>
              );
              })}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
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
                Notre Processus
              </h2>
              <p className="font-script text-3xl text-brown-light">
                "De votre idée à la réalité en 4 étapes"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  desc: "Échange sur vos besoins et vision"
                },
                {
                  step: "2",
                  title: "Devis Personnalisé",
                  desc: "Proposition détaillée sous 48h"
                },
                {
                  step: "3",
                  title: "Création",
                  desc: "Fabrication artisanale sur-mesure"
                },
                {
                  step: "4",
                  title: "Livraison",
                  desc: "Réception avant votre événement"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-soft text-left"
                >
                  <div className="font-script text-6xl text-terracotta mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-2xl text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="devis" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Demander un Devis
              </h2>
              <p className="font-script text-3xl text-terracotta mb-4">
                "Parlez-nous de votre projet"
              </p>
              <p className="font-sans text-lg text-gray-700">
                Remplissez ce formulaire et nous vous recontacterons sous 24h
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-soft p-8 md:p-12 rounded-lg shadow-medium"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Type d'événement *
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="mariage">Mariage</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="corporate">Événement Corporate</option>
                    <option value="bapteme">Baptême</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Nombre d'invités
                  </label>
                  <input
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Quantité de bougies souhaitée
                  </label>
                  <input
                    type="number"
                    value={formData.candleQuantity}
                    onChange={(e) => setFormData({ ...formData, candleQuantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="20"
                  />
                </div>

                <div>
                  <label className="block font-sans font-medium text-brown mb-2">
                    Budget estimé
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                    placeholder="500-1000€"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-sans font-medium text-brown mb-2">
                  Personnalisation souhaitée
                </label>
                <input
                  type="text"
                  value={formData.customization}
                  onChange={(e) => setFormData({ ...formData, customization: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                  placeholder="Couleurs, parfums, gravure, etc."
                />
              </div>

              <div className="mb-8">
                <label className="block font-sans font-medium text-brown mb-2">
                  Message / Détails supplémentaires
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors resize-none"
                  placeholder="Parlez-nous de votre vision, vos inspirations, vos attentes..."
                />
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="px-12 py-4 bg-gradient-warm text-white font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-medium text-lg"
                >
                  Envoyer ma Demande
                </button>
                <p className="font-sans text-sm text-gray-600 mt-4">
                  Réponse sous 24h • Devis gratuit et sans engagement
                </p>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Testimonials */}
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
                Ils Nous Font Confiance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie & Thomas",
                  event: "Mariage - Juin 2024",
                  text: "Les bougies personnalisées ont apporté une touche magique à notre mariage. Nos invités les adorent !"
                },
                {
                  name: "SAS Consulting",
                  event: "Événement Corporate",
                  text: "Professionnalisme irréprochable. Les bougies avec notre logo ont fait sensation auprès de nos clients."
                },
                {
                  name: "Sophie",
                  event: "Anniversaire 40 ans",
                  text: "Une équipe à l'écoute, des bougies magnifiques et une livraison impeccable. Je recommande à 100% !"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-soft"
                >
                  <p className="font-sans text-gray-700 italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-beige pt-4">
                    <p className="font-serif text-lg text-brown font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-gray-600">
                      {testimonial.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>\r\n    </>
  );
}




