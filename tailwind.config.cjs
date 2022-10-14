/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-header': '#422b1d',

        'text-header': '#FFFFED',
      }
    },
  },
  plugins: [],
}