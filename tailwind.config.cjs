/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'cursive': ['Sacramento', 'cursive'],
        'stylish': ['Lora', 'serif'],
        'primary': ['Mitr', 'sans-serif'],
        'secondary': ['Numans', 'sans-serif']
      },
      colors: {
        's-black': '#0F1A20',
        's-black-light': '#272727',
        's-primary': '#F6AE2D' 
      }
    },
  },
  plugins: [],
}
