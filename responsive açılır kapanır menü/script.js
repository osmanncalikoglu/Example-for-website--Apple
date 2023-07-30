const menuIcon= document.querySelector("section#topnav .menu-icon img");

const menu= document.querySelector("section#topnav nav ul");

menuIcon.addEventListener("click",function () {
    menu.classList.toggle("active");
})