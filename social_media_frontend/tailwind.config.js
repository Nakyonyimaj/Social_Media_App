/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        fblue:'#357BE2',
        fblack:'#080808',
        white:'#FFFFFF',
        gray:'#E9E9E9',
        backgray:'#f8f8ff',
        darkgray:'#949494',
        green:'#0FC706',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
