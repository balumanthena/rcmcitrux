/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8',   // deep purple
        accent: '#06B6D4',    // teal/cyan
        highlight: '#F59E0B', // amber
        background: '#F8FAFC', // soft gray background
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'sans-serif'],
        body: ['Roboto', 'ui-sans-serif', 'sans-serif'],
        caption: ['Open Sans', 'ui-sans-serif', 'sans-serif'], // example caption font
      },
      borderRadius: {
        xl: '1rem',        // rounded-xl default
        '2xl': '1.5rem',   // larger rounded corners
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.05)',
        medium: '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
