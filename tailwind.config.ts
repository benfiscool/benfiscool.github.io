import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        stark: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        gray: {
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
          950: '#020617',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'streamline-1': 'streamline-1 8s linear infinite',
        'streamline-2': 'streamline-2 10s linear infinite',
        'streamline-3': 'streamline-3 12s linear infinite',
        'particle-flow': 'particle-flow 6s ease-in-out infinite',
        'dash-flow': 'dash-flow 3s linear infinite',
        'particle-appear': 'particle-appear 6s ease-in-out infinite',
        'trail-fade': 'trail-fade 2s ease-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 15px #0ea5e9' },
          '100%': { boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'glow': {
          '0%': { textShadow: '0 0 5px #0ea5e9' },
          '100%': { textShadow: '0 0 20px #0ea5e9, 0 0 30px #0ea5e9' }
        },
        'scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'streamline-1': {
          '0%': { transform: 'translateX(-100%) translateY(0px)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateX(100%) translateY(-10px)', opacity: '0' }
        },
        'streamline-2': {
          '0%': { transform: 'translateX(-120%) translateY(5px)', opacity: '0' },
          '15%': { opacity: '0.4' },
          '85%': { opacity: '0.4' },
          '100%': { transform: 'translateX(120%) translateY(-5px)', opacity: '0' }
        },
        'streamline-3': {
          '0%': { transform: 'translateX(-110%) translateY(-8px)', opacity: '0' },
          '20%': { opacity: '0.3' },
          '80%': { opacity: '0.3' },
          '100%': { transform: 'translateX(110%) translateY(8px)', opacity: '0' }
        },
        'particle-flow': {
          '0%': { transform: 'translateX(-100px) scale(0)', opacity: '0' },
          '5%': { transform: 'translateX(-50px) scale(1)', opacity: '1' },
          '95%': { transform: 'translateX(calc(100vw + 50px)) scale(1)', opacity: '1' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) scale(0)', opacity: '0' }
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' }
        },
        'particle-appear': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '10%': { opacity: '1', transform: 'scale(1)' },
          '90%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' }
        },
        'trail-fade': {
          '0%': { opacity: '0' },
          '30%': { opacity: '0.4' },
          '100%': { opacity: '0' }
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
export default config
