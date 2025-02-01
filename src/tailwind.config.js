/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "xs": "400px"
      },
      container: {
        "padding": "2"
      }
    },
  },
  plugins: [],
}