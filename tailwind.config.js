/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald"
      },
      screens: {
        phone: "430px",
        "2k":"1920px",
      },
      scale: {
        1.8: "1.08",
        135: "1.35",
        152: "1.52",
        300: "3"

      }
    },
  },
  plugins: [],
}

