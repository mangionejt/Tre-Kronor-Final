const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const nav = document.querySelector('navbar');

// window.addEventListener('scroll', fixNav);
//
// function fixNav () {
//   if(window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add('active');
//   } else {
//     nav.classList.remove('active');
//   }
// }

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
