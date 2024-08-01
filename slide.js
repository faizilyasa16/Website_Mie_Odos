function openLightbox(imageSrc) {
  document.getElementById("lightbox-img").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
}

 // Function to remove data-aos attribute on mobile
        function removeAOSOnMobile() {
          if (window.innerWidth <= 768) {
              var elements = document.querySelectorAll('[data-aos]');
              elements.forEach(function(element) {
                  element.removeAttribute('data-aos');
              });
          }
      }

      // Run the function on initial load
      removeAOSOnMobile();

      // Run the function on window resize
      window.addEventListener('resize', removeAOSOnMobile);

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

window.addEventListener('scroll', function() {
  var text = document.querySelector('.section1 .text');
  var section = document.querySelector('.section1.parallax');
  var sectionRect = section.getBoundingClientRect();
  
  if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
    text.style.zIndex = '-1';
  } else {
    text.style.zIndex = '1';
  }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoSlide() {
  plusSlides(1);
}

setInterval(autoSlide, 6000); // Change slide every 3 seconds

function openLightbox(imageSrc) {
  document.getElementById("lightbox-img").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
}
