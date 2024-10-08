document.addEventListener("DOMContentLoaded", () => {
    const primaryhHeader=document.querySelector(".primary-header")
    const navtoggle = document.querySelector(".mobile-nav-toggle");
    const primarynav = document.querySelector(".primary-navigation");

    if (primarynav) { // Check if primarynav is not null
        navtoggle.addEventListener("click", () => {
            primarynav.hasAttribute("data-visible")
                ? navtoggle.setAttribute("aria-expanded",false)
                :navtoggle.setAttribute("aria-expanded",true)
            primarynav.toggleAttribute("data-visible");
            primaryhHeader.toggleAttribute("data-overley");
        });
    } else {
        console.error("Element with class 'primary-navigation' not found.");
    }
    const slider = new A11YSlider(document.querySelector('.slider'), {
        adaptiveHeight: true,
        dots: true,
        arrows:false,
        centerMode:true,
        responsive: {
        480: {
          dots:false,
         
        //   arrows:true
        }
    }

      });
   
});
