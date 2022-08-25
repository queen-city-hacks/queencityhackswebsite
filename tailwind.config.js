/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        base: "#3b2f2f",
        baseLight: "#524d4d",
        lightModeBase: "#f8f0e3",
        lightModeBaseLight: "#ffffff",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      special: ['"Press Start 2P"'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  important: true,
};
