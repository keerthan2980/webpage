$(document).ready(function() {
  // Owl Carousel for the '#trends' section
  $("#trends .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,  // Enable navigation arrows
    autoplay: true,
    dots: false,  // Disable dots
    autoplayTimeout: 3000,
    navText: [
      '<div style="font-size: 40px;">&#10094;</div>',  // Previous arrow
      '<div style="font-size: 40px;">&#10095;</div>'   // Next arrow
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 }
    }
  });

  // Owl Carousel for the '.special_cat' section
  $(".special_cat .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,  // Disable navigation arrows
    autoplay: true,
    dots: true,  // Enable dots
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
}); 

// Animations 
document.addEventListener("DOMContentLoaded", function () {
  // Function to add the animation class when a section enters the viewport
  function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate__fadeInUp"); // Same animation for all sections
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  }

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 10% of the element is visible
  });

  // Observe all sections with the 'animate-on-scroll' class
  const sectionsToAnimate = document.querySelectorAll(".animate-on-scroll");
  sectionsToAnimate.forEach((section) => {
      observer.observe(section);
  });
});