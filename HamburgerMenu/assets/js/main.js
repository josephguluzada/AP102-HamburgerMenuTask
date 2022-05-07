let hamburgerIcon = document.querySelector(".hamburger-icon");
let aside = document.querySelector("aside");



hamburgerIcon.addEventListener("click", function () {
    aside.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
})