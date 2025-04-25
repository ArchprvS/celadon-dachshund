document.addEventListener('DOMContentLoaded', () => {

    // -- Selectors --

    const menubox = document.querySelector('#menubox');
    const options = document.querySelectorAll('.option');

    const start = document.querySelector('#start');
    const contact = document.querySelector('#contact');
    const about = document.querySelector('#about');
    const faq = document.querySelector('#faq');

    const section_1 = document.querySelector('#section_1');
    const section_2 = document.querySelector('#section_2');
    const section_3 = document.querySelector('#section_3');
    const section_4 = document.querySelector('#section_4');

    const map = document.querySelector('#map');
    const img = document.querySelector('#img');

    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const hours = document.querySelector('#hours');
    const location = document.querySelector('#location');

    let currentSection = 'START';
    let previousSection = '';

    // -- Mobile menu creation --
    const mob_menu = document.createElement('button');
    mob_menu.id = 'mobile-menu';
    mob_menu.textContent = 'MENU';
    mob_menu.style.cssText = `
        width: 29%;
        height: 40px;
        text-align: right;
        padding-right: 30px;
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        letter-spacing: 2px;
        border: none;
        color: #f0fcf8;
        background-color: rgb(125, 125, 125);
        cursor: pointer;
    `;
    const indicator_box = document.createElement('div');
    const indicator = document.createElement('div');
    indicator_box.id = 'indicator_box';
    indicator.id = 'indicator';
    indicator.textContent = 'START';
    indicator_box.style.cssText = `
        width: 71%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 20px;
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        letter-spacing: 2px;
        border: none;
        color: #f0fcf8;
        background-color: rgb(125, 125, 125);
        cursor: pointer;
    `;
    indicator_box.appendChild(indicator);


    // Zmień tworzenie dropdown menu (usuń style display)
    const dropdown = document.createElement('div');
    dropdown.id = 'mobile-dropdown';

    // -- Scroll events --

    window.addEventListener('scroll', () => {

        // -- Trigger points --

        const triggerPoint_1 = section_1.offsetTop - 300;
        const triggerPoint_2 = section_2.offsetTop - 300;
        const triggerPoint_3 = section_3.offsetTop - 300;
        const triggerPoint_4 = section_4.offsetTop - 300;
        const triggerPoint_map = map.offsetTop - 650;

        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // -- Scroll Transition function

        function scrollTransitions(opt, sec) {
            if (previousSection !== currentSection) {
                options.forEach(option => {
                    option.classList.remove('current');
                });
                opt.classList.add('current');
                sec.classList.add('slide');
                indicator.classList.remove('swap-section');
                setTimeout(() => {
                    indicator.classList.add('swap-section');
                }, 10);
                setTimeout(() => {
                    indicator.innerText = currentSection;
                }, 200);
                previousSection = currentSection;
            }
        }

        // -- Contact Info Apperance function

        function slideInfo() {
            let top_sections = [phone, hours];
            let bottom_sections = [email, location];
            setTimeout(() => {
                top_sections.forEach(section => section.classList.add('contact-slide'));
            }, 500);
            setTimeout(() => {
                bottom_sections.forEach(section => section.classList.add('contact-slide'));
            }, 1000);
        }

        // -- Scroll Events

        if (scrollPosition >= triggerPoint_4) {
            currentSection = 'FAQ';
            scrollTransitions(faq, section_4);
        }
        else if (scrollPosition >= triggerPoint_3) {
            currentSection = 'O NAS';
            scrollTransitions(about, section_3);
        }
        else if (scrollPosition >= triggerPoint_2) {
            currentSection = 'KONTAKT';
            scrollTransitions(contact, section_2);
        }
        else if (scrollPosition >= triggerPoint_1) {
            currentSection = 'START';
            scrollTransitions(start, section_1);
            slideInfo();
        }

        if (scrollPosition >= triggerPoint_map) {
            map.classList.add('slide');
            setTimeout(() => { map.classList.add('appear'); }, 200);
        }
    });

    // -- Buttons events --

    start.addEventListener('click', () => {
        img.scrollIntoView({ behavior: 'smooth' });
    });
    contact.addEventListener('click', () => {
        section_1.scrollIntoView({ behavior: 'smooth' });
    });
    about.addEventListener('click', () => {
        section_2.scrollIntoView({ behavior: 'smooth' });
    });
    faq.addEventListener('click', () => {
        section_3.scrollIntoView({ behavior: 'smooth' });
    });

    // Zmień funkcję handleResponsiveMenu aby używała klas
    function handleResponsiveMenu() {
        const isMobile = window.innerWidth <= 600;

        if (isMobile) {
            options.forEach(option => {
                if (menubox.contains(option)) {
                    menubox.removeChild(option);
                }
            });

            if (!menubox.contains(mob_menu)) {
                menubox.appendChild(indicator_box);
                menubox.appendChild(mob_menu);
                document.body.appendChild(dropdown);
                // Move all options to dropdown
                options.forEach(option => dropdown.appendChild(option));
            }
        }
        else {
            if (menubox.contains(mob_menu)) {
                menubox.removeChild(indicator_box);
                menubox.removeChild(mob_menu);
            }
            if (document.body.contains(dropdown)) {
                document.body.removeChild(dropdown);
            }

            options.forEach(option => {
                if (!menubox.contains(option)) {
                    menubox.appendChild(option);
                }
            });
        }
    }

    // Toggle dropdown when clicking mobile menu button
    mob_menu.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Initial setup
    handleResponsiveMenu();

    // Listen for window resize
    window.addEventListener('resize', handleResponsiveMenu);

});
