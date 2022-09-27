/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'primary' : '#17223B',
        'secondary' : '#263859',
        'background' : '#6B778D',
        'special' : '#FF6768',
        'text' : '#E9E9E9',
      },
    },
    
  },
  plugins: [],
}
