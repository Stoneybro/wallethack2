/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':'#0C0F19',
        'secondary':'#60CF84',
        'tetiary':'#2196F3',
        'gradient':'linear-gradient(134.44deg, #A1EB90 2.73%, #0F1D0C 119.33%)',
        'button-color':'#1A91F2',
        'button-gradient':'linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%)',
        'bg-gradient':'#2095F329',
        'card':'#0E1826',
        'card-border':'1px solid #178EF233',
      }
    },
  },
  plugins: [],
}
