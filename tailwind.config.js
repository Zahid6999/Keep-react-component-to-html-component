import preset from "./preset"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./**/*.{index.html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [preset]
}