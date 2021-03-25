function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
}

const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('about2'),
  selectElementByClass('project1'),
  selectElementByClass('project2'),
  selectElementByClass('project3'),
  selectElementByClass('project4'),
  selectElementByClass('skills'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNav'),
  about: selectElementByClass('aboutNav'),
  about2: selectElementByClass('aboutNav'),
  project1: selectElementByClass('projectsNav'),
  project2: selectElementByClass('projectsNav'),
  project3: selectElementByClass('projectsNav'),
  project4: selectElementByClass('projectsNav'),
  skills: selectElementByClass('skillsNav'),
  contact: selectElementByClass('contactNav'),
};

// intersection observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };
  
function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navItem = navItems[entry.target.id];
      navItem.classList.add('active');
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));