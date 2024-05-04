let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

// Typing Effect In Java Script

let typed = new Typed(".auto-input", {
  strings: [
    "A Front End Developer!",
    "Mastering HTML, CSS And JS",
    "JavaScript Enthusiast",
    "Learning And Practicing React JS",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

// active sections on scroll:-

// get all nav_elements
let navElements = document.querySelectorAll("nav ul li a");

// get all sections
let sections = document.querySelectorAll("section");

// Add event listeners to menu items
navElements.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    let targetId = this.getAttribute("href").substring(1); // Get target section id
    let targetSection = document.getElementById(targetId); // Get target section element
    let offsetTop = targetSection.offsetTop; // Get offset top of target section
    document.querySelector("body").classList.remove("mobile-nav-active"); // Hide mobile navigation
    MenuBtn.classList.remove("fa-xmark"); // Change menu button icon
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // Smooth scroll to target section
    });
  });
});

// Highlight active section in navigation on scroll
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navElements.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
