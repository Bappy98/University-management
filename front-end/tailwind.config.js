/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
       move:{
        '0%' : {
          transform: "translateY(-20%)"
        },
        '100%':{
          transform: "translateY(-50%)"
        }
       }
      },
      animation:{
        move1: 'move 1s 1'
      }
    },

  },
  fontFamily: {
    'normal':['Poppins',  'sans-serif'],
    // 'italic':['Poppins', 'sans-serif']
  },
  plugins: [],
}