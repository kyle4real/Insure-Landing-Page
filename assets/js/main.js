// variables

const menu = () => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");

    const handleMenu = () => {
        navMenu.classList.toggle("show-menu");
        navClose.classList.toggle("hide-close");
        navToggle.classList.toggle("hide-toggle");
    };
    navToggle.addEventListener("click", handleMenu);
    navClose.addEventListener("click", handleMenu);
};

const responsiveImg = () => {
    let state = { isDesktop: window.innerWidth < 768 };

    const handleHero = (x) => {
        const target = document.getElementById("hero-img");
        if (x < 768 && state.isDesktop) {
            target.src = `assets/images/image-intro-mobile.jpg`;
            state.isDesktop = false;
            return;
        }
        if (x > 768 && !state.isDesktop) {
            target.src = `assets/images/image-intro-desktop.jpg`;
            state.isDesktop = true;
            return;
        }
    };
    handleHero(window.innerWidth);
    window.addEventListener("resize", (e) => {
        const x = e.target.innerWidth;
        handleHero(x);
    });
};

const main = () => {
    menu();
    responsiveImg();
};

document.addEventListener("DOMContentLoaded", () => {
    main();
});
