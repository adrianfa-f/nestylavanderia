/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
                '75': '75ms',
                '150': '150ms'
            }
    },
  },
  plugins: [],
}
