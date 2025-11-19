'use client';

import { Button } from '@/components/ui/button';
import { Flame, Heart, Sparkles, Star, ArrowRight, Eye, ShoppingBag, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO IMMERSIF - Parallax & Gradient Animé */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-black to-brown-dark/50">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-terracotta/20 to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-terracotta/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Contenu Hero avec Parallax */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-['Montserrat'] text-white/80">
              <Sparkles className="w-4 h-4 text-terracotta" />
              Collection Exclusive 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-['Cormorant_Garamond'] text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
          >
            <span className="bg-gradient-to-r from-white via-terracotta/80 to-white bg-clip-text text-transparent">
              Illuminez
            </span>
            <br />
            <span className="text-white">Vos Émotions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-['Montserrat'] leading-relaxed"
          >
            Bougies artisanales personnalisables en cire de soja naturelle.
            <br />Chaque flamme raconte une histoire unique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/collection">
              <Button
                size="lg"
                className="group relative px-12 py-7 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white text-lg font-['Montserrat'] font-semibold rounded-full overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-terracotta/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir la Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>

            <Link href="/personnaliser">
              <Button
                size="lg"
                variant="ghost"
                className="px-12 py-7 border-2 border-white/20 hover:border-terracotta hover:bg-terracotta/10 text-white text-lg font-['Montserrat'] font-semibold rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                <Heart className="mr-2 w-5 h-5" />
                Créer ma Bougie
              </Button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                className="w-2 h-2 bg-terracotta rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* BENTO GRID - Produits Interactifs */}
      <section className="relative py-32 bg-gradient-to-b from-black via-brown-dark/20 to-black">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-terracotta text-sm font-['Montserrat'] font-semibold uppercase tracking-wider mb-4 block">
              Nos Créations
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-bold mb-6">
              Collection Premium
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-['Montserrat']">
              Des bougies d'exception, façonnées avec passion
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">

            {/* Grande carte 1 - Bougie Personnalisée */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-terracotta/20 to-brown-dark/40 border border-white/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex px-4 py-2 bg-terracotta/20 backdrop-blur-md rounded-full border border-terracotta/30 mb-6">
                    <span className="text-terracotta text-xs font-['Montserrat'] font-bold uppercase tracking-wider">
                      ⭐ Best Seller
                    </span>
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-bold mb-4">
                    Bougie Personnalisée
                  </h3>
                  <p className="text-white/70 text-lg mb-8 max-w-xl font-['Montserrat'] leading-relaxed">
                    Créez une bougie unique avec votre message gravé, vos couleurs et votre parfum signature.
                  </p>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-6xl font-['Cormorant_Garamond'] font-bold text-terracotta">45</span>
                    <span className="text-2xl text-white/60">€</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-white hover:bg-white/90 text-black font-['Montserrat'] font-semibold py-6 rounded-xl transition-all duration-300 group-hover:scale-105">
                    <ShoppingBag className="mr-2 w-5 h-5" />
                    Commander
                  </Button>
                  <Button variant="ghost" className="px-6 border border-white/20 hover:bg-white/5 rounded-xl">
                    <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Effet de lueur */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-terracotta/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Carte 2 - Bougie Classique */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta/20 to-brown-dark/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Flame className="w-8 h-8 text-terracotta" />
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-3">
                    Classique
                  </h3>
                  <p className="text-white/60 text-sm mb-4 font-['Montserrat']">
                    Cire de soja avec parfum au choix
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-['Cormorant_Garamond'] font-bold text-white">29</span>
                    <span className="text-lg text-white/60">€</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Carte 3 - Bougie Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta/20 to-brown-dark/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-terracotta" />
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold mb-3">
                    Premium
                  </h3>
                  <p className="text-white/60 text-sm mb-4 font-['Montserrat']">
                    Triple mèche, finitions dorées
                  </p>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-['Cormorant_Garamond'] font-bold text-white">65</span>
                    <span className="text-lg text-white/60">€</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS avec effet glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-terracotta/10 to-black" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Bougies Créées', icon: Flame },
              { number: '200+', label: 'Clients Satisfaits', icon: Heart },
              { number: '3+', label: "Années d'Excellence", icon: Star },
              { number: '5/5', label: 'Note Moyenne', icon: Sparkles }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Icon className="w-8 h-8 text-terracotta mx-auto mb-4 group-hover:scale-110 transition-transform" />

                    <div className="relative">
                      <div className="font-['Cormorant_Garamond'] text-5xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="font-['Montserrat'] text-sm text-white/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA IMMERSIF */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-black to-brown-dark/50">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-terracotta/20 to-transparent"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-bold mb-8">
              Prêt à Créer
              <br />
              <span className="bg-gradient-to-r from-terracotta via-white to-terracotta bg-clip-text text-transparent">
                Votre Bougie Unique ?
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-['Montserrat']">
              Commencez votre voyage olfactif et illuminez vos moments précieux avec nos créations artisanales.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/personnaliser">
                <Button
                  size="lg"
                  className="group relative px-12 py-7 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white text-lg font-['Montserrat'] font-semibold rounded-full overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-terracotta/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Créer Ma Bougie
                  </span>
                </Button>
              </Link>

              <Link href="/collection">
                <Button
                  size="lg"
                  variant="ghost"
                  className="px-12 py-7 border-2 border-white/20 hover:border-terracotta hover:bg-terracotta/10 text-white text-lg font-['Montserrat'] font-semibold rounded-full backdrop-blur-sm transition-all duration-500 hover:scale-105"
                >
                  Voir la Collection
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
