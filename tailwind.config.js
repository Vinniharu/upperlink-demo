/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        util: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(10rem)" },
          "50%": { transform: "translateY(6rem) translateX(10rem)" },
          "80%": { transform: "translateX(0) translateY(6rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        util: "util 14s ease-in infinite",
      },
    },
  },
  plugins: [],
};

