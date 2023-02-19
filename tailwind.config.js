/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        btnColor1: " #FFB548 ",
        btnColor2: "#F3AF34",
        darktext: "rgba(255, 255, 255, 0.7)",
        darkbg: "rgba(15, 15, 15, 0.9)",
        commentbg:"rgba(255, 255, 255, 0.08)",
        inputbg:"rgba(255, 255, 255, 0.08)"
      },
      fontFamily: {
        Bebas: "'Bebas Neue', cursive",
        Open_Sans: "'Open Sans', sans-serif",
      },
      fontSize:{
          
      },
    },
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
    screens: {
      ss:  { min: "320px", max:"320px" },
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
