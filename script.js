// Theme Toggle with Persistence
const toggle = document.getElementById('darkmode-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggle.checked = true;
}

// Save theme on toggle
toggle.addEventListener('change', () => {
  const isLight = toggle.checked;
  body.classList.toggle('light-mode', isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});
