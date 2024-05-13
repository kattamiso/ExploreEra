/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '800px',
        'lg': '1150px'
      }
    },
  },
  plugins: [],
}

