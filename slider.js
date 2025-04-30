document.addEventListener("DOMContentLoaded", () => {
    const img_first = document.querySelector(".photo");
    const img_sec = document.querySelector(".photo_sec");
    const text_h1 = document.querySelector(".img-text h1");
    const text_p = document.querySelector(".img-text p");

    let isAnimating = false;
    let currentImage = img_first;
    let nextImage = img_sec;

    function swapImages() {
        if (isAnimating) return;
        isAnimating = true;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Trigger animation
                currentImage.classList.add('left_photo');
                currentImage.classList.remove('center_photo');
                nextImage.classList.add('center_photo');
                nextImage.classList.remove('next_photo');

                // Animate text
                text_h1.classList.add("switch_text");
                text_p.classList.add("switch_text");

                // Reset after animation
                setTimeout(() => {
                    currentImage.classList.remove('left_photo');
                    currentImage.classList.add('next_photo');
                    text_h1.classList.remove("switch_text");
                    text_p.classList.remove("switch_text");
                    isAnimating = false;

                    // Swap references
                    [currentImage, nextImage] = [nextImage, currentImage];
                }, 400);
            });
        });
    }

    // Set initial state
    currentImage.classList.add('center_photo');
    nextImage.classList.add('next_photo');

    // Start slider
    setInterval(swapImages, 5000);
});
