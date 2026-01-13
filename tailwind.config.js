/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",     // 🌌 Deep Space Blue (Stars ke liye best)
        secondary: "#aaa6c3",   // Light Gray Text
        tertiary: "#151030",    // Darker Purple/Blue for cards
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        signature: ["Great Vibes", "cursive"], 
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}