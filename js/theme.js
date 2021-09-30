


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu_links');
    const navLinks = document.querySelectorAll('.menu_links li');




    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.getElementsByClassName.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards 
            ${index / 7 + 1}s`;
            }

        });


        // burger animation
        burger.classList.toggle('toggle_line');


    });


}

navSlide();