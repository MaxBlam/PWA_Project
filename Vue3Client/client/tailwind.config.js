/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        visibility: "visibility 0s, opacity 0.5s linear",
      },
    },
  },
  plugins: [],
};
