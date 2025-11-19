import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette NessyCrea Premium
        white: '#FFFFFF',
        cream: '#FEFDFB',
        beige: {
          DEFAULT: '#F5F5DC',
          medium: '#E8DCC4',
          dark: '#D4C4A8',
        },
        brown: {
          light: '#D2B48C',
          medium: '#C4A77D',
          dark: '#8B7355',
          text: '#2C2C2C',
        },
        terracotta: {
          light: '#F4A89F',
          DEFAULT: '#E2725B',
          dark: '#CD5C5C',
        },
      },
      fontFamily: {
        script: ['var(--font-great-vibes)'],
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(226, 114, 91, 0.1)',
        'medium': '0 8px 30px rgba(196, 167, 125, 0.2)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #E2725B, #D2B48C)',
        'gradient-soft': 'linear-gradient(180deg, #FFFFFF, #F5F5DC)',
        'gradient-hero': 'linear-gradient(135deg, #F5F5DC 0%, #E8DCC4 50%, #D2B48C 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
