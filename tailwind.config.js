/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",       // Premium Black
        accent: "#00d8ff",      // Neon Cyan (Logo Glow ke liye)
      },
      fontFamily: {
        signature: ["Great Vibes", "cursive"], // Logo Font
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}