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

const nav = () => {
    let state = { isTop: true };
    const nav = document.getElementById("nav");

    document.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y >= 100 && state.isTop) {
            nav.classList.toggle("fade-nav");
            state.isTop = false;
            return;
        }
        if (y <= 100 && !state.isTop) {
            nav.classList.toggle("fade-nav");
            console.log("above");
            state.isTop = true;
            return;
        }
    });
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

// GSAP ANIMATION
const gsapFunc = () => {
    // nav
    gsap.from(".nav__logo, .nav__toggle", { opacity: 0, duration: 0.3, delay: 0.4, x: -30 });
    gsap.from(".nav__item", { opacity: 0, duration: 0.5, delay: 0.6, x: 30, stagger: 0.2 });

    // hero
    gsap.from(".hero__data-header", { opacity: 0, duration: 0.5, delay: 1.5, x: -30 });
    gsap.from(".hero__data-description", { opacity: 0, duration: 0.5, delay: 1.7, x: -30 });
    gsap.from(".hero__data-btn", { opacity: 0, duration: 0.5, delay: 1.9, x: 0 });

    // scroll
    // gsap.registerPlugin(ScrollTrigger);
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".card",
            toggleActions: "restart none none none",
            end: "top 100px",
        },
        opacity: 0,
        x: 500,
        stagger: 0.5,
        duration: 0.5,
    });
};

const main = () => {
    menu();
    responsiveImg();
    nav();
    gsapFunc();
};

document.addEventListener("DOMContentLoaded", () => {
    main();
});
