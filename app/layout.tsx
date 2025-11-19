import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NessyCrea - Bougies Artisanales Personnalisables",
  description:
    "Des bougies uniques, entièrement personnalisables pour vos moments précieux. Artisanat 100% conforme aux normes, cire de soja naturelle.",
  keywords: [
    "bougies personnalisées",
    "bougies soja",
    "fondants parfumés",
    "bougies mariage",
    "cadeaux invités",
    "bougie artisanale",
    "zéro paraffine",
    "cire végétale",
  ],
  alternates: {
    canonical: "https://www.nessycrea.fr/", // TODO: remplace par le domaine final
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.nessycrea.fr/",
    title: "NessyCrea - Bougies Artisanales Personnalisables",
    description:
      "Des bougies uniques, entièrement personnalisables pour vos moments précieux.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }], // TODO: fournir une image 1200x630
    locale: "fr_FR",
    siteName: "NessyCrea",
  },
  twitter: {
    card: "summary_large_image",
    title: "NessyCrea - Bougies Artisanales Personnalisables",
    description:
      "Des bougies uniques, entièrement personnalisables pour vos moments précieux.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  themeColor: "#F5EDE3",
  metadataBase: new URL("https://www.nessycrea.fr"), // TODO: domaine final
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${greatVibes.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="antialiased min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
