'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Flame } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    navigation: [
      { href: '/', label: 'Accueil' },
      { href: '/a-propos', label: 'À propos' },
      { href: '/collection', label: 'Collection' },
      { href: '/evenements', label: 'Événements' },
      { href: '/contact', label: 'Contact' },
    ],
    social: [
      { href: 'https://www.instagram.com/NessyCrea/', label: 'Instagram' },
      // Ajoutez d'autres réseaux ici lorsque disponibles
    ],
  } as const;

  return (
    <footer className="bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Section principale avec PADDING GÉNÉREUX */}
      <div className="relative z-10 py-20 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">

            {/* Brand avec ESPACEMENTS CONFORTABLES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-8"
            >
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Flame className="w-12 h-12 text-accent group-hover:rotate-12 transition-transform" strokeWidth={2} />
                <h2 className="font-['Great_Vibes'] text-6xl text-white group-hover:text-accent transition-colors">
                  NessyCrea
                </h2>
              </Link>
              <p className="font-['Montserrat'] text-base text-white/80 leading-relaxed max-w-md">
                Des bougies artisanales uniques, 100% cire de soja naturelle,
                entièrement personnalisables pour vos moments précieux.
              </p>
              <div className="inline-block px-6 py-3 bg-gradient-warm rounded-full">
                <p className="font-['Montserrat'] font-bold text-brown-dark text-sm">
                  Illuminez vos moments avec passion
                </p>
              </div>
            </motion.div>

            {/* Navigation avec ESPACEMENTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-['Montserrat'] text-lg font-semibold text-accent">Navigation</h3>
              <ul className="space-y-4">
                {links.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-['Montserrat'] text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social avec ESPACEMENTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="font-['Montserrat'] text-lg font-semibold text-accent">Contact</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:contact@nessycrea.fr"
                      className="font-['Montserrat'] text-base text-white/80 hover:text-accent transition-colors inline-block"
                    >
                      contact@nessycrea.fr
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+33612345678"
                      className="font-['Montserrat'] text-base text-white/80 hover:text-accent transition-colors inline-block"
                    >
                      06 12 34 56 78
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-['Montserrat'] text-base font-semibold text-accent">Suivez-nous</h4>
                <div className="flex gap-4">
                  {links.social.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg hover:shadow-accent/50 transition-all duration-300"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.label}</span>
                      <Instagram className="w-6 h-6 text-brown-dark" strokeWidth={2.5} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar avec PADDING */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="font-['Montserrat'] text-white/60 text-sm">
              © {currentYear} NessyCrea. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <Link
                href="/mentions-legales"
                className="font-['Montserrat'] text-white/70 hover:text-accent transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/cgv"
                className="font-['Montserrat'] text-white/70 hover:text-accent transition-colors"
              >
                CGV
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/confidentialite"
                className="font-['Montserrat'] text-white/70 hover:text-accent transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

