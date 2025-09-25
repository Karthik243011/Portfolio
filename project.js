// CCD Website
function openDemo(url) {
  window.open(url, '_blank'); // Opens the URL in a new tab
}


// ShopEase E-Commerce Store
function openShopEase() {
    window.open('https://shopease4.netlify.app/', '_blank');
}

// Electronics Store
function openElectronics() {
    window.open('https://nextgenelectronics.netlify.app/', '_blank');
}

// Zudio Clothes Store
function openDemo(url) {
  window.open(url, '_blank');
}

// Movie Search App
function openMovieApp() {
    window.open('https://moviesearchappreactjs.netlify.app/', '_blank');
}

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('active');
});

// Close menu when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');  // hide menu
    hamburger.classList.remove('open');  // reset hamburger
  });
});

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

