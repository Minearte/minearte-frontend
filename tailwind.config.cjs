/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#DB2877",
        "bookmark-blue": "#241A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#F7F7F7",
        "bookmark-dark": "#02080C",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
