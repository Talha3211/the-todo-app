/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3f5884',
         'custom-gray' : "#a0b1d1",
         'custom-silver':'#f4f4f6'
      },
    },
  },
  plugins: [],
}

