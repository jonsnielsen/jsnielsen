module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: {
        DEFAULT: '#F5F5F5',
        600: '#E9E9E9'
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
      'sm': '1.1rem',
      'base-400': '1.5rem', // 24px
      'base': '1.35rem', // 26px
      'lg': '2.65rem',
      'xl': '5.50rem',
      'xl-400': '3.5rem',
    },
    fontWeight: {
      normal: 400,
      bold: 600,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'workItemBreakpoint': '900px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1460px',
      // => @media (min-width: 1280px) { ... }
      // => @media (min-width: 1536px) { ... }
    },
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1466',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      margin: {
        '90': '22rem'
      },
      maxWidth: {
        xxl: '1624px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}