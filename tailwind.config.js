/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf6ec',
          100: '#f3e7d1',
          200: '#e4c89f',
          300: '#cfa36a',
          400: '#b68143',
          500: '#9a642d',
          600: '#784720',
          700: '#573018',
          800: '#351c10',
          900: '#21100a',
          950: '#130804',
        },
        cream: '#fff8eb',
        beige: '#ead7bc',
        gold: '#c79a57',
        ink: '#201511',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
      boxShadow: {
        gold: '0 18px 55px rgba(199, 154, 87, 0.28)',
        paper: '0 30px 90px rgba(46, 27, 15, 0.22)',
      },
    },
  },
  plugins: [],
}
