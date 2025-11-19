'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Palette, Flower2, PenTool, Package } from 'lucide-react';

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'mariage', label: 'Mariage' },
    { id: 'anniversaire', label: 'Anniversaire' },
    { id: 'evenement', label: 'Événement Pro' },
    { id: 'decoration', label: 'Décoration' }
  ];

  const products = [
    {
      id: 1,
      name: "Bougie Mariage Élégance",
      category: "mariage",
      description: "Bougie personnalisée pour votre grand jour. Forme colonne, parfum rose & vanille.",
      features: ["Cire de soja", "Gravure prénoms", "Parfum au choix", "H: 15cm"],
      price: "À partir de 25€",
      gradient: "from-beige to-brown-light"
    },
    {
      id: 2,
      name: "Bougie Anniversaire Festive",
      category: "anniversaire",
      description: "Créez l'ambiance parfaite pour célébrer. Formes variées, couleurs vives.",
      features: ["Couleurs personnalisées", "Message gravé", "Pack de 3 ou 6", "Parfums fruités"],
      price: "À partir de 18€",
      gradient: "from-terracotta to-terracotta-dark"
    },
    {
      id: 3,
      name: "Bougie Corporate Prestige",
      category: "evenement",
      description: "Pour vos événements professionnels. Logo personnalisé, packaging premium.",
      features: ["Logo entreprise", "Commande en gros", "Packaging sur-mesure", "Senteurs neutres"],
      price: "Sur devis",
      gradient: "from-brown-medium to-brown"
    },
    {
      id: 4,
      name: "Bougie Déco Bohème",
      category: "decoration",
      description: "Ajoutez une touche artisanale à votre intérieur. Formes organiques.",
      features: ["Formes uniques", "Couleurs neutres", "Non parfumée option", "H: 10-20cm"],
      price: "À partir de 20€",
      gradient: "from-beige-dark to-brown-light"
    },
    {
      id: 5,
      name: "Bougie Zen & Relaxation",
      category: "decoration",
      description: "Créez une atmosphère apaisante. Parfums lavande, eucalyptus, menthe.",
      features: ["Senteurs relaxantes", "Forme minimaliste", "Durée 40h", "Emballage écolo"],
      price: "À partir de 22€",
      gradient: "from-terracotta/70 to-brown-light"
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

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
                Notre Collection
              </h1>
              <p className="font-serif text-2xl md:text-3xl text-brown-medium max-w-3xl">
                Des bougies artisanales pour chaque occasion
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-white border-b border-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-start gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-sans font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-warm text-white shadow-medium scale-105'
                      : 'bg-white border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gradient-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow overflow-hidden group"
                >
                  {/* Product Image Placeholder */}
                  <div className={`h-64 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-start">
                      <motion.div
                        className="w-32 h-48 bg-white/20 rounded-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-sans text-sm font-semibold text-terracotta">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-brown mb-3">
                      {product.name}
                    </h3>
                    <p className="font-sans text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="font-sans text-sm text-gray-700 flex items-start">
                          <span className="text-terracotta mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="block w-full text-left px-6 py-3 bg-gradient-warm text-white font-sans font-medium rounded-full hover:scale-105 transition-transform shadow-soft"
                    >
                      Personnaliser
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-left py-20"
              >
                <p className="font-serif text-2xl text-brown-medium">
                  Aucun produit dans cette catégorie pour le moment.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-left mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-brown mb-6">
                Personnalisation Totale
              </h2>
              <p className="font-script text-3xl text-terracotta mb-8">
                "Votre bougie, votre style, votre histoire"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Palette, title: "Couleurs", desc: "Palette infinie" },
                { icon: Flower2, title: "Parfums", desc: "50+ fragrances" },
                { icon: PenTool, title: "Gravure", desc: "Texte personnalisé" },
                { icon: Package, title: "Packaging", desc: "Emballage sur-mesure" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-soft p-6 rounded-lg text-left hover:shadow-soft transition-shadow"
                >
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-terracotta" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-brown mb-2">{item.title}</h3>
                  <p className="font-sans text-gray-600">{item.desc}</p>
                </motion.div>
              );
              })}
            </div>
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
                Vous ne trouvez pas ce que vous cherchez ?
              </h2>
              <p className="font-sans text-xl mb-8">
                Contactez-nous pour créer une bougie 100% unique qui correspond exactement à vos envies
              </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-white text-terracotta font-sans font-semibold rounded-full hover:scale-105 transition-transform shadow-medium"
                >
                  Demander un Devis
                </Link>
                <Link
                  href="/evenements"
                  className="inline-block px-10 py-4 border-2 border-white text-white font-sans font-semibold rounded-full hover:bg-white hover:text-terracotta transition-all"
                >
                  Événements Sur-Mesure
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>\r\n    </>
  );
}




