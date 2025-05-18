/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {      colors: {
        primary: '#1f1f1f',
        secondary: '#D1D1D1',
        accent: '#3B82F6', /* Changed to a vibrant blue */
        background: '#FDFCFB',
        tertiary: '#F5F2EF',
        dark: {
          primary: '#f1f1f1',
          secondary: '#2E2E2E',
          accent: '#60A5FA', /* A brighter blue for dark mode */
          background: '#121212',
          tertiary: '#1E1E1E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Didot', 'serif'],
      },
    },
  },
  plugins: [],
}