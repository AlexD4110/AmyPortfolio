// tailwind.config.js

import animate from "tailwindcss-animate"; // <-- ADD THIS AT THE TOP

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica Neue Light', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        // you can add your custom colors here
      }
    }
  },
  plugins: [
    animate, // <-- THEN USE THIS
  ],
};
