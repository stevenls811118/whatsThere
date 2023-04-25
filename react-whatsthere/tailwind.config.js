/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#204a89',
        'secondary': '#feefc7',
        'tertiary': '#607fdc',
      },
    },
  },
  plugins: [],
}

