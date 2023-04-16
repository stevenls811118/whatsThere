/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#450d75',
        'secondary': '#7716ca',
        'tertiary': '#130420',
      },
    },
  },
  plugins: [],
}

