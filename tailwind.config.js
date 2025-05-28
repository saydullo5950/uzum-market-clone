/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pe": '#7000FF',
        "bg": '#F0F0FF'
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

