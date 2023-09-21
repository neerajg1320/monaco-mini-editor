/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3': '2rem repeat(2, minmax(0, 15rem))',
      },
      gridTemplateRows: {
        '2': 'repeat(2, minmax(0, 15rem))',
      }
    },
  },
  plugins: [],
}

