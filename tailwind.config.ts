module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f',
        accent: '#e11d48',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    }
  },
  plugins: [],
}
