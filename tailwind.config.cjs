/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'anton' : ['Anton'],
      'oswald' : ['Oswald'],
      'gilda' : ['Gilda Display'],
    },
    extend: {},
  },
  plugins: [],
}
