let hamburguer = document.getElementById("menu_hamburguer");
let mainMenu = document.getElementById("main_menu")


hamburguer.addEventListener("click", function () {

    if (mainMenu.classList.contains("main_menu_visible")) { 
        mainMenu.classList.add("main_menu_visible");
        mainMenu.classList.remove("main_Menu");
    }
    else {
        mainMenu.classList.remove("main_menu_visible");
        mainMenu.classList.add("main_Menu");
    }
});