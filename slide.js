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


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}