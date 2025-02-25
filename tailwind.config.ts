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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        iip: '#393086',
        iio: '#CF5A24',
      },
      screens: {
        tablet: '640px',
        laptop: '768px',
        desktop: '1024px',
        wide: '1280px',
        '2xl': '1536px',
      },
      animation: {
        'horizontal-bounce': 'bounceX 1s infinite',
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      fontFamily: {
        makro: ['var(--font-makro)'],
      },
    },
  },
  plugins: [],
} satisfies Config
