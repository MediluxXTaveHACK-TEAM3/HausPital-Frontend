/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      white: "#FFF",
      black: "#000000",
      col1: "#9747FF",
      col2: "#5260FF",
      orange: {
        50: "#FFFAE6",
      },},
    
    },
  },
  plugins: [],
};
