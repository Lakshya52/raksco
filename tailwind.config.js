/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        gold: {
          DEFAULT: '#d4af37',
          dark: '#b5952f',
          light: '#f3e5ab',
          50: '#fdfbf4',
          100: '#fbf5e6',
          200: '#f6e7c1',
          300: '#efd391',
          400: '#e5b958',
          500: '#d4af37',
          600: '#c58b21',
          700: '#a56a1e',
          800: '#87541f',
          900: '#71461e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
