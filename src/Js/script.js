document.addEventListener('DOMContentLoaded', function () {
    function toggleMenu() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar) {
            navbar.classList.toggle('show');
        }
    }
    const hamburgerButton = document.querySelector('.navbar-toggler');
    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', toggleMenu);
    }
});






document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var items = document.querySelectorAll('#carouselExampleControls .carousel-inner .carousel-item');
    var totalItems = items.length;

    function moveSlide(step) {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + step + totalItems) % totalItems;
        items[currentIndex].classList.add('active');
    }

    window.prevSlide = function() {
        moveSlide(-1);
    };

    window.nextSlide = function() {
        moveSlide(1);
    };

    var menuBtn = document.getElementById('menu-btn');
    var mobileNav = document.getElementById('mobile-nav');
});



document.addEventListener("DOMContentLoaded", function () {
    const readmoreButtons = document.querySelectorAll('.readmore-button');

    readmoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const moreText = card.querySelector('.more-text');
            const isHidden = moreText.classList.contains('d-none');

            if (isHidden) {
                moreText.classList.remove('d-none');
                this.innerText = 'Read Less';
            } else {
                moreText.classList.add('d-none');
                this.innerText = 'Read More';
            }
        });
    });
});



