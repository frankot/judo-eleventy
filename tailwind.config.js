/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'hero':['Lazer84'],
      },
      colors: {
        'cust-black': '#101011',
        'cust-yellow': '#ffd300',
        'cust-yellow-hover': '#e5bd00',
      }
    },
  },
  plugins: [],
}
