/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'primary' : '#FFFFFF',
        'secondary' : '#FFFFFF',
        'background' : '#FFFFFF',
        'special' : '#FF6768',
        'text' : '#000000',
      },
    },
  },
  plugins: [],
}
