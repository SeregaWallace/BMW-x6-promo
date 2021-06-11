const featureLinks = document.querySelectorAll('.feature__link'),
    featureSubLinks = document.querySelectorAll('.feature-sub');


featureLinks.forEach((el, i) => {
    el.addEventListener('click', () => {

        featureLinks.forEach(element => {
            element.classList.remove('feature__link_active');
        });
        featureSubLinks.forEach(element => {
            element.classList.add('hidden');
        });

        featureSubLinks[i].classList.remove('hidden');
        el.classList.add('feature__link_active');
        
    })
})