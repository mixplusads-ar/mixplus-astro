// src/data/categories.ts
// ساختار دسته‌بندی محصولات + زیر‌دسته‌ها

export type Sub = { nameFa: string; nameEn: string; slug: string };
export type Cat = { nameFa: string; nameEn: string; slug: string; subs: Sub[] };

export const categories: Cat[] = [
  {
    nameFa: 'اجاق گاز',
    nameEn: 'Hobs',
    slug: 'hobs',
    subs: [
      { nameFa: 'اجاق استیل',   nameEn: 'Stainless', slug: 'stainless' },
      { nameFa: 'اجاق شیشه‌ای', nameEn: 'Glass',     slug: 'glass' },
      { nameFa: 'اجاق لعابی',   nameEn: 'Enamel',    slug: 'enamel' },
      { nameFa: 'اجاق برقی',    nameEn: 'Electric',  slug: 'electric' },
    ],
  },
  {
    nameFa: 'سینک ظرفشویی',
    nameEn: 'Sinks',
    slug: 'sinks',
    subs: [
      { nameFa: 'سینک‌های دست‌ساز', nameEn: 'Handmade',   slug: 'handmade' },
      { nameFa: 'استیل توکار',      nameEn: 'Inset',      slug: 'inset' },
      { nameFa: 'استیل روکار',      nameEn: 'Topmount',   slug: 'topmount' },
      { nameFa: 'نیمه فانتزی',      nameEn: 'Semi-Fancy', slug: 'semi-fancy' },
      { nameFa: 'گرانیتی',          nameEn: 'Granite',    slug: 'granite' },
      { nameFa: 'زیر کابینتی',      nameEn: 'Undermount', slug: 'undermount' },
    ],
  },
  {
    nameFa: 'فرتوکار',
    nameEn: 'Built-in Ovens',
    slug: 'ovens',
    subs: [],
  },
  {
    nameFa: 'هود',
    nameEn: 'Hoods',
    slug: 'hoods',
    subs: [
      { nameFa: 'هود توکار',  nameEn: 'Built-in', slug: 'built-in' },
      { nameFa: 'هود دیواری', nameEn: 'Wall',     slug: 'wall' },
    ],
  },
];
