/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const lineClamp = require("@tailwindcss/line-clamp");
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      neutral: "#ABCFC0",
      secondary: "#F7E7CE",
      accent: "#0AB5CD",
      text: "#837865",
    },
    extend: {
      animation: {
        visibility: "visibility 0s, opacity 0.5s linear",
      },
    },
  },
  plugins: [lineClamp],
};
