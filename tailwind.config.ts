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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        iip: "#393086",
        iio: "#CF5A24",
      },
    },

    plugins: [],
  },
} satisfies Config;
