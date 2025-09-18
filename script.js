let menuItems = document.querySelector(".menuItems");
let menu = document.querySelector(".menu");
menuItems.style.maxHeight = "0px";
function toggle() {
  if (menuItems.style.maxHeight == "0px") {
    menu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    menuItems.style.maxHeight = "45vh";
  } else {
    menu.innerHTML = `   <i
          class="fa-sharp fa-solid fa-bars"></i>`;
    menuItems.style.maxHeight = "0px";
  }
}
