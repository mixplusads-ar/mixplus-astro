// src/data/site.ts
export const site = {
  brand: 'MixPlus',
  domain: 'https://mixplus.co', // موقت؛ بعداً دامنه نهایی را بگذار

  // ارتباط
  addressFa: 'تهران، ... (آدرس کامل را وارد کنید)',
  addressEn: 'Tehran, ... (enter full address)',
  phone: '+98-21-xxxxxxx',
  email: 'info@mixplus.co',
  hoursFa: 'شنبه تا چهارشنبه ۹–۱۷',
  hoursEn: 'Sat–Wed 9:00–17:00',

  // ویدئو کارخانه (Embed URL — نه لینک معمولی Play)
  factoryVideo: {
    aparat: 'https://www.aparat.com/video/video/embed/videohash/XXXXXXXX/vt/frame',
    youtube: 'https://www.youtube.com/embed/XXXXXXXX?rel=0&modestbranding=1&playsinline=1'
  },

  // شبکه‌های اجتماعی
  socials: {
    instagram: 'https://instagram.com/yourpage',
    aparat: 'https://www.aparat.com/yourpage',
    youtube: 'https://youtube.com/@yourpage',
    linkedin: 'https://www.linkedin.com/company/yourpage',
    telegram: 'https://t.me/yourpage' // پنجمین شبکه
  },

  // کاتالوگ‌ها
  catalogFa: '/docs/catalog-fa.pdf',
  catalogEn: '/docs/catalog-en.pdf',
  
  copyrightHolder: 'MixPlus',
};
export type Locale = 'fa' | 'en';
