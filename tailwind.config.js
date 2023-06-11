/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'nav-start':'#203040',
        'nav-middle':'#324760',
        'nav-end':'#517D92'
      }
    },
  },
  plugins: [],
}
