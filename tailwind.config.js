/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mitr: ['Mitr', ...defaultTheme.fontFamily.sans],
        itim: ['Itim', ...defaultTheme.fontFamily.sans],
        montserratAlt: ['Montserrat Alternates', ...defaultTheme.fontFamily.sans],
        pacifico: ['Pacifico', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};