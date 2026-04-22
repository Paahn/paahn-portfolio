export function initDrawer() {
  const hamburger = document.querySelector('.hamburger');
  const drawer    = document.querySelector('.drawer');
  const backdrop  = document.querySelector('.drawer-backdrop');
  if (!hamburger || !drawer) return;

  const open = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.removeAttribute('aria-hidden');
  };

  const close = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  };

  hamburger.addEventListener('click', open);
  backdrop.addEventListener('click', close);
  drawer.querySelector('.drawer-close')?.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}