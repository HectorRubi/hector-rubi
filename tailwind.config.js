const colors = require('tailwindcss/colors')
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      accent: colors.lime,
      // For background color
      primary: colors.slate,
      // For text color
      secondary: colors.zinc,
    },
    extend: {
      backgroundImage: {
        'gradient-radial-top':
          'radial-gradient(circle 400px at top, var(--tw-gradient-stops))',
        'gradient-radial-left':
          'radial-gradient(circle 400px at center left, var(--tw-gradient-stops))',
        'gradient-radial-right':
          'radial-gradient(circle 400px at center right, var(--tw-gradient-stops))',
        'gradient-radial-center':
          'radial-gradient(circle 400px at center, var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        jump: {
          '0%, 100%': {
            transform: 'translateY(-25px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        carousel: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        'carousel-inverse': {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        carousel: 'carousel 200s infinite linear',
        'carousel-inverse': 'carousel-inverse 200s infinite linear',
      },
    },
  },
  plugins: [],
}
