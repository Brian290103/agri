let menu_button = document.getElementById("menu");
let menu = document.getElementById("nav-menu");

menu_button.addEventListener("click", toggleNavbar); // Corrected: Removed parentheses after toggleNavbar

function toggleNavbar() {
  menu.classList.toggle("open");
}

// console.log(menu);
