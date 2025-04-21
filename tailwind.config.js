/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#D1D1D1',
        accent: '#E68A5E',
        background: '#FDFCFB',
        tertiary: '#F5F2EF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Didot', 'serif'],
      },
    },
  },
  plugins: [],
}