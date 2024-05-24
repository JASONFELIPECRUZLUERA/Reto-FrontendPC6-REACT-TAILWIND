/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {

        'SoftOrange': 'rgb(233, 130, 61)',
        'SoftRed': 'rgb(217, 60, 55)',
        'OffWhite': 'rgb(255, 254, 247)',
        'GrayishBlue': 'rgb(190, 190, 207)',
        'DarkGrayishBlue': 'rgb(95, 100, 114)',
        'VeryDarkBlue': 'rgb(13, 0, 26)',
  }
},
  },
plugins: [],
}