/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mesh': "url('/public/grad.png')",
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}
