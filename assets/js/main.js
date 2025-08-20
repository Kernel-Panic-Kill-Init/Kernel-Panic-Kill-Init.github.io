// mobile menu
const toggle = document.querySelector('.nav__toggle');
const nav = document.getElementById('site-nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// close menu on link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// year in footer
document.getElementById('year').textContent = new Date().getFullYear();
