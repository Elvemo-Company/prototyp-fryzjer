/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-burgundy': '#800020',
        'soft-champagne': '#F7E7CE',
        'pearl-white': '#FDEEF4',
        'dusty-mauve': '#B784A7',
        'rich-black': '#000000',
        'gold-accent': '#D4AF37',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['2.5rem', { lineHeight: '1.3' }],
        'large': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
        '60': '15rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, rgba(128, 0, 32, 0.95), rgba(183, 132, 167, 0.8))',
        'champagne-gradient': 'linear-gradient(180deg, rgba(247, 231, 206, 0.3), rgba(253, 238, 244, 0.1))',
        'elegant-overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(128, 0, 32, 0.15)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'soft': '0 5px 20px rgba(183, 132, 167, 0.2)',
      },
    },
  },
  plugins: [],
};