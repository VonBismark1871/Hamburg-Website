/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08070D',
        'bg-2': '#0B0A12',
        surface: '#110E1A',
        elevated: '#1A1527',
        violet: '#7C3AED',
        'violet-2': '#A855F7',
        cyan: '#22D3EE',
        'cyan-2': '#67E8F9',
        magenta: '#E879F9',
        accent: '#A855F7',
        'accent-2': '#A855F7',
        ink: '#F2F0FA',
        'text-soft': '#C9C4DA',
        muted: '#9690A8',
        faint: '#6B6480',
        success: '#34D399',
        danger: '#F87171',
        slateBlue: '#F2F0FA',
        slate: {
          50: '#1A1527',
          100: '#161226',
          200: '#241f3a',
          300: '#3d3660',
          400: '#6B6480',
          500: '#9690A8',
          600: '#9690A8',
          700: '#C9C4DA',
          800: '#E0DDE8',
          900: '#F2F0FA',
          950: '#F8F7FB'
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
        display: ['Space Grotesk', 'DM Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Space Grotesk', 'DM Sans', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        sm: '12px',
        md: '18px',
        lg: '24px',
        xl: '32px'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.24)',
        card: '0 24px 70px -28px rgba(0,0,0,0.7)',
        glow: '0 0 60px -12px rgba(124,58,237,0.45)',
        'glow-cyan': '0 0 48px -16px rgba(34,211,238,0.4)'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
};
