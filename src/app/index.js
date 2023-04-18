const Buttons = document.querySelectorAll(".navbar__list-drop");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar__menu");

menu.onclick = () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("right-open");
};

(() => {
    Buttons.forEach((Button) => {
        Button.addEventListener("click", () => {
        Button.firstElementChild.lastElementChild.classList.toggle("up");
        Button.lastElementChild.classList.toggle("open");
        });
    });
})();