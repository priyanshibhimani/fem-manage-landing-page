// const navtoggle=document.querySelector("mobile-nav-toggle");
// const primaryNav=document.querySelector("primary-navigation")
// document.addEventListener("click",()=>{
//     // primarynav.hasAttribute("data-visible")?console.log("true"):console.log("not done");
//     primaryNav.toggleAttribute("data-visible");
// });
document.addEventListener("DOMContentLoaded", () => {
    const primaryhHeader=document.querySelector(".primary-header")
    const navtoggle = document.querySelector(".mobile-nav-toggle");
    const primarynav = document.querySelector(".primary-navigation");

    if (primarynav) { // Check if primarynav is not null
        document.addEventListener("click", () => {
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
// const slider = new A11YSlider(document.querySelector('.slider'), {
//     adaptiveHeight: flase,
//     dots: true,
//     // centerMode:true,
//     // arrows:false,
//     // responsive: {
//     //     480: {
//     //       dots:false,
//     //       arrows:true
//     //     }
//     //   }
//   });
