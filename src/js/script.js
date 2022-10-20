const cookiesContainer = document.querySelector('.cookies-container');
const cookiesBtn = document.querySelector('.cookies-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer-year');

const checkCookies = () => {
  const cookiesAccepted = localStorage.getItem('cookies');
  if (cookiesAccepted) {
    cookiesContainer.classList.add('cookies-hide');
  }
};
checkCookies();

const handleCookies = () => {
  localStorage.setItem('cookies', 'true');
  cookiesContainer.classList.add('cookies-hide');
};

const handleHamburger = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
};

const handleCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  footerYear.innerText = currentYear;
};
handleCurrentYear();

cookiesBtn.addEventListener('click', handleCookies);
hamburger.addEventListener('click', handleHamburger);
