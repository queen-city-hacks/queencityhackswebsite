/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        base: "#3b2f2f",
        baseLight: "#524d4d",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      special: ['"Press Start 2P"'],
    },
  },
  plugins: [],
};
