/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d3b44',
          light: '#145566',
          dark: '#072229'
        },
        accent: {
          DEFAULT: '#00c2a8',
          hover: '#00a892',
          light: 'rgba(0, 194, 168, 0.12)'
        },
        coral: {
          DEFAULT: '#ff6b6b',
          light: 'rgba(255, 107, 107, 0.12)'
        },
        ink: {
          DEFAULT: '#0d1f23',
          secondary: '#3d5a61',
          muted: '#6b8a93',
          light: '#94a8ae'
        },
        bg: {
          base: '#fafbfc',
          card: '#ffffff',
          dark: '#0a1f24',
          muted: '#f4f6f8'
        },
        line: {
          DEFAULT: '#e2e8ec',
          dark: 'rgba(255, 255, 255, 0.1)'
        },
        slateBlue: '#0d3b44'
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif']
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.875rem',
        lg: '1.25rem',
        xl: '1.75rem'
      },
      boxShadow: {
        soft: '0 4px 20px rgba(13, 59, 68, 0.06)',
        medium: '0 10px 40px rgba(13, 59, 68, 0.08)',
        large: '0 20px 60px rgba(13, 59, 68, 0.12)',
        glow: '0 0 40px rgba(0, 194, 168, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 10s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.12', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(1.05)' }
        }
      }
    }
  },
  plugins: []
};
