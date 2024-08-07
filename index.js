

document.querySelector(".hamburger-menu").addEventListener("click", function(){
    document.querySelector(".guide-container").classList.remove("closed");
    document.querySelector(".guide-container").classList.add("open");
})


document.querySelector(".close-icon").addEventListener("click", function(){
    document.querySelector(".guide-container").classList.remove("open");
    document.querySelector(".guide-container").classList.add("closed");
})


function closeGuideContainer() {
    const guideContainer = document.querySelector(".guide-container");
    if (guideContainer) {
        guideContainer.classList.remove("open");
        guideContainer.classList.add("closed");
    }
 }
    

function handleGuideContainer() {

    const guideItems = document.querySelectorAll(".guide-item");

    guideItems.forEach(item => {
        item.addEventListener("click", function() {
        closeGuideContainer();
        });

    });

}

handleGuideContainer();


window.addEventListener("scroll", function() {
    const pageNav = document.querySelector("header");

    if (window.scrollY > 0) {
        pageNav.classList.add("scroll-effect");
    } else {
        pageNav.classList.remove("scroll-effect");
    }
});


