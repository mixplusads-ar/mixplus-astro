export type Sub = { nameFa: string; nameEn: string; slug: string };
export type Cat = { nameFa: string; nameEn: string; slug: string; subs?: Sub[] };

export const categories = [
  { // هود
    nameFa: 'هود', nameEn: 'Hood', slug: 'hood',
    subs: [
      { nameFa: 'هود توکار', nameEn: 'Built-in Hood', slug: 'built-in' },
      { nameFa: 'هود دیواری', nameEn: 'Wall Hood', slug: 'wall' },
    ]
  },
  { // سینک
    nameFa: 'سینک ظرف‌شویی', nameEn: 'Sink', slug: 'sink',
    subs: [
      { nameFa: 'سینک‌های دست‌ساز', nameEn: 'Handmade', slug: 'handmade' },
      { nameFa: 'استیل توکار', nameEn: 'Top Mount Steel', slug: 'top-steel' },
      { nameFa: 'استیل روکار', nameEn: 'Drop-in Steel', slug: 'drop-steel' },
      { nameFa: 'نیمه فانتزی', nameEn: 'Semi-Fantasy', slug: 'semi-fantasy' },
      { nameFa: 'گرانیتی', nameEn: 'Granite', slug: 'granite' },
      { nameFa: 'زیر کابینتی', nameEn: 'Undermount', slug: 'undermount' },
    ]
  },
  { // فر
    nameFa: 'فر توکار', nameEn: 'Oven', slug: 'oven'
  },
  { // اجاق گاز
    nameFa: 'اجاق گاز', nameEn: 'Hob', slug: 'hob',
    subs: [
      { nameFa: 'اجاق استیل',  nameEn: 'Stainless', slug: 'steel' },
      { nameFa: 'اجاق شیشه‌ای', nameEn: 'Glass',    slug: 'glass' },
      { nameFa: 'اجاق لعابی',  nameEn: 'Enamel',   slug: 'enamel' },
      { nameFa: 'اجاق برقی',   nameEn: 'Electric', slug: 'electric' },
    ]
  },
] as const;
