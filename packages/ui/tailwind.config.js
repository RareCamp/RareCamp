module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#3e3465',
        tertiary: '#f0f2f5',
        btn: {
          primary: '#1890ff',
          secondary: '#3e3465',
          tertiary: '#ffffff',
        },
        letterpic: {
          primary: '#efdbff',
          secondary: '#b5f5ec',
          tertiary: '#ffffff',
        },
        lettercolor: {
          purple: '#6c5ea1',
          blue: '#4bb1b2',
        },
      },
      width: {
        sm: '4.687rem',
        md: '7.25rem',
        lg: '21.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
