/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {},
  plugins: [],
};
