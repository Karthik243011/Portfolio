
function openDemo(url) {
    window.open(url, "_blank");
}
function openDemo(url) {
    window.open(url, '_blank');
}
 function openDemo(url) {
    window.open(url, "_blank"); // opens in new tab
  }
// Put this in project.js (works if script is in the <head>)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href'); // "#about" etc.
      // try to find element with that id, otherwise fall back to sensible elements
      let target = document.querySelector(id);
      if (!target) {
        if (id === '#home') target = document.querySelector('header') || document.body;
        if (id === '#about') target = document.querySelector('.aboutContainer1') || document.querySelector('section');
        if (id === '#projects') target = document.querySelector('.projects') || document.querySelector('section.projects');
        if (id === '#contact') target = document.querySelector('.contact') || document.querySelector('#contact');
      }
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
function openDemo(url) {
  window.open(url, '_blank'); // Opens the demo in a new tab
}

