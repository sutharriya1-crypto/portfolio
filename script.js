// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// =========================
// PROJECT IMAGE HOVER
// =========================

const projectImages =
document.querySelectorAll(".project-row img");

projectImages.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = "0.4s ease";
        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll(
".btn-primary, .btn-secondary, .about-btn, .contact-btn, .talk-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".3s ease";
        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(

".about, .projects, .contact, footer"

);

function revealSections() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// PROJECT ROW REVEAL
// =========================

const projectRows =
document.querySelectorAll(".project-row");

function revealProjects() {

    projectRows.forEach((row, index) => {

        const rowTop =
        row.getBoundingClientRect().top;

        if (rowTop < window.innerHeight - 80) {

            setTimeout(() => {

                row.style.opacity = "1";
                row.style.transform =
                "translateY(0)";

            }, index * 150);

        }

    });

}

window.addEventListener("scroll", revealProjects);

revealProjects();


const logo = document.getElementById("logo");

if (logo) {

    logo.addEventListener("click", function(e){

        e.stopPropagation();

        this.classList.add("logo-pop");

    });

    document.addEventListener("click", function(){

        logo.classList.remove("logo-pop");

    });

}

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();