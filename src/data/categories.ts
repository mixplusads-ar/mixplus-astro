export type Sub = { slug: string; nameFa: string; nameEn: string; };
export type Cat = { slug: string; nameFa: string; nameEn: string; subs?: Sub[]; };

export const categories: Cat[] = [
  {
    slug: 'hob',
    nameFa: 'اجاق گاز',
    nameEn: 'Hob',
    subs: [
      { slug: 'steel',   nameFa: 'اجاق استیل',   nameEn: 'Steel' },
      { slug: 'glass',   nameFa: 'اجاق شیشه‌ای', nameEn: 'Glass' },
      { slug: 'enamel',  nameFa: 'اجاق لعابی',   nameEn: 'Enamel' },
      { slug: 'electric',nameFa: 'اجاق برقی',    nameEn: 'Electric' },
    ]
  },
  {
    slug: 'sink',
    nameFa: 'سینک ظرف‌شویی',
    nameEn: 'Sink',
    subs: [
      { slug: 'handmade',   nameFa: 'سینک‌های دست‌ساز', nameEn: 'Handmade' },
      { slug: 'topmount',   nameFa: 'استیل روکار',      nameEn: 'Topmount' },
      { slug: 'undermount', nameFa: 'استیل توکار',      nameEn: 'Undermount' },
      { slug: 'semi-fancy', nameFa: 'نیمه فانتزی',      nameEn: 'Semi-fancy' },
      { slug: 'granite',    nameFa: 'گرانیتی',          nameEn: 'Granite' },
      { slug: 'under-cab',  nameFa: 'زیر کابینتی',      nameEn: 'Under-cabinet' },
    ]
  },
  { slug: 'oven', nameFa: 'فر توکار', nameEn: 'Built-in Oven' },
  {
    slug: 'hood',
    nameFa: 'هود',
    nameEn: 'Hood',
    subs: [
      { slug: 'built-in', nameFa: 'هود توکار',  nameEn: 'Built-in' },
      { slug: 'wall',     nameFa: 'هود دیواری', nameEn: 'Wall' },
    ]
  }
];
