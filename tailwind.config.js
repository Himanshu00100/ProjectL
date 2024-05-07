/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald"
      },
      screens: {
        phone: "430px"
      },
      scale: {
        300: "3"

      }
    },
  },
  plugins: [],
}

