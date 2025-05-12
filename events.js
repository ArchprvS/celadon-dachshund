document.addEventListener("DOMContentLoaded", () => {
  // -- Selectors --

  const menubox = document.querySelector("#menubox");
  const options = document.querySelectorAll(".option");

  const start = document.querySelector("#start");
  const contact = document.querySelector("#contact");
  const about = document.querySelector("#about");
  const faq = document.querySelector("#faq");

  const section_1 = document.querySelector("#section_1");
  const section_2 = document.querySelector("#section_2");
  const section_3 = document.querySelector("#section_3");

  const par_about = document.querySelector(".machine_par");

  const map = document.querySelector("#map");
  const img = document.querySelector("#img");

  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const hours = document.querySelector("#hours");
  const location = document.querySelector("#location");

  let currentSection = "START";
  let previousSection = "";

  // -- Texts

  let about_text = `
Lekarz weterynarii, specjalista w dziedzinie chorób psów i kotów oraz specjalista chirurg. Absolwent Wydziału Medycyny Weterynaryjnej Uniwersytetu Przyrodniczego w Lublinie.
Specjalizuje się w kompleksowej diagnostyce, leczeniu oraz chirurgii psów i kotów. Dążąc do zapewnienia opieki na najwyższym poziomie, stale poszerza wiedzę zgodnie z aktualnymi standardami medycyny weterynaryjnej.`;

  // -- Mobile menu creation --
  const mob_menu = document.createElement("button");
  mob_menu.id = "mobile-menu";
  mob_menu.textContent = "MENU";
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
  const indicator_box = document.createElement("div");
  const indicator = document.createElement("div");
  indicator_box.id = "indicator_box";
  indicator.id = "indicator";
  indicator.textContent = "START";
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
  const dropdown = document.createElement("div");
  dropdown.id = "mobile-dropdown";

  // -- Debounce function

  function debounce(func, delay) {
    let timerId;
    return function (...args) {
      const context = this;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  // -- Machine Writing effect

  // let text_present = false;

  // function machineWriting(paragraph, text) {
  //   if (!text_present) {
  //     text_present = true;
  //     let delay = 0;
  //     for (let i = 0; i < text.length; i++) {
  //       setTimeout(() => {
  //         paragraph.textContent += text[i];
  //       }, delay);
  //       delay += 10;
  //     }
  //   }
  // }

  // -- Scroll events --

  function scrollEvents() {
    const triggerPoint_1 = section_1.offsetTop - 300;
    const triggerPoint_2 = section_2.offsetTop - 300;
    const triggerPoint_3 = section_3.offsetTop - 300;
    //const triggerPoint_4 = section_4.offsetTop - 300;
    //const triggerPoint_map = map.offsetTop - 650;

    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // -- Scroll Transition function

    function scrollTransitions(opt, sec) {
      if (previousSection !== currentSection) {
        options.forEach((option) => {
          option.classList.remove("current");
        });
        opt.classList.add("current");
        sec.classList.add("slide");
        indicator.classList.remove("swap-section");
        setTimeout(() => {
          indicator.classList.add("swap-section");
        }, 10);
        setTimeout(() => {
          indicator.innerText = currentSection;
        }, 200);
        previousSection = currentSection;
      }
    }

    // -- Trigger points check
    if (scrollPosition >= triggerPoint_3) {
      currentSection = "FAQ";
      section_2.classList.add("slide"); // Add other sections (this case section_2) if scrolled fast to the end
      scrollTransitions(faq, section_3);
      //machineWriting(par_about, about_text);
    } else if (scrollPosition >= triggerPoint_2) {
      currentSection = "O NAS";
      //machineWriting(par_about, about_text);
      scrollTransitions(about, section_2);
    } else if (scrollPosition >= triggerPoint_1) {
      currentSection = "KONTAKT";
      scrollTransitions(contact, section_1);
    } else if (scrollPosition <= 10) {
      currentSection = "START";
      scrollTransitions(start, img);
    }
  }

  const handleDebounce = debounce(scrollEvents, 100);
  window.addEventListener("scroll", handleDebounce);

  // -- Buttons events --

  // Helper function for click scrolling
  function scrollToElement(element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - 200,
      behavior: "smooth",
    });
  }

  // Click scroll into ellement
  start.addEventListener("click", () => {
    scrollToElement(img);
  });

  contact.addEventListener("click", () => {
    scrollToElement(section_1);
  });

  about.addEventListener("click", () => {
    scrollToElement(section_2);
  });

  faq.addEventListener("click", () => {
    scrollToElement(section_3);
  });

  // Zmień funkcję handleResponsiveMenu aby używała klas
  function handleResponsiveMenu() {
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
      options.forEach((option) => {
        if (menubox.contains(option)) {
          menubox.removeChild(option);
        }
      });

      if (!menubox.contains(mob_menu)) {
        menubox.appendChild(indicator_box);
        menubox.appendChild(mob_menu);
        document.body.appendChild(dropdown);
        // Move all options to dropdown
        options.forEach((option) => dropdown.appendChild(option));
      }
    } else {
      if (menubox.contains(mob_menu)) {
        menubox.removeChild(indicator_box);
        menubox.removeChild(mob_menu);
      }
      if (document.body.contains(dropdown)) {
        document.body.removeChild(dropdown);
      }

      options.forEach((option) => {
        if (!menubox.contains(option)) {
          menubox.appendChild(option);
        }
      });
    }
  }

  // Toggle dropdown when clicking mobile menu button
  mob_menu.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  // Initial setup

  // -- Contact Info Apperance function

  function slideInfo() {
    let top_sections = [phone, hours];
    let bottom_sections = [email, location];
    setTimeout(() => {
      top_sections.forEach((section) => section.classList.add("contact-slide"));
    }, 300);
    setTimeout(() => {
      bottom_sections.forEach((section) =>
        section.classList.add("contact-slide")
      );
    }, 600);
    setTimeout(() => {
      map.classList.add("slide");
      map.classList.add("appear");
    }, 900);
  }

  slideInfo();
  handleResponsiveMenu();

  // Listen for window resize
  window.addEventListener("resize", handleResponsiveMenu);

  // Machine writing in FAQ section

  const qaElements = document.querySelectorAll(".qa");

  function machineWriting(paragraph, text) {
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        paragraph.textContent += text[i];
      }, delay);
      delay += 10;
    }
    question.removeEventListener("click", event_a);
  }

  qaElements.forEach((element) => {
    let question = element.querySelector("h3");
    let answer_text = element.querySelector(".answer_text").innerText;
    let answer_box = element.querySelector(".answer_box");
    const event_a = () => {machineWriting(answer_box, answer_text);};
    question.addEventListener("click", event_a);
  });
});
