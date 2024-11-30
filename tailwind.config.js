/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
        "Montserrat" : ['Montserrat'],
        "Allura" : ['Allura']
      },
      colors : {
        "putih" : "#FFFFFF",
        "pinkw"  :"#F0BCE3",
        'darkgold': '#B8860B',
        'goldenyellow': '#FDB813',
        'gold': '#FDB813',
        netral:{
          600:'#6B7280'
        },
        orchid: {
          500: '#DA70D6',  
          300: '#A40781'
        },
        
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 100px 200px rgba(182, 97, 176, 0.8)',
      },

      // animation: {
      //   typing: "typing 3.5s steps(30) 1s forwards", // Efek mengetik
      //   blinkCaret: "blinkCaret 0.75s step-end infinite", // Efek kursor berkedip
      // },
      // keyframes: {
      //   typing: {
      //     "0%": { width: "0" },
      //     "100%": { width: "100%" },
      //   },
      //   blinkCaret: {
      //     "50%": { borderColor: "transparent" },
      //   },
      // },
      
      
      
    },
    
  },
  plugins: [],
}

