// Function to close the menu
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('menu-checkbox').checked = false; 
  });
});


// Animazioni 
document.addEventListener("DOMContentLoaded", () => {

  function createObserver(selector, visibleClass, threshold = 0.5) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          obs.unobserve(entry.target); 
        }
      });
    }, { threshold });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }
  
  const animations = [
    { selector: ".slide-in-right",  visible: "slide-in-right-visible",  threshold: 0.5 },
    { selector: ".slide-in-top",    visible: "slide-in-top-visible",    threshold: 0.5 },
    { selector: ".slide-in-left",   visible: "slide-in-left-visible",   threshold: 0.5 },
    { selector: ".slide-in-bottom", visible: "slide-in-bottom-visible", threshold: 0.1 },
    { selector: ".fade-in",         visible: "fade-in-visible",         threshold: 0.5 },
  ];
  
  animations.forEach(anim => {
    createObserver(anim.selector, anim.visible, anim.threshold);
  });

});

// Animazione img-me
document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector("#homepage-content-left img");

    let currentX = 0;
    let currentY = 0;
    const speed = 0.1; 

    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const targetX = ((y - centerY) / centerY) * 10;  
        const targetY = ((x - centerX) / centerX) * -10; 

        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;

        element.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    });

    element.addEventListener("mouseleave", () => {
        currentX = 0;
        currentY = 0;
        element.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});




