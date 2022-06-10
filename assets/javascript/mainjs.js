// Scroll-To Top Function

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",

    });
});

// Navbar Mobile Wraper 

const navBar = document.querySelector("#nav-button");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

navBar.addEventListener("click", () => {
    ul.classList.toggle("show")
});

// For Each Click In Menu The NavBar Will Hide 
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);