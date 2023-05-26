/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFF',
          DEFAULT: '#6ED4A5',
          dark: '#eee'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
