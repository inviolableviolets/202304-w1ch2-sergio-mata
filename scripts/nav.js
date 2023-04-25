const navBtn = document.getElementById('navbar-toggle');
const menuContainer = document.querySelector('.menu-container');

navBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('open')
})