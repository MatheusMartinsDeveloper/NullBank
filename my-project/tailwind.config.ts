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
        gradient: "linear-gradient(157.9deg, #4C6EF5 -0.59%, #1E325F 113.51%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryColorMain: "#4C6EF5",
        primaryColorLight: "#DBE4FF",
        primaryColorDark: "#3B5BDB",
        grayColorExtra: "#212529",
        grayColorVeryDark: "#495057",
        grayColorDark: "#868E96",
        grayColorMedium: "#D9D9D9",
        grayColorLight: "#F8F9FA",
        backgroundColor: "#FAFDF6",
      },
    },
  },
  plugins: [],
};

export default config;