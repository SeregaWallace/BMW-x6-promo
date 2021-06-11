const SPEED = 0.3;


const smoothScroll = ev => {
    const target = ev.target;

    if (target.matches('[href^="#"]')) {
        ev.preventDefault();

        const scrollYpage = window.pageYOffset;
        const hash = target.getAttribute('href');

        if (hash === '#') return;
        
        const elem = document.querySelector(hash);
        const coordinates = elem.getBoundingClientRect().top;

        let start = 0;

        const step = time => {
            if (!start) start = time;

            const progress = time - start;
            const r = (coordinates < 0 ?
                Math.max(scrollYpage - progress / SPEED, scrollYpage + coordinates) :
                Math.min(scrollYpage + progress / SPEED, scrollYpage + coordinates));

            scrollTo(0, r);

            if (r < scrollYpage + coordinates) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }
};

const disableScroll = () => {
    const scrollWidth = window.innerWidth - document.body.offsetWidth;

    document.body.dataset.scrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        left: 0;
        width: 100%;
        overflow: hidden;
        height: 100vh;
        padding-right: ${scrollWidth}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dataset.scrollY,
    });
};


document.body.addEventListener('click', smoothScroll);

// const smoothScroll = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

// smoothScroll.forEach(link => {
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         const blockId = link.getAttribute('href').substring(1);
//         document.getElementById(blockId).scrollIntoView({
//             behavior: 'smooth',
//         });
//     });
// });