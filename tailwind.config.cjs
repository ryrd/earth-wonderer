/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      blue : {
        600 : 'rgb(37 99 235)',
        900 : '#1e3a8a'
      },
      neutral : {
        900 : '#171717'
      },
      offwhite: '#d9d9d9',
      dark: '#050505'
    },
    fontFamily: {
      'anton' : ['Anton'],
      'oswald' : ['Oswald'],
      'gilda' : ['Gilda Display'],
      'kaushan' : ['Kaushan Script'],
    },
    extend: {
      "headwind.runOnSave": false,
      cursor: {
        'cursor': 'url(/cursor.svg), pointer',
        'point': 'url(/point.svg), pointer',
      }
    },
  },
  plugins: [],
}
