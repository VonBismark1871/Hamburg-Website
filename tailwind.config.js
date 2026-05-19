/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(193 85% 16%)',
          light: 'hsl(193 69% 21%)',
          dark: 'hsl(193 95% 10%)'
        },
        accent: {
          DEFAULT: 'hsl(172 100% 38%)',
          hover: 'hsl(172 100% 33%)'
        },
        background: 'hsl(210 20% 98%)',
        foreground: 'hsl(193 41% 10%)',
        muted: 'hsl(203 25% 44%)',
        border: 'hsl(210 14% 89%)',
        slateBlue: 'hsl(193 85% 16%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif']
      },
      borderRadius: {
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
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
