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

  // Initialize partners carousel
  $('.partners-carousel').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.partners-carousel').parent().find('.fa-chevron-left').parent(),
    nextArrow: $('.partners-carousel').parent().find('.fa-chevron-right').parent(),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
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

// Collaborations section
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("partnersCarousel");
    const logos = carousel.innerHTML; // Pak de originele HTML
    carousel.innerHTML += logos; // Voeg duplicaat toe

    let scrollAmount = 0;
    const speed = 1.5; // Pas snelheid aan indien nodig

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