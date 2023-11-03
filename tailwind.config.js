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
        util2: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(13rem)" },
          "50%": { transform: "translateY(13rem) translateX(10rem)" },
          "80%": { transform: "translateX(4rem) translateY(12rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        util: "util 14s ease-in infinite",
        util2: "util2 14s ease-in infinite",
      },
      backgroundImage: {
        "top": "url('/img/utilbottom.d490a4037da8eff6.png')",
        "bottom": "url('/img/yearsofxp.fe77aac6970c019c.png')",
      },
    },
  },
  plugins: [],
};

