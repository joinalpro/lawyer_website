/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontMartel: ["Martel"],
        dancing: ["Dancing Script"]
      },
      backgroundImage: {
        bannerImg: "url('./src/assets/bg-lawyer.jpg')",
        serviceImg: "url('./src/assets/lawyer-img.jpg')" 
      },
      backgroundColor: {
        bg_button: "#f2af60"
      },
      textColor: {
        bla: '#1c0c3a',
        kalo: '#4d4d4d'
      },
    
    },
  },
  plugins: [daisyui],
}

