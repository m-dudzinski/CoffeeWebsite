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
const closeBtn = document.querySelector('.close');
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

const closePopup = () => {
  popup.classList.remove('show-popup');
};

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

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(input);
  }
};

const checkMail = (input) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(input.value)) {
    clearError(input);
  } else {
    showError(input);
  }
};

const checkErrors = () => {
  const allErrorP = document.querySelectorAll('.error-text');
  let errorCounter = 0;

  allErrorP.forEach((el) => {
    if (el.classList.contains('error')) {
      errorCounter++;
    }
  });

  if (errorCounter === 0) {
    popup.classList.add('show-popup');
  }

  return errorCounter;
};

const clearForm = () => {
  const allInputs = document.querySelectorAll('input, textarea');
  allInputs.forEach((el) => {
    el.value = '';
  });
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = [userName, userEmail, userPhone, userMsg];

  checkForm(inputs);
  checkLength(userPhone, 9);
  checkMail(userEmail);
  checkErrors();

  if (checkErrors() === 0) {
    clearForm();
  }
});

closeBtn.addEventListener('click', closePopup);
cookiesBtn.addEventListener('click', handleCookies);
hamburger.addEventListener('click', handleHamburger);
