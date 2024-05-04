let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

// Function to close navbar
const closeNavbar = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  let fromTop = window.scrollY;

  sections.forEach((section) => {
    let navLink = document.querySelector(
      "header .navbar a[href='#" + section.id + "']"
    );
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;

    if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNavbar(); // Close navbar when a navigation link is clicked
  });
});

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
  closeNavbar(); // Close navbar when opening search form
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  const reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

// Set year in footer
let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
