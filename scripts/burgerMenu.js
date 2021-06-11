const menuElem = document.querySelector('.menu');
const humburger = document.querySelector('.humburger-menu');


const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburger.classList.toggle('humburger-menu-active');
};

const closeMenu = () => {
    menuElem.classList.remove('menu-active');
    humburger.classList.remove('humburger-menu-active');
};


humburger.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', ev => {
    const target = ev.target

    if (target.classList.contains('menu-list__link')) {
        closeMenu();
    }
});