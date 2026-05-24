/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#08090E',
        surface2: '#11161F',
        accent: '#8D7CFF',
        accent2: '#7BB1FF',
        glow: '#6D7FFF',
        glow2: '#42D8FF'
      },
      boxShadow: {
        neon: '0 20px 80px rgba(99, 102, 241, 0.18)',
        soft: '0 18px 40px rgba(10, 12, 25, 0.25)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(138, 102, 255, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(66, 216, 255, 0.16), transparent 28%)'
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
