/* eslint @typescript-eslint/no-var-requires: "off" */
/** @type {import('tailwindcss').Config} */

`@ts-nocheck`;
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme["fontFamily"]["sans"]],
    },
    extend: {
      gridTemplateColumns: {
        footer: "auto 1fr",
      },
      dropShadow: {
        "drop-shadow-lg-white": "0 10px 8px rgb(255, 255, 255 / 0.04)",
      },
      transitionProperty: {
        height: "height",
        maxHeight: "max-height",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
