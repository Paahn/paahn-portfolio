export function initSkills() {
  const animation = document.getElementById('skills-animation');
  if (!animation) return;

  // Touch fallback: tap to toggle the CSS hover effect
  animation.addEventListener('click', () => {
    animation.classList.toggle('hover_effect');
  });
}