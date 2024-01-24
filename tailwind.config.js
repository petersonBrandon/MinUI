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
          "0%": { opacity: 0, scale: "0.98" },
          "100%": { opacity: 1, scale: "1" },
        },
      },
      animation: {
        "click-bounce": "click-bounce 0.3s ease-in-out",
        fadeIn: "fadeIn .2s ease-in-out forwards",
        fadeOut: "fadeIn .2s ease-in-out reverse",
      },
    },
  },
  plugins: [],
};
