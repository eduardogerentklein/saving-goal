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
    },
    spacing: {
      1: '4px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '28px',
      6: '32px',
      7: '35px',
      8: '40px',
      9: '45px',
      10: '48px',
      11: '56px',
      12: '64px'
    },
    fontWeight: {
      1: '400',
      2: '500',
      3: '600'
    },
    borderRadius: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '32px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
