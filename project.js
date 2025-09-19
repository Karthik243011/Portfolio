// CCD Website
function openDemo(url) {
  window.open(url, '_blank');
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
// Function to open a project demo link in a new tab
function openDemo(url) {
  if (url) {
    window.open(url, '_blank'); // Opens the URL in a new browser tab
  } else {
    console.warn('No URL provided for this demo.');
  }
}



// Movie Search App
function openMovieApp() {
    window.open('https://moviesearchappreactjs.netlify.app/', '_blank');
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

