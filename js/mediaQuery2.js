let icono = document.getElementById("icon_hamburguer")
let desplegarSubmenu = document.getElementById("desplegar_submenu")
let menu = document.getElementById("menu")
let submenu = document.getElementById("submenu")
let nav = document.getElementById("nav");

icono.addEventListener("click", function () {
    if (menu.classList.contains("menu_invisible")) {
        menu.classList.remove("menu_invisible")
    } else {
        menu.classList.add("menu_invisible")
        submenu.classList.add("submenu_invisible")
    }
    if (nav.classList.contains("navTransition")) {
        nav.classList.remove("navTransition")
        nav.classList.add("navTransition2")
    } else {
        nav.classList.add("navTransition")
        nav.classList.remove("navTransition2")
    }
})


desplegarSubmenu.addEventListener("click", function () {

    if (submenu.classList.contains("submenu_invisible")) {
        submenu.classList.remove("submenu_invisible")
        submenu.classList.add("submenu_invisible2")
        
    } else {
        submenu.classList.add("submenu_invisible")
        submenu.classList.remove("submenu_invisible2")
    }

})

