/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-200": "#ffbf00", // Yellow
        "primary-100": "#ffc929", // Lighter Yellow
        "secondary-200": "#00b050", // Green
        "secondary-100": "#0b1a78", // Dark Blue
      },
    },
  },
  plugins: [],
};