// Initialize mobile menu functionality
window.toggleMenu = () => {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
}

// Initialize slick carousel for reviews when document is ready
$(document).ready(function() {
  $('.reviews-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Add scroll animation
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => observer.observe(section));
});

// Partners / collaborations section
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("partnersCarousel");
    const logos = carousel.innerHTML; 
    carousel.innerHTML += logos;

    let scrollAmount = 0;
    const speed = 1;

    function scrollCarousel() {
        scrollAmount += speed;
        if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollCarousel);
    }
    
    scrollCarousel();
});

// Navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  menuLinks.forEach(link => {
      link.addEventListener("click", function () {
          mobileMenu.classList.add("hidden");
      });
  });
});

// Verberg navigatie bij scroll naar top
let prevScrollPos = window.pageYOffset;
const nav = document.getElementById("nav");

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 50) { 
        nav.classList.add("glass-effect");
    } else {
        nav.classList.remove("glass-effect");
    }

    prevScrollPos = currentScrollPos;
};