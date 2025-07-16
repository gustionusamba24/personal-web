/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Rethink Sans"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        lightGreen: "#70ffc3",
        darkGreen: "#2d8862",
      },
    },
  },
  plugins: [],
};
