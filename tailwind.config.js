module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#1B31A8',
      secondary: '#0079FF',
      gray: {
        25: '#708797',
        50: '#8A9CA9',
        75: '#4D6475',
        100: '#1E2A32'
      },
      white: {
        25: '#FFFFFF',
        50: '#F4F8FA',
        75: '#E9EEF2',
        100: '#CBD5DC'
      }
    },
    fontSize: {
      '2xl': '12px',
      '3xl': '14px',
      '4xl': '16px',
      '5xl': '18px',
      '6xl': '20px',
      '7xl': '24px',
      '8xl': '32px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
