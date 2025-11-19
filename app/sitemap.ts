import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nessycrea.fr' // TODO: domaine final
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/collection`, changeFrequency: 'weekly' },
    { url: `${base}/a-propos`, changeFrequency: 'monthly' },
    { url: `${base}/evenements`, changeFrequency: 'monthly' },
    { url: `${base}/contact`, changeFrequency: 'yearly' },
  ]
}

