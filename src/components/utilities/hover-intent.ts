// Minimal hover-intent utility (placeholder for future enhancement)
export function setupHoverIntent(el: HTMLElement, onEnter: () => void, onLeave: () => void, delay = 250){
  let timer: number | null = null;
  el.addEventListener('mouseenter', () => {
    if(timer){ clearTimeout(timer); timer = null; }
    onEnter();
  });
  el.addEventListener('mouseleave', () => {
    timer = window.setTimeout(onLeave, delay);
  });
}
