document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navIcons = document.querySelector('.nav-icons');

    hamburgerMenu.addEventListener('click', function() {
        navIcons.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const reviewItems = document.querySelectorAll('.review-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    function showReview(index) {
        reviewItems.forEach((item, i) => {
            if (i === index) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function slideNext() {
        currentIndex++;
        if (currentIndex >= reviewItems.length) {
            currentIndex = 0;
        }
        showReview(currentIndex);
    }

    function slidePrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = reviewItems.length - 1;
        }
        showReview(currentIndex);
    }

    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);

    showReview(currentIndex); // Show initial review
});

