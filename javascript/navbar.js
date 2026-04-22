const SECTION_NAV_MAP = {
  home:     'homeNav',
  about:    'aboutNav',
  about2:   'aboutNav',
  project0: 'projectsNav',
  project1: 'projectsNav',
  project2: 'projectsNav',
  project3: 'projectsNav',
  project4: 'projectsNav',
  skills:   'skillsNav',
  contact:  'contactNav',
};

export function initNavbar() {
  const navLinks = new Map(
    [...new Set(Object.values(SECTION_NAV_MAP))].map((cls) => [
      cls,
      document.querySelector(`.${cls}`),
    ])
  );

  const sections = Object.keys(SECTION_NAV_MAP)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const activeClass = SECTION_NAV_MAP[entry.target.id];
        for (const [cls, link] of navLinks) {
          link?.classList.toggle('active', cls === activeClass);
        }
      }
    },
    { threshold: 0.9 }
  );

  sections.forEach((sec) => observer.observe(sec));
}