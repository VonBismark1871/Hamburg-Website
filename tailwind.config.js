/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slateBlue: '#1a1a18',
        accent: '#2563eb',
        slate: {
          50: '#f8f6f0',
          100: '#f1eee6',
          200: '#e4e1d8',
          300: '#d0cdc4',
          400: '#b0aca2',
          500: '#9a9890',
          600: '#6d6b63',
          700: '#4a4a44',
          800: '#2f2f2b',
          900: '#1a1a18'
        },
        indigo: {
          50: '#eff4ff',
          100: '#dce8ff',
          300: '#93b4ff',
          500: '#1d4ed8',
          600: '#1d4ed8',
          700: '#1e40af'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.07)'
      }
    }
  },
  plugins: []
};
