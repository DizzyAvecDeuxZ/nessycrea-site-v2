'use client';

import { motion } from 'framer-motion';

export function CandleAnimation() {
  return (
    <div className="relative w-32 h-56 mx-auto">
      {/* Corps de la bougie avec dégradé amélioré */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-44 rounded-xl relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #F5F5DC 0%, #E8DCC4 50%, #D2B48C 100%)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Effet de relief sur la bougie */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Ombre interne */}
        <div className="absolute inset-0 shadow-inner" style={{
          boxShadow: 'inset 0 2px 8px rgba(139, 69, 19, 0.1)'
        }} />
      </motion.div>

      {/* Mèche */}
      <motion.div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-10 rounded-full"
        style={{
          background: 'linear-gradient(180deg, #8B4513 0%, #5D2E0F 50%, #000000 100%)',
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Flamme principale avec animation améliorée */}
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.3, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          times: [0, 0.7, 1],
          ease: "easeOut"
        }}
      >
        {/* Flamme externe (orange) */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -3, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        >
          <svg
            width="40"
            height="50"
            viewBox="0 0 40 50"
            className="drop-shadow-lg"
          >
            <path
              d="M20,2 Q26,12 26,24 Q26,36 20,42 Q14,36 14,24 Q14,12 20,2 Z"
              fill="url(#outerFlameGradient)"
              filter="url(#glow)"
            />
            <defs>
              <linearGradient id="outerFlameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                <stop offset="40%" style={{ stopColor: '#FF6347', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#E2725B', stopOpacity: 0.9 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>

        {/* Flamme interne (jaune/blanc) */}
        <motion.div
          className="absolute top-1 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -2, 0],
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
          >
            <path
              d="M12,4 Q15,10 15,18 Q15,24 12,28 Q9,24 9,18 Q9,10 12,4 Z"
              fill="url(#innerFlameGradient)"
            />
            <defs>
              <linearGradient id="innerFlameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                <stop offset="30%" style={{ stopColor: '#FFEB3B', stopOpacity: 1 }} />
                <stop offset="70%" style={{ stopColor: '#FFA500', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#FF6347', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Halo de lumière principal */}
        <motion.div
          className="absolute -inset-8 rounded-full blur-2xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, rgba(226, 114, 91, 0.2) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Halo secondaire (plus grand) */}
        <motion.div
          className="absolute -inset-12 rounded-full blur-3xl -z-20"
          style={{
            background: 'radial-gradient(circle, rgba(226, 114, 91, 0.3) 0%, rgba(210, 180, 140, 0.15) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Particules de lumière */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-300 rounded-full"
            style={{
              left: `${Math.random() * 40 - 20}px`,
              top: `${Math.random() * 30 + 10}px`,
            }}
            animate={{
              y: [-20, -60],
              opacity: [1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Effet de chaleur/vagues au dessus de la bougie */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-16 pointer-events-none"
        animate={{
          scaleX: [1, 1.1, 1],
          scaleY: [1, 0.95, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(255, 165, 0, 0.1) 50%, transparent 100%)',
          filter: 'blur(8px)'
        }}
      />
    </div>
  );
}
