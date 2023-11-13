/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'orange3': '#ff971d',
      'salmon': '#ffe8d6',
      'white': '#f9f6f7',
      'coltext': '#494949',
      'blue2': '#1d4ed8',
      'lightoran': '#fff7ed',
      'orange2': '#fdba74',
      'darkoran': '#c2410c',
      'semidarkor': '#fed7aa',
      'black2': '#000000',
      'green2': '#22c55e',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

