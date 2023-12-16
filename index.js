//Get elements need

const nav = document.getElementById("nav");
const menu_Img = document.getElementById("menu_img");

menu_Img.addEventListener("click", toggleMenu);

const menuDisplay = function () {
  nav.classList.add("nav-overlay");
  menu_Img.classList = "menu-close";
  menu_Img.src = "assets/images/icon-menu-close.svg";
};

const menuClose = () => {
  nav.classList.remove("nav-overlay");
  menu_Img.classList = "menu-open";
  menu_Img.src = "assets/images/icon-menu.svg";
};

function toggleMenu() {
  if (menu_Img.classList.contains("menu-open")) {
    menuDisplay();
  } else {
    menuClose();
  }
}
