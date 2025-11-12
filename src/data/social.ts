// ساختار واحد: هم Map شیء داریم، هم لیست آماده برای رندر

export type SocialMap = {
  linkedin: string;
  instagram: string;
  youtube: string;
  aparat: string;
  telegram: string;
};

// ▼ لینک‌های واقعی تو
export const social: SocialMap = {
  linkedin:  'https://www.linkedin.com/company/mixplus/',
  instagram: 'https://www.instagram.com/mixplus.co?igsh=MWN4YnRtZnc2YmM0eQ==',
  youtube:   'https://www.youtube.com/@mixplusmovie',
  aparat:    'https://www.aparat.com/mixplus.co',
  telegram:  'https://t.me/mixplus_co_bot',
};

// اگر لازم شد به صورت لیست استفاده کنی (برای رندر آیکون‌ها)
export const socialList = [
  { key: 'linkedin',  label: 'LinkedIn',  href: social.linkedin,  icon: '/icons/linkedin.svg'  },
  { key: 'instagram', label: 'Instagram', href: social.instagram, icon: '/icons/instagram.svg' },
  { key: 'youtube',   label: 'YouTube',   href: social.youtube,   icon: '/icons/youtube.svg'   },
  { key: 'aparat',    label: 'Aparat',    href: social.aparat,    icon: '/icons/aparat.svg'    },
  { key: 'telegram',  label: 'Telegram',  href: social.telegram,  icon: '/icons/telegram.svg'  },
];

export default social;
