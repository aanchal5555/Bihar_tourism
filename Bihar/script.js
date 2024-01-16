const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

/* footer */
const year = new Date().getFullYear();
document.querySelector('footer h5').innerHTML = `&copy; ${year} Aanchal. All rights reserved.`;
