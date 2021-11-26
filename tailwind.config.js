module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily :{
        'Josefin': 'Josefin Sans, sans-serif',
        'arial' : 'Arial',
        "Nunito Sans":"Nunito Sans , sans-serif"
      },
      backgroundImage: {
        'head-pattern': "url('/david.jpg')",
       },
       textColor:{
        'primaryb': '#457F9C',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
