/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f0fdf4',
        surface2: '#dcfce7',
        accent: '#15803d',
        accent2: '#059669',
        glow: '#10b981',
        glow2: '#34d399'
      },
      boxShadow: {
        neon: '0 20px 80px rgba(34, 197, 94, 0.15)',
        soft: '0 18px 40px rgba(34, 197, 94, 0.08)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(34, 197, 94, 0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(52, 211, 153, 0.1), transparent 28%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      screens: {
        'xs': '475px'
      }
    }
  },
  plugins: []
};

