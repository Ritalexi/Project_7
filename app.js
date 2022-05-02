const toggle = document.querySelector('.toggle');
const navMenu = document.querySelector('ul');
const hamburger = document.querySelector('.hamburger');
const closed = document.querySelector('.close');

toggle.addEventListener('click', function () {
 
    navMenu.classList.toggle('active');
  hamburger.classList.toggle('transparent');
})

