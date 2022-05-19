module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontSize: {},
      boxShadow: {},
    },
    translate: {},
    fontFamily: {
      body: ['"Open Sans"'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
