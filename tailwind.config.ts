import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '1/20': '5%',
        '1/5': '20%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'iip':'#393086',
        'iio':'#CF5A24',
      },
      // animation for ibutton
      animation: {
        'bg-fill-left': 'bgFillLeft 0.5s ease-out',
        'bg-fill-right': 'bgFillRight 0.5s ease-out',
        'bg-fill-top': 'bgFillTop 0.5s ease-out',
        'bg-fill-bottom': 'bgFillBottom 0.5s ease-out',
      },
      keyframes: {
        bgFillLeft: {
          '0%': { width: '0', left: '0' },
          '100%': { width: '100%', left: '0' },
        },
        bgFillRight: {
          '0%': { width: '0', right: '0' },
          '100%': { width: '100%', right: '0' },
        },
        bgFillTop: {
          '0%': { height: '0', top: '0' },
          '100%': { height: '100%', top: '0' },
        },
        bgFillBottom: {
          '0%': { height: '0', bottom: '0' },
          '100%': { height: '100%', bottom: '0' },
        },
},
  },

  plugins: [],
}
} satisfies Config;
