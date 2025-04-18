document.addEventListener('DOMContentLoaded', () => {

    const img = document.querySelector('.photo');
    const text_h1 = document.querySelector('.img-text h1');
    const text_p = document.querySelector('.img-text p');

    // .jpeg paths //

    let first_jpeg = 'VET_FIRST.jpeg';
    let second_jpeg = 'VET_SECOND.jpeg';
    let current_jpeg = 'VET_FIRST.jpeg';

    // swap .jpeg function

    function swap_jpeg() {
        if (current_jpeg === first_jpeg) {
            current_jpeg = second_jpeg;
        }
        else {
            current_jpeg = first_jpeg;
        }
        img.classList.add('switch_photo')
        setTimeout(() => {
            img.src = current_jpeg;
            img.classList.remove('switch_photo')
        }, 300)
        text_h1.classList.add('switch_text')
        text_p.classList.add('switch_text')
        setTimeout(() => {
            text_h1.classList.remove('switch_text')
            text_p.classList.remove('switch_text')
        }, 1000)
    }

    setInterval(swap_jpeg, 4000)

})