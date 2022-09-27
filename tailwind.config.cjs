/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'primary' : '#17223B',
        'secondary-dark' : '#74a8b3',
        'secondary' : '#263859',
        'primary-dark' : '#6a6ca8',
        'background' : '#6B778D',
        'special' : '#FF6768',
        'text' : '#E9E9E9',
      }
    },
    
  },
  plugins: [],
}
