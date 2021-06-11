const moreElem = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');


const openModal = () => {
    modalElem.classList.remove('hidden');
    disableScroll();
};

const closeModal = () => {
    modalElem.classList.add('hidden');
    enableScroll();
};


moreElem.forEach(btn => {
    btn.addEventListener('click', openModal);
})

modalElem.addEventListener('click', ev => {
    const target = ev.target;

    if (target.classList.contains('overlay') ||
        target.classList.contains('modal__close')) {
        closeModal();
    }
});