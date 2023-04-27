/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3f5470',
        'secondary': '#bdb09a',
        'tertiary': '#7b98bd',
        'quaternary': '#cfe4ff',
      },
    },
  },
  plugins: [],
}

