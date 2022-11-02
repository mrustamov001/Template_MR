const burger = document.querySelector(".header__btn");
const navbar = document.querySelector(".header__nav");

burger.addEventListener("click", function(){
    burger.classList.toggle("header__btn--opened");
    navbar.classList.toggle("header__nav--opened");
});