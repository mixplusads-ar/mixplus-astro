// src/data/site.ts
export const site = {
  brand: 'MixPlus',
  domain: 'https://mixplus.co', // وقتی دامنه اصلی وصل شد، همین بمونه
  localeDefault: 'fa',
  locales: ['fa','en'] as const,

  // Contact (TODO: مقادیر واقعی را وارد کن)
  addressFa: 'تهران، ... (آدرس کامل را وارد کنید)',
  addressEn: 'Tehran, ... (enter full address)',
  phone: '+98-21-xxxxxxx',
  email: 'info@mixplus.co',
  hoursFa: 'شنبه تا چهارشنبه ۹–۱۷',
  hoursEn: 'Sat–Wed 9:00–17:00',

  // Socials (اگر لینک واقعی داری جایگزین کن)
  socials: {
    instagram: 'https://instagram.com/yourpage',
    aparat: 'https://www.aparat.com/yourpage',
    youtube: 'https://youtube.com/@yourpage',
    linkedin: 'https://www.linkedin.com/company/yourpage',
  },

  // Catalogs
  catalogFa: '/docs/catalog-fa.pdf',
  catalogEn: '/docs/catalog-en.pdf',

  // Legal
  copyrightHolder: 'MixPlus',
};
export type Locale = typeof site.locales[number];
