/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'], // Specify your HTML files for purge
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '#1E213A',
        lightBlue: '#100E1D',
        darkGrey: '#88869D',
        lightGrey: '#EBEAED',
        white: '#FFFFFF',
        black: '#000000',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'dark', // Correctly disable dark mode entirely
}
