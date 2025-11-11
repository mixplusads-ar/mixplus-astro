// src/scripts/ux.ts

/** Reveal on scroll (برای .reveal, .reveal-up, .reveal-right, .reveal-scale) */
function setupReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal, .reveal-up, .reveal-right, .reveal-scale'));
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.18 });
  els.forEach(el => io.observe(el));
}

/** Dropdown hover delay (برای جلوگیری از بسته‌شدن سریع منو) */
function setupDropdownDelay() {
  const groups = Array.from(document.querySelectorAll<HTMLElement>('.nav .group'));
  groups.forEach(g => {
    let timer: number | null = null;
    const open = () => { if (timer) { window.clearTimeout(timer); timer = null; } g.classList.add('open'); };
    const close = () => { timer = window.setTimeout(() => g.classList.remove('open'), 140); };
    g.addEventListener('mouseenter', open);
    g.addEventListener('mouseleave', close);
    g.addEventListener('focusin', open);
    g.addEventListener('focusout', close);
  });
}

/** Active link highlight هنگام اسکرول (برای انکرهای صفحه) */
function setupActiveAnchors() {
  const ids = ['products','events','services','academy','about','after-sales','dealers'];
  const sections = ids
    .map(id => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];
  if (!sections.length) return;

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav a[href*="#"]'));
  const map: Record<string, HTMLAnchorElement[]> = {};
  ids.forEach(id => {
    map[id] = links.filter(a => a.getAttribute('href')?.endsWith(`#${id}`));
  });

  let activeId: string | null = null;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (entry.isIntersecting) activeId = id;
      // آپدیت وضعیت
      Object.values(map).flat().forEach(a => a.classList.remove('active'));
      if (activeId && map[activeId]) map[activeId].forEach(a => a.classList.add('active'));
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}

/** Parallax خیلی ملایم برای محتوای هیرو */
function setupHeroParallax() {
  const el = document.getElementById('heroParallax');
  if (!el) return;
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = Math.min(1, window.scrollY / 400);
      el.style.transform = `translateY(${y * 12}px)`; // حداکثر ~12px
      raf = 0;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/** اجرای همه */
document.addEventListener('DOMContentLoaded', () => {
  setupReveal();
  setupDropdownDelay();
  setupActiveAnchors();
  setupHeroParallax();
});
