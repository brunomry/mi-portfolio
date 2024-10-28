/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      '2xl':'1400px'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

