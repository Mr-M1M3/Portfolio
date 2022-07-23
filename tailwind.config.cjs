/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'cursive': ['Merienda', 'cursive'],
        'stylish': ['Lora', 'serif'],
        'primary': ['Mitr', 'sans-serif'],
        'secondary': ['Numans', 'sans-serif']
      },
      colors: {
        's-black': '#0F1A20',
        's-black-light': '#272727',
        's-primary': '#F6AE2D',
        's-white-transparent': 'rgba(255,2555,255,0.1)',
      }
    },
  },
  plugins: [],
}
