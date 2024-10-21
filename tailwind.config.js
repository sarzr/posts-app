/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        fit: "-webkit-fill-available",
        20: "20%",
        15: "15%",
        90: "90%"
      },
      colors: {
        GrayL: "#ebebf8",
      },
    },
  },
  plugins: [],
};
