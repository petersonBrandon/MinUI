/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "click-bounce": {
          "0%": { scale: "1" },
          "50%": { scale: "0.9" },
          "100%": { scale: "1" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "click-bounce": "click-bounce 0.3s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
