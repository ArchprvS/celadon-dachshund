document.addEventListener('DOMContentLoaded', () => {

    // -- Selectors --

    const start = document.querySelector('#start');
    const about = document.querySelector('#about');
    const contact = document.querySelector('#contact');
    const faq = document.querySelector('#faq');

    const section_1 = document.querySelector('#section_1');
    const section_2 = document.querySelector('#section_2');
    const section_3 = document.querySelector('#section_3');
    const section_4 = document.querySelector('#section_4');

    const map = document.querySelector('#map');
    const img = document.querySelector('#img');

    // -- Scroll events -- 

    window.addEventListener('scroll', () => {

        // -- Trigger points -- 

        const triggerPoint_1 = section_1.offsetTop - 300;
        const triggerPoint_2 = section_2.offsetTop - 300;
        const triggerPoint_3 = section_3.offsetTop - 300;
        const triggerPoint_4 = section_4.offsetTop - 300;
        const triggerPoint_map = map.offsetTop - 650;

        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition >= triggerPoint_1) {
            about.classList.remove('current')
            start.classList.add('current')
            section_1.classList.add('slide');
        }
        if (scrollPosition >= triggerPoint_2) {
            contact.classList.remove('current')
            start.classList.remove('current')
            about.classList.add('current')
            section_2.classList.add('slide');
        }
        if (scrollPosition >= triggerPoint_3) {
            faq.classList.remove('current')
            about.classList.remove('current')
            contact.classList.add('current')
            section_3.classList.add('slide');
        }
        if (scrollPosition >= triggerPoint_4) {
            contact.classList.remove('current')
            faq.classList.add('current')
            section_4.classList.add('slide');
        }
        if (scrollPosition >= triggerPoint_map) {
            map.classList.add('slide');
            setTimeout(() => { map.classList.add('appear') }, 200)
        }
    })

    // -- Buttons events --
    
    start.addEventListener('click', () => {
        img.scrollIntoView({ behavior: 'smooth'});
    })
    about.addEventListener('click', () => {
        section_2.scrollIntoView({ behavior: 'smooth'});
    })
    contact.addEventListener('click', () => {
        section_3.scrollIntoView({ behavior: 'smooth'});
    })
    faq.addEventListener('click', () => {
        section_4.scrollIntoView({ behavior: 'smooth'});
    })

}) 