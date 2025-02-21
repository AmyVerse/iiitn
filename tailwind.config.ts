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
        "1/10": "10%",
        "1/20": "5%",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%,",
        "9/10": "90%",
        "6/10": "60%",
        "7/10": "70%",
        "2/10": "22%",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        iip: "#393086",
        iio: "#CF5A24",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
