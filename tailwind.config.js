/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Cyan: "#2acfcf",
        "Dark-Violet": "#3b3054",
        Red: "#f46262",
        Gray: "#bfbfbf",
        "Grayish-Violet": "#9e9aa7",
        "Very-Dark-Blue": "#35323e",
        "Very-Dark-Violet": "#232127",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
