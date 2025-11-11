export function initHoverLag(){
  const showers = document.querySelectorAll('.group');
  showers.forEach((el)=>{
    let t;
    el.addEventListener('mouseenter',()=>{ clearTimeout(t); el.setAttribute('data-open','1'); });
    el.addEventListener('mouseleave',()=>{ t=setTimeout(()=>{ el.removeAttribute('data-open'); }, 140); });
  });
}
export function initLangDir(){
  const html=document.documentElement;
  html.dir = (html.lang==='fa') ? 'rtl' : 'ltr';
}
export function initHeaderOpacity(){
  const header = document.querySelector('.header');
  if(!header) return;
  const onScroll = ()=>{
    if(window.scrollY>8){ header.classList.add('scrolled'); header.classList.remove('at-top'); }
    else { header.classList.add('at-top'); header.classList.remove('scrolled'); }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}
export default function init(){
  initHoverLag();
  initLangDir();
  initHeaderOpacity();
}
if(typeof window!=='undefined'){
  window.addEventListener('DOMContentLoaded', init);
}
