/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#1D1616',
        customGrey: '#EEEEEE'
      },
      fontFamily: {
        agbalumo: ["Agbalumo", 'roboto'],
        Mali: ["Mali", 'roboto']
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}

