/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "#FFF",
        primary_300: "#FFCC21",
        primary_300_400: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
        primary_400: "#FF963C",
        primary_500: "#EA6C00",
        secondary_300: "#8FE9D0",
        dark_600: "#2E2E2E",
        dark_500_text: "#414141",
        gray_400: "#777 ",
      },
      fontFamily: {
        sansCJK_JP: ["Noto SansCJK JP", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};