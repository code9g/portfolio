/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#d4d4d4",
        "foreground-color": "#a3a3a3",
        "secondary-color": "#0a0a0a",
      },
    },
  },
  plugins: [],
};
