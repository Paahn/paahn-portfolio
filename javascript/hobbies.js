const DEFAULT_TEXT = 'What do I do in my free time?';

export function initHobbies() {
  const label = document.getElementById('hobbies');
  if (!label) return;

  document.querySelectorAll('.hobby-icon').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      label.textContent = icon.title;
    });
    icon.addEventListener('mouseleave', () => {
      label.textContent = DEFAULT_TEXT;
    });
  });
}