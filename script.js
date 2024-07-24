

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

document.querySelectorAll(".content-guide > a").addEventListener("click", function(){

    const vtGuide = document.querySelectorAll(".content-guide > a");

    for (i=0; i<vtGuide.length; i++){
        document.querySelector(".guide-container").classList.remove("open");
        document.querySelector(".guide-container").classList.add("hide"); 
    }
})



