import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-roboto_mono)']
      },
      colors: {
        'primary' : '#66FCF1',
        'secondary' : '#C5C6C7',
        'pribg' : '#051B38',
        'secbg' : '#0B0C10',
        'secd' : '#767677',
        'butcol': '#0B0C10',
      }
    },
  },
  plugins: [],
};
export default config;
