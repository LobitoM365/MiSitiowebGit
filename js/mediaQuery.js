let hamburguer = document.getElementById("menu_hamburguer");
let main_Menu = document.getElementById("main_menu")


hamburguer.addEventListener("click", function () {
    if (main_Menu.classList.contains("main_menu")) {
        main_Menu.classList.add("main_menu_visible");
        main_Menu.classList.remove("main_menu");
    }
    else {
        main_Menu.classList.remove("main_menu_visible");
        main_Menu.classList.add("main_menu");
    }
});