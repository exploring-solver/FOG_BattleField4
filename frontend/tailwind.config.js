/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur-bg': "url('/imgs/blur_bg.jpg')",
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
}