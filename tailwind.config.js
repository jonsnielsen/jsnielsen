module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      background: {
        DEFAULT: '#f6f0ed',
        600: '#eee3dd',
      },
      text: {
        DEFAULT: '#000',
      },
      primary: {
        DEFAULT: '#0065D4',
      },
      secondary: { DEFAULT: '#0065D4' },
    },
    fontSize: {
      'huge-max': '5.5rem',
      'huge-min': '2.3rem',

      tiny: '1rem',
      sm: '1.2rem',
      'base-400': '1.5rem', // 24px
      base: '1.35rem', // 26px
      lg: '2.35rem',
      xl: '5.50rem',
      'xl-400': '3.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 600,
      bold: 800,
    },
    fontFamily: {
      display: ['Plus Jakarta Sans', 'sans-serif'],
    },
    screens: {
      tiny: '550px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      workItemBreakpoint: '900px',

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1460px',
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
        90: '22rem',
      },
      padding: {
        42: '10.3rem',
      },
      maxWidth: {
        xxl: '1624px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
