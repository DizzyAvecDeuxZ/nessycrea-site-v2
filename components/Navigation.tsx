'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu, ShoppingCart, User, Search, Heart,
  Flame, Package, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const pathname = usePathname();

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barre d'annonce premium (style Yankee Candle) */}
      <div className="bg-gradient-to-r from-terracotta/10 via-beige to-terracotta/10 py-3">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <p className="text-center text-sm font-['Montserrat'] text-brown-dark">
            <Sparkles className="inline w-4 h-4 mr-2 text-terracotta" />
            Livraison offerte dès 50€
            <span className="mx-3">•</span>
            <span className="font-medium text-terracotta">Personnalisation gratuite</span>
          </p>
        </div>
      </div>

      {/* Navbar principale avec HAUTEUR CONFORTABLE */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-16">

            {/* Logo proportionné */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.h1
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="font-['Great_Vibes'] text-3xl md:text-4xl text-terracotta group-hover:text-terracotta-dark transition-colors"
              >
                NessyCrea
              </motion.h1>
            </Link>

            {/* Menu Desktop avec gaps optimisés */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink href="/boutique" icon={<Flame className="w-4 h-4" />}>
                Boutique
              </NavLink>
              <NavLink href="/collection" icon={<Package className="w-4 h-4" />}>
                Collections
              </NavLink>
              <NavLink href="/evenements">
                Événements
              </NavLink>
              <NavLink href="/personnaliser" icon={<Sparkles className="w-4 h-4" />}>
                Personnaliser
              </NavLink>
              <NavLink href="/a-propos">
                Notre Histoire
              </NavLink>
            </nav>

            {/* Actions avec espacement équilibré */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 text-brown-medium hover:text-terracotta hover:bg-beige transition-all"
              >
                <Search className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex rounded-full w-10 h-10 text-brown-medium hover:text-terracotta hover:bg-beige transition-all"
              >
                <Heart className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex rounded-full w-10 h-10 text-brown-medium hover:text-terracotta hover:bg-beige transition-all"
              >
                <User className="w-4 h-4" />
              </Button>

              <Link href="/panier">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full w-10 h-10 text-brown-medium hover:text-terracotta hover:bg-beige transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Button>
              </Link>

              {/* Menu Mobile */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden rounded-full w-12 h-12 text-brown-medium hover:text-terracotta transition-all"
                  >
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-cream border-beige-medium">
                  <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

function NavLink({
  href,
  children,
  icon
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 font-['Montserrat'] text-base font-medium text-brown-dark hover:text-terracotta transition-colors relative py-2"
    >
      {icon}
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const links = [
    { href: '/', label: 'Accueil', icon: <Flame className="w-5 h-5" /> },
    { href: '/boutique', label: 'Boutique', icon: <Flame className="w-5 h-5" /> },
    { href: '/collections', label: 'Collections', icon: <Package className="w-5 h-5" /> },
    { href: '/evenements', label: 'Événements', icon: <Sparkles className="w-5 h-5" /> },
    { href: '/personnaliser', label: 'Personnaliser', icon: <Sparkles className="w-5 h-5" /> },
    { href: '/a-propos', label: 'Notre Histoire', icon: <Heart className="w-5 h-5" /> },
    { href: '/contact', label: 'Contact', icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col h-full py-6">
      <div className="mb-8">
        <h2 className="font-['Great_Vibes'] text-5xl text-terracotta">
          NessyCrea
        </h2>
        <p className="font-['Montserrat'] text-sm text-brown-medium mt-2">
          Bougies artisanales personnalisables
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="flex items-center gap-3 font-['Montserrat'] text-lg text-brown-dark hover:text-terracotta hover:bg-beige transition-all py-4 px-4 rounded-lg group"
            >
              <span className="text-terracotta group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="border-t border-beige-medium pt-6 space-y-3">
        <Link
          href="/compte"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white border-2 border-terracotta text-terracotta font-['Montserrat'] font-medium rounded-lg hover:bg-terracotta hover:text-white transition-all"
        >
          <User className="w-5 h-5" />
          Mon Compte
        </Link>
        <Link
          href="/panier"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-terracotta to-terracotta-dark text-white font-['Montserrat'] font-medium rounded-lg hover:shadow-lg transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          Panier
        </Link>
      </div>
    </div>
  );
}
