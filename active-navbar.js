function selectElementByClass(className) {
    console.log("logging the class....", document.querySelector(`.${className}`))
    return document.querySelector(`.${className}`);
}

const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('about2'),
  selectElementByClass('portfolio'),
  selectElementByClass('skills'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNav'),
  about: selectElementByClass('aboutNav'),
  about2: selectElementByClass('aboutNav'),
  portfolio: selectElementByClass('portfolioNav'),
  skills: selectElementByClass('skillsNav'),
  contact: selectElementByClass('contactNav'),
};

// intersection observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };
  
function observerCallback(entries, observer) {
  entries.forEach((entry) => {
      console.log(`entry is ${JSON.stringify(entry)}`)
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      console.log(`navItem is ${navItem}`)
      // add 'active' class on the navItem
      navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
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