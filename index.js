let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active')
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  function servicefunc() 
  {
      var elem = document.getElementById("serviceId");
      elem.scrollIntoView();
  }
  function contactfun() 
  {
      var elem = document.getElementById("contactId");
      elem.scrollIntoView();
  }
  var typed = new Typed(".Typing", {
    strings: ["INC"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
});

$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      }
  }
});
$(document).ready(function(){
  $(window).scroll(function(){

    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
  }else{
      $('.scroll-up-btn').removeClass("show");
  }
});
});

var typed = new Typed(".type1", {
  strings: ["Kitchen"],
  typeSpeed: 250,
  backSpeed: 200,
  loop: true
});



