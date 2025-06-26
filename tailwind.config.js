/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oswald', 'sans-serif'], 
        chicle: ['Chicle', 'sans-serif'],
      },
      colors: { 
        darkblue: "#213448", 
        mediumblue: "#547792", 
        lightblue: "#94B4C1",
        offwhite: "#ECEFCA"
      }
    },
  },
  plugins: [],
};
