/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slateBlue: 'var(--text-primary)',
        accent: 'var(--accent)',
        brand: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          cardHover: 'var(--bg-card-hover)',
          border: 'var(--border-subtle)',
          borderAccent: 'var(--border-accent)',
          text: 'var(--text-primary)',
          textSecondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--accent)',
          accentLight: 'var(--accent-light)',
          success: 'var(--accent-green)'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(2, 8, 23, 0.35)'
      }
    }
  },
  plugins: []
};
