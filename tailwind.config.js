/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#2acfcf",
        "primary-2": "#3b3054",
        "primary-3": "#f46262",
        "neutral-1": "#ffffff",
        "neutral-2": "#bfbfbf",
        "neutral-3": "#9e9aa7",
        "neutral-4": "#35323e",
        "neutral-5": "#232127",
        "neutral-6": "#edecee",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
