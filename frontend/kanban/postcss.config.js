const tailwindcss = require('tailwindcss');

module.exports = {
   future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
   },
   plugins: [
    tailwindcss
  ]

};