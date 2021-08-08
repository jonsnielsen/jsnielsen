module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: {
        DEFAULT: '#F5F5F5'
      },
      text: {
        DEFAULT: '#000'
      },
      primary: {
        DEFAULT: '#0065D4'
      },
      secondary: { DEFAULT: '#0065D4' }
    },
    fontSize: {
      // 'xs': '.75rem',
      'base-400': '1.5rem', // 24px
      'base': '1.45rem', // 26px
      'lg': '2.65rem',
      'xl': '5.50rem',
      'xl-400': '3.5rem',
    },
    extend: {
      margin: {
        '90': '22rem'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}