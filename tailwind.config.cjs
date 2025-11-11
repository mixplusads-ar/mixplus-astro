// tailwind.config.cjs
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: { brand: '#0fa99c' },
      fontFamily: {
        fa: ['KalamehFaNum','Kalameh','system-ui','sans-serif'],
        en: ['Montserrat','Inter','system-ui','sans-serif'],
      },
      boxShadow: { soft: '0 10px 30px rgba(15,169,156,.18)' },
    },
  },
  darkMode: 'class',
  plugins: [],
};
