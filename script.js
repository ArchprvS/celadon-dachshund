document.addEventListener('DOMContentLoaded', () => {

    // -- Selectors --
    const menubox = document.querySelector('#menubox');
    const options = document.querySelectorAll('.option');

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

    // -- Mobile menu creation --
    const mob_menu = document.createElement('button');
    mob_menu.id = 'mobile-menu';
    mob_menu.textContent = 'MENU';
    mob_menu.style.cssText = `
        width: 100%;
        height: 40px;
        text-align: right;
        padding-right: 20px;
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        border: none;
        color: rgb(223, 252, 229);
        background-color: rgb(125, 125, 125);
        cursor: pointer;
    `;

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
                menubox.appendChild(mob_menu);
                document.body.appendChild(dropdown);
                // Move all options to dropdown
                options.forEach(option => dropdown.appendChild(option));
            }
        } else {
            if (menubox.contains(mob_menu)) {
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

})





