module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Open Sans", ui-sans-serif, system-ui, Segoe UI, Roboto, sans-serif'
      },
      fontSize: {
        xs: ['10px', '22px'],
      },
      boxShadow: {
        sm: '0 4px 8px 0 rgba(0,0,0,.07)',
        DEFAULT: '0 4px 19px 0 rgba(0,0,0,.07)',
      }
    },
  },
}