/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066F9",
        secondary: "#FFD400",
        tertiary: "#D3E6EF",
      },
    },
  },
  plugins: [],
};
