/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7FA',
          100: '#E1F0F7',
          200: '#B3E0EF',
          300: '#87CEEB', // sky blue
          400: '#5CB6D6',
          500: '#0B6285', // deep blue
          600: '#09516B',
          700: '#073F52',
          800: '#052F3A',
          900: '#031F22',
        },
        secondary: {
          50: '#f4f7ff',
          100: '#e8eeff',
          200: '#d1ddff',
          300: '#a6bfff',
          400: '#7594ff',
          500: '#4d6eff',
          600: '#2440ff',
          700: '#1333ef',
          800: '#1029c8',
          900: '#132aa1',
        },
        accent: {
          50: '#fff8ed',
          100: '#fff0d6',
          200: '#ffdead',
          300: '#ffc578',
          400: '#ffa43d',
          500: '#ff8c15',
          600: '#ff6f07',
          700: '#cc4e08',
          800: '#a13d0f',
          900: '#833410',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        museo: ['MuseoModerno', 'sans-serif'],
      },
      animation: {},
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        card: '0 0 20px rgba(0, 0, 0, 0.05)',
        soft: '0 2px 15px rgba(0, 0, 0, 0.05)',
        glow: '0 0 15px rgba(0, 163, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
