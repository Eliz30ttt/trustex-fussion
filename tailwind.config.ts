import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(9, 12, 16)',
        foreground: 'rgb(255, 255, 255)',
        'graphite-900': 'rgb(20, 25, 32)',
        'graphite-800': 'rgb(30, 35, 45)',
        'graphite-700': 'rgb(45, 50, 60)',
        'graphite-600': 'rgb(70, 75, 90)',
        'graphite-500': 'rgb(100, 110, 130)',
        'accent-cyan': 'rgb(0, 209, 255)',
        'accent-blue': 'rgb(59, 130, 246)',
        'accent-indigo': 'rgb(99, 102, 241)',
        'trust-green': 'rgb(34, 197, 94)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, rgb(9, 12, 16) 0%, rgb(20, 35, 60) 100%)',
        'gradient-section': 'linear-gradient(180deg, rgb(20, 25, 32) 0%, rgb(15, 20, 28) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 209, 255, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.2)',
        'inset-dark': 'inset 0 1px 3px rgba(0, 0, 0, 0.5)',
        'card-shadow': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 209, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 209, 255, 0.5)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
      },
    },
  },
  plugins: [],
}

export default config
