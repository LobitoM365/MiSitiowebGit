let icono = document.getElementById("icon_hamburguer")
let desplegarSubmenu = document.getElementById("desplegar_submenu")
let menu = document.getElementById("menu")
let submenu = document.getElementById("submenu")
let nav = document.getElementById("nav");
let transitionMargin = document.getElementById("transitionMargin");
let idParrafo = document.getElementById("idParrafo");

icono.addEventListener("click", function () {

    if (nav.classList.contains("navTransition")) {
        nav.classList.remove("navTransition")
        nav.classList.add("navTransition2")
    } else {
        nav.classList.add("navTransition")
        nav.classList.remove("navTransition2")
    }
    if (submenu.classList.contains("submenu_invisible2")) {
        submenu.classList.add("submenu_invisible")
        submenu.classList.remove("submenu_invisible2")
        transitionMargin.classList.remove("margin2");
        transitionMargin.classList.add("margin");
    }
})

desplegarSubmenu.addEventListener("click", function () {

    if (submenu.classList.contains("submenu_invisible")) {
        submenu.classList.remove("submenu_invisible")
        submenu.classList.add("submenu_invisible2")
        transitionMargin.classList.remove("margin");
        transitionMargin.classList.add("margin2");

    } else {
        submenu.classList.add("submenu_invisible")
        submenu.classList.remove("submenu_invisible2")
        transitionMargin.classList.remove("margin2");
        transitionMargin.classList.add("margin");
    }

})
idParrafo.addEventListener("click", function () {
    if (nav.classList.contains("navTransition")) {
        nav.classList.remove("navTransition")
        nav.classList.add("navTransition2")
        submenu.classList.add("submenu_invisible")
        submenu.classList.remove("submenu_invisible2")
        transitionMargin.classList.remove("margin2");
        transitionMargin.classList.add("margin");
    }
})

