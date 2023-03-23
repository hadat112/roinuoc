/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#3d3d3d',
        white: '#ffffff',
        yellow: '#ffd154',
        error: '#EA0505',
        'grey-500': '#5C5C5C',
        'grey-400': '#7A7A7A',
        'grey-300': '#9A9A9A',
        'grey-250': '#BDBDBD',
        'grey-200': '#D6D6D6',
        'grey-100': '#E8E8E8',
        'grey-50': '#F3F3F3',
      },
      gridTemplateColumns: {
        station: '75% 25%',
        'form-layout-station': '15% 85%',
      },
    },
  },
  plugins: [],
};
