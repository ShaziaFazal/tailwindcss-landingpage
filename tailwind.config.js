module.exports = {
  purge: {
    preserveHtmlElements: false,
    layers: ['components', 'utilities'],
    content: ['./src/**/*.html'],
  },
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
