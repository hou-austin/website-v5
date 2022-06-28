/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('tailwindcss').Config} */

`@ts-nocheck`;
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme["fontFamily"]["sans"]],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
