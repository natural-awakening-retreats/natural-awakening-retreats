/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_site/**/*.{html,js}",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./index.html",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'lovelace': ['Lovelace', 'serif'],
        heading: ["Lovelace Text", "serif"],
        link: ["Lovelace Text", "serif"],
        body: ["EB Garamond", "serif"],
      },
      colors: {
        cream: '#efede3',      // warm cream background
        sage: '#d9ddca',       // soft sage green
        
        // Text colors (might be good for good contrast)
        'text-primary': '#2c2c2c',    // dark gray for main text
        'text-secondary': '#666666',   // medium gray for secondary text
        'text-muted': '#999999',      // light gray for muted text
      }
    },
  },
  plugins: [],
}