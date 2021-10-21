const menuHamburger = document.querySelector("#menu-opener");
const menuOptions = document.querySelector("#menu-area");

menuHamburger.addEventListener("click", function() {
    if(menuOptions.style.width == "150px") {
        menuOptions.style.width = "0px";
    } else {
        menuOptions.style.width = "150px";
    }
});