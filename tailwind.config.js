/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0A12',
        surface: '#16131F',
        elevated: '#1E1A2B',
        accent: '#A855F7',
        'accent-2': '#A855F7',
        ink: '#ECEAF3',
        muted: '#9690A8',
        faint: '#6B6480',
        success: '#34D399',
        danger: '#F87171',
        /* keep slate for any remaining references */
        slateBlue: '#ECEAF3',
        slate: {
          50: '#1E1A2B',
          100: '#1a1727',
          200: '#2a2540',
          300: '#3d3660',
          400: '#6B6480',
          500: '#9690A8',
          600: '#9690A8',
          700: '#BDBAC8',
          800: '#D5D3DD',
          900: '#ECEAF3',
          950: '#F5F4F8'
        },
        indigo: {
          50: 'rgba(124,58,237,0.1)',
          100: 'rgba(124,58,237,0.14)',
          300: '#A855F7',
          500: '#7C3AED',
          600: '#7C3AED',
          700: '#A855F7'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.24)',
        glow: '0 0 40px rgba(124,58,237,0.25)',
        'glow-lg': '0 0 80px rgba(124,58,237,0.35)'
      }
    }
  },
  plugins: []
};
