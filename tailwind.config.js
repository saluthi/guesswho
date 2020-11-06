// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
      './src/pages/**/*.js',
      './src/components/**/*.js'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },          
      },
    },
    variants: {}
}