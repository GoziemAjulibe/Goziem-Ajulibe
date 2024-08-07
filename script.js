
function openGuideContainer() {
    const guideContainer = document.querySelector(".guide-container");
    if (guideContainer) {
      guideContainer.classList.remove("closed");
      guideContainer.classList.add("open");
    }
}
  
  
function closeGuideContainer() {
const guideContainer = document.querySelector(".guide-container");
if (guideContainer) {
    guideContainer.classList.remove("open");
    guideContainer.classList.add("closed");
}
}


function handleGuideContainer() {
    const guideContainer = document.querySelector(".guide-container");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const guide = document.querySelector(".guide");
    const closeIcon = document.querySelector(".close-icon");
    const guideItems = document.querySelectorAll(".guide-item");
  
    if (window.matchMedia('(max-width: 890px)').matches) {
     
      if (guide) {
        guide.addEventListener("click", function() {
          openGuideContainer();
          document.querySelector("body").classList.remove("body-normal");
          document.querySelector("body").classList.add("body-collapsed");
          document.querySelector("footer").classList.add("footer-collapsed");
        });
      }
  
      if (closeIcon) {
        closeIcon.addEventListener("click", function() {
          closeGuideContainer();
          document.querySelector("body").classList.remove("body-collapsed");
          document.querySelector("footer").classList.remove("footer-collapsed");
          document.querySelector("body").classList.add("body-normal");
        });
      }
  
      if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function() {
          openGuideContainer();
        });
      }
  
      guideItems.forEach(item => {
        item.addEventListener("click", function() {
          closeGuideContainer();
        });

      });

    } else {
        document.querySelector(".guide").addEventListener("click", function(){
            openGuideContainer();
            document.querySelector("body").classList.remove("body-normal");
            document.querySelector("body").classList.add("body-collapsed");
            document.querySelector("footer").classList.add("footer-collapsed");
        })

        document.querySelector(".close-icon").addEventListener("click", function(){
            closeGuideContainer();
            document.querySelector("body").classList.remove("body-collapsed");
            document.querySelector("footer").classList.remove("footer-collapsed");
            document.querySelector("body").classList.add("body-normal");
        })
    }

}


handleGuideContainer();
  

window.addEventListener('resize', handleGuideContainer);


window.addEventListener("scroll", function() {
    const pageNav = document.querySelector(".page-nav");

    if (window.scrollY > 0) {
        pageNav.classList.add("scroll-effect");
    } else {
        pageNav.classList.remove("scroll-effect");
    }
});







