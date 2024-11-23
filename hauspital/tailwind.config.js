/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#000000",
        col1: "#9747FF",
        col2: "#5260FF",
        col3: "#6B77F8",
        orange: {
          50: "#FFFAE6",
        },
        custom: {
          blue: "#6B77F8",
          gray: "#B7B9C9",
        },
      },
      fontSize: {
        d1: ["22px", { lineHeight: "normal" }], //22px - hard
        d2: ["14px", { lineHeight: "normal" }], //14px - hard
        d3: ["16px", { lineHeight: "normal" }], //16px - hard
        d4: ["12px", { lineHeight: "normal" }], //12px - hard
        s1: ["24px", { lineHeight: "normal" }], //12px - hard
        s2: ["32px", { lineHeight: "normal" }], //12px - hard
        s3: ["36px", { lineHeight: "normal" }], //12px - hard
      },
      boxShadow: {
        custom1: " 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "button-gradation": "linear-gradient(180deg, #9747FF 0%, #5260FF 100%)",
        "background-gradation":
          "linear-gradient(180deg, #FFF 87%, #BFC4FF 100%)",

      },
    },
  },
  plugins: [],
};
