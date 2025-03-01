import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '1/20': '5%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%,',
        '9/10': '90%',
        '6/10': '60%',
        '7/10': '70%',
        '2/10': '22%',
      },
      colors: {
        iip: '#393086', // Deep blue-purple
        iio: '#CF5A24', // Burnt orange
        nude: '#E8DCCB', // Soft nude beige
        sand: '#C4B6A3', // Muted sand
        taupe: '#8E8372', // Soft taupe
        graphite: '#2A2A2A', // Dark graphite
        offwhite: '#F5F4EF', // Off-white
        ash: '#B8B5B0', // Ash gray
      },
      screens: {
        tablet: '640px',
        laptop: '768px',
        desktop: '1024px',
        wide: '1280px',
        '2xl': '1536px',
      },
      animation: {
        ripple: 'ripple 0.7s ease-out',
        'horizontal-bounce': 'bounceX 1s infinite',
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(5px)' },
        },
        ripple: {
          '0%': { width: '0px', height: '0px', opacity: '0.6' },
          '100%': { width: '400px', height: '400px', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
