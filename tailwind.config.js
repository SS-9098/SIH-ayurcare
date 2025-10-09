/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        ayur: {
          emerald: '#10b981',
          sage: '#98a88c',
          sand: '#e9ddc8',
          gold: '#c8a24d',
          ink: '#1f2937',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
