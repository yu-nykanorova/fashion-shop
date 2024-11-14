const burger = document.querySelector('.header__burger');
const navList = document.querySelector('.header__ul');
const closeIcon = document.querySelector('.fa-solid.fa-xmark');
const body = document.body;

function openMenu() {
    navList.classList.add('active');
    body.classList.add('no-scroll');
}

function closeMenu() {
    navList.classList.remove('active');
    body.classList.remove('no-scroll');
}

burger.addEventListener('click', openMenu);

closeIcon.addEventListener('click', closeMenu);

document.addEventListener('click', (event) => {
    if (!navList.contains(event.target) && !burger.contains(event.target)) {
        closeMenu();
    }
})
