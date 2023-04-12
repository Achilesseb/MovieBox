/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        MBblue: '#2196f3',
        MBheader: '#282c34',
        MBborderHeight: '0.3rem',
      },
      fontFamily: {
        heading: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
};
