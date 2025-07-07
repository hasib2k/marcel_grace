/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fbff',
          100: '#f0f7ff',
          200: '#e1efff',
          300: '#c3dffe',
          400: '#94c5fc',
          500: '#6A89A7',
          600: '#5470a3',
          700: '#465f8f',
          800: '#384959',
          900: '#2d3e4f',
        },
        secondary: {
          50: '#f8fbff',
          100: '#f0f7ff',
          200: '#e1efff',
          300: '#BDDDFC',
          400: '#88BDF2',
          500: '#6A89A7',
          600: '#5470a3',
          700: '#465f8f',
          800: '#384959',
          900: '#2d3e4f',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#88BDF2',
          400: '#6fb6ee',
          500: '#4a9eff',
          600: '#3b82f6',
          700: '#2563eb',
          800: '#1d4ed8',
          900: '#1e40af',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
        display: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
        body: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
        'nunito': ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale': 'scale 0.5s ease-out',
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
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
        glow: '0 0 15px rgba(106, 137, 167, 0.4)',
        'liquid': '0 8px 32px rgba(106, 137, 167, 0.15)',
        'glass': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'liquid-gradient': 'linear-gradient(135deg, rgba(106, 137, 167, 0.1) 0%, rgba(189, 221, 252, 0.1) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
    },
  },
  plugins: [],
}
