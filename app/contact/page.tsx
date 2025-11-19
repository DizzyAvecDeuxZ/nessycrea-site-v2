'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with dashboard API at https://nessycrea-dashboard-wvap.vercel.app
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const faqs = [
    {
      question: "Quel est le délai de fabrication ?",
      answer: "Le délai standard est de 2 à 3 semaines. Pour les commandes urgentes, contactez-nous directement pour étudier les possibilités."
    },
    {
      question: "Proposez-vous la livraison ?",
      answer: "Oui, nous livrons partout en France. Les frais de livraison sont calculés en fonction de la quantité et de la destination."
    },
    {
      question: "Puis-je commander un échantillon avant une grosse commande ?",
      answer: "Absolument ! Nous proposons des échantillons pour les commandes événementielles importantes. Contactez-nous pour plus d'informations."
    },
    {
      question: "Les bougies sont-elles vraiment sans paraffine ?",
      answer: "Oui, 100% garanti. Nous utilisons uniquement de la cire de soja naturelle, sans paraffine ni dérivés pétroliers."
    },
    {
      question: "Quelles sont les options de personnalisation ?",
      answer: "Vous pouvez personnaliser : la forme, la couleur, le parfum, les étiquettes, la gravure et l'emballage. Tout est possible !"
    },
    {
      question: "Acceptez-vous les commandes en gros ?",
      answer: "Oui, nous travaillons régulièrement avec des entreprises et organisateurs d'événements. Demandez un devis personnalisé."
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
                Contactez-Nous
              </h1>
              <p className="font-serif text-2xl md:text-3xl text-brown-medium max-w-3xl">
                Une question ? Un projet ? Nous sommes là pour vous écouter
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="font-serif text-4xl text-brown mb-8">
                    Parlons de Votre Projet
                  </h2>
                  <p className="font-script text-2xl text-terracotta mb-6">
                    "Chaque conversation est le début d'une belle création"
                  </p>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    Que vous ayez un projet d'événement ou simplement une question,
                    nous sommes à votre écoute. Remplissez le formulaire ou contactez-nous
                    directement par les moyens ci-dessous.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brown mb-1">Email</h3>
                      <a
                        href="mailto:contact@nessycrea.fr"
                        className="font-sans text-gray-700 hover:text-terracotta transition-colors"
                      >
                        contact@nessycrea.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center flex-shrink-0">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brown mb-1">Téléphone</h3>
                      <a
                        href="tel:+33612345678"
                        className="font-sans text-gray-700 hover:text-terracotta transition-colors"
                      >
                        06 12 34 56 78
                      </a>
                      <p className="font-sans text-sm text-gray-600 mt-1">
                        Lun-Ven: 9h-18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brown mb-1">Localisation</h3>
                      <p className="font-sans text-gray-700">
                        France
                      </p>
                      <p className="font-sans text-sm text-gray-600 mt-1">
                        Livraison nationale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center flex-shrink-0">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brown mb-1">Réseaux Sociaux</h3>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="#"
                          className="font-sans text-gray-700 hover:text-terracotta transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="#"
                          className="font-sans text-gray-700 hover:text-terracotta transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-soft p-6 rounded-lg">
                  <h3 className="font-serif text-xl text-brown mb-3">
                    Horaires de Réponse
                  </h3>
                  <p className="font-sans text-gray-700">
                    Nous répondons à tous les messages sous <strong>24 heures</strong> maximum,
                    du lundi au vendredi.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-gradient-soft p-8 md:p-10 rounded-lg shadow-medium"
                >
                  <h3 className="font-serif text-3xl text-brown mb-6">
                    Envoyez-nous un Message
                  </h3>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg"
                    >
                      <p className="font-sans text-green-800 text-left">
                        ✓ Message envoyé avec succès ! Nous vous répondrons très vite.
                      </p>
                    </motion.div>
                  )}

                  <div className="space-y-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label className="block font-sans font-medium text-brown mb-2">
                        Sujet *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors"
                      >
                        <option value="">Sélectionner un sujet...</option>
                        <option value="devis">Demande de devis</option>
                        <option value="renseignement">Renseignement produit</option>
                        <option value="commande">Suivi de commande</option>
                        <option value="evenement">Événement sur-mesure</option>
                        <option value="autre">Autre question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans font-medium text-brown mb-2">
                        Votre message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border-2 border-beige focus:border-terracotta outline-none transition-colors resize-none"
                        placeholder="Décrivez votre projet ou posez votre question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-warm text-white font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-medium text-lg"
                    >
                      Envoyer le Message
                    </button>

                    <p className="font-sans text-sm text-gray-600 text-left">
                      En soumettant ce formulaire, vous acceptez d'être recontacté par NessyCrea.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Questions Fréquentes
              </h2>
              <p className="font-script text-3xl text-terracotta">
                "Les réponses à vos interrogations"
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-soft"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-brown mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-sans text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-left"
            >
              <p className="font-sans text-lg text-gray-700 mb-6">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block px-10 py-4 border-2 border-terracotta text-terracotta font-sans font-semibold rounded-full hover:bg-terracotta hover:text-white transition-all"
              >
                Contactez-Nous Directement
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-terracotta text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-script text-5xl mb-6">
                Prêt à Illuminer Votre Événement ?
              </h2>
              <p className="font-sans text-xl mb-8">
                Découvrez notre collection ou demandez un devis personnalisé
              </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a
                  href="/collection"
                  className="inline-block px-10 py-4 bg-white text-terracotta font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-medium"
                >
                  Voir la Collection
                </a>
                <a
                  href="/evenements"
                  className="inline-block px-10 py-4 border-2 border-white text-white font-sans font-semibold rounded-full hover:bg-white hover:text-terracotta transition-all"
                >
                  Événements Sur-Mesure
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>\r\n    </>
  );
}




