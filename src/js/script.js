const cookiesContainer = document.querySelector('.cookies-container');
const cookiesBtn = document.querySelector('.cookies-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer-year');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const userMsg = document.querySelector('#msg');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');

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

const showError = (input) => {
  const inputBox = input.parentElement;
  const errorMsg = inputBox.querySelector('.error-text');
  errorMsg.classList.add('error');
};

const clearError = (input) => {
  const inputBox = input.parentElement;
  const errorMsg = inputBox.querySelector('.error-text');
  errorMsg.classList.remove('error');
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === '') {
      showError(el);
    } else {
      clearError(el);
    }
  });
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  checkForm([userName, userEmail, userPhone, userMsg]);
});
