/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#D1D1D1',
        accent: '#E68A5E',
        background: '#FDFCFB',
        tertiary: '#F5F2EF',
        dark: {
          primary: '#f1f1f1',
          secondary: '#2E2E2E',
          accent: '#E68A5E',
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