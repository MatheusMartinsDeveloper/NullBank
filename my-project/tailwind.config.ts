import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      animation: {
        "bounce-y": "bounceY 10s infinite",
        "bounce-x": "bounceX 10s infinite",
        "bounceY-Card": "bounceYCard 10s infinite",
        "bounceY-CardSecond": "bounceYCardSecond 10s infinite",
        "icon": "bounceIcon 5s infinite"
      },
      keyframes: {
        bounceY: {
          "0, 100%": { transform: "translate(0)" },
          "10%": { transform: "translateY(55px)", rotate: "10deg" }
        },
        bounceX: {
          "0, 100%": { transform: "translate(0)" },
          "25%": { transform: "translateX(55px)", rotate: "5deg" }
        },
        bounceYCard: {
          "0, 100%": { transform: "translate(0)" },
          "100%": { transform: "translateX(50%)", rotate: "-15deg" }
        },
        bounceYCardSecond: {
          "0, 100%": { transform: "translate(0)" },
          "100%": { transform: "translateX(50%)", rotate: "15deg" }
        },
        bounceIcon: {
          "0, 100%": { transform: "translate(0)" },
          "25%": { transform: "translateY(-100%)", scale: "110%" }
        }
      },
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