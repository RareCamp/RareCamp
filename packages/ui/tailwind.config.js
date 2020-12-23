module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#3e3465',
        tertiary: '#f0f2f5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
