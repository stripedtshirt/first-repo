const toggleMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".side-bar");
const gray = document.querySelector(".gray");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("active")
    gray.classList.toggle("active")
});

