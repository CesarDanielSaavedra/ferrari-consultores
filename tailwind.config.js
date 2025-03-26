/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Noto Serif'", "serif"], // Para Noto Serif (variable o estática)
        vietnam: ["'Be Vietnam'", "sans-serif"], // Para Be Vietnam (estática)
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#E59435",
          dark: "#1A2B4C",
        },
        secondary: {
          blue: "#606AA1",
          gray: "#7B867E",
          brown: "#B27A64",
          butter: "#DCE1EC",
          lightGray: "#D9E1D9",
          beige: "#E7E2CD",
          peach: "#E2C8C",
        },
      },
    },
  },
  plugins: [],
};