/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        selected: {
          "70%": {
            bottom: 0,
            right: 0,
            scale: "1",
          },
          "93%": {
            bottom: 0,
            right: 0,
            scale: "0.4",
          },
          "100%": {
            bottom: 0,
            right: 0,
            scale: 0,
          },
        },
      },
    },
  },
  plugins: [],
  mode: "jit",
};
