

document.querySelector(".guide").addEventListener("click", function(){
    document.querySelector(".guide-container").classList.remove("closed");
    document.querySelector(".guide-container").classList.add("open");
    document.querySelector("main").classList.add("main-collapsed");
    document.querySelector("footer").classList.add("main-collapsed");
})

document.querySelector(".close-icon").addEventListener("click", function(){
    document.querySelector(".guide-container").classList.remove("open");
    document.querySelector(".guide-container").classList.add("closed");
    document.querySelector("main").classList.remove("main-collapsed");
    document.querySelector("footer").classList.remove("main-collapsed");
})

document.querySelector(".hamburger-menu").addEventListener("click", function(){
    document.querySelector(".guide-container").classList.remove("closed");
    document.querySelector(".guide-container").classList.add("open");
})


window.addEventListener("scroll", function() {
    const pageNav = document.querySelector(".page-nav");

    if (window.scrollY > 0) {
        pageNav.classList.add("scroll-effect");
    } else {
        pageNav.classList.remove("scroll-effect");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".guide-container");
    const anchors = document.querySelectorAll(".content-guide a");

    anchors.forEach(anchor => {
        anchor.addEventListener("click", function() {
            if (window.innerWidth <= 600) {
                modal.classList.remove("open");
                modal.classList.add("closed");
            }
        });
    });
});



