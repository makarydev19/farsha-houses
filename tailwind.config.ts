import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#022960",
        secondary: "#F2C641",
        tertiary: {
          dark: "#016e",
          light: "#ebebeb",
        },
      },
      fontFamily: {
        poppins: ["var(--font-oppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
