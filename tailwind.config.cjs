/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0fa99c' }
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      fontFamily: {
        fa: ['Kalameh', 'Vazirmatn', 'system-ui', 'sans-serif'],
        en: ['Montserrat', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
