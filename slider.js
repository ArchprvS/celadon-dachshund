document.addEventListener('DOMContentLoaded', () => {

    const img = document.querySelector('.photo');

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
        },300)
    }

    setInterval(swap_jpeg, 3000)
   
})