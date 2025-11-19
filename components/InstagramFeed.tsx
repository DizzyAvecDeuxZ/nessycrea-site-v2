'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

type InstaItem = {
  id: string;
  caption?: string;
  permalink: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | string;
  thumbnail_url?: string;
};

export function InstagramFeed({ count = 6 }: { count?: number }) {
  const [items, setItems] = useState<InstaItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/instagram')
      .then(async (r) => {
        if (!r.ok) throw new Error('Réponse invalide');
        const data = await r.json();
        if (mounted) setItems(Array.isArray(data?.items) ? data.items.slice(0, count) : []);
      })
      .catch((e) => mounted && setError(e.message));
    return () => {
      mounted = false;
    };
  }, [count]);

  if (error) {
    // Discret fallback
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Instagram className="w-8 h-8 text-terracotta" strokeWidth={2.5} />
            <h2 className="font-serif text-4xl md:text-5xl font-black text-brown">
              Nos Créations
            </h2>
          </div>
          <p className="font-sans text-lg text-brown/70 max-w-2xl mx-auto">
            Découvrez nos bougies artisanales en coulisses — suivez{' '}
            <a
              className="text-terracotta hover:text-terracotta-dark font-bold underline decoration-2 underline-offset-4"
              href="https://www.instagram.com/NessyCrea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @NessyCrea
            </a>
          </p>
        </motion.div>

        {items === null && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6" aria-busy>
            {Array.from({ length: count }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-beige/50 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        )}

        {Array.isArray(items) && items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {items.map((it, index) => {
              const src = it.media_type === 'VIDEO' ? it.thumbnail_url ?? it.media_url : it.media_url;
              return (
                <motion.a
                  key={it.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  href={it.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group rounded-2xl overflow-hidden border-2 border-beige-dark hover:border-terracotta hover:shadow-2xl transition-all relative"
                  aria-label={it.caption || 'Voir sur Instagram'}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={it.caption || 'Publication Instagram NessyCrea'}
                    className="w-full h-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Instagram className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        ) : items !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/NessyCrea/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-warm text-white font-sans font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <Instagram className="w-5 h-5" strokeWidth={2.5} />
              Voir nos créations sur Instagram
            </motion.a>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

