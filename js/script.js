let iconHamburguer = document.getElementById("icon_hamburguer");
let menuPrincipal = document.getElementById("menuPrincipal");
let iconSubMenuPrincipal = document.getElementById("iconSubMenuPrincipal");
let subMenuPrincipal = document.getElementById("subMenuPrincipal");
let toogle = document.getElementById("toogle");
let iconSubMenu = document.querySelectorAll(".iconSubMenu");
let subMenuInvisible = document.querySelectorAll(".subMenuInvisible");

iconHamburguer.addEventListener("click", function () {
    menuPrincipal.classList.toggle("invisible-mobile")
})



let circuloToogle = document.getElementById("circuloToogle");
let ulWhite = document.getElementById("ulWhite");
let imgFondoPcBlack = document.getElementById("imgFondoPcBlack");
let imgFondoPcWhite = document.getElementById("imgFondoPcWhite");
toogle.addEventListener("click", function () {
    if (circuloToogle.classList.contains("circuloToogleTransition")) {
        circuloToogle.classList.remove("circuloToogleTransition")
        toogle.classList.remove("toogleTransition")
        ulWhite.classList.remove("ulWhite")
        menuPrincipal.classList.remove("navWhite")
        containVisibilidad(imgFondoPcBlack);
        containVisibilidad(imgFondoPcWhite);
        imgFondoPcWhite.classList.remove("transitionWhite")
        imgFondoPcBlack.classList.remove("transitionBlack")
    } else {
        circuloToogle.classList.add("circuloToogleTransition")
        toogle.classList.add("toogleTransition")
        menuPrincipal.classList.add("navWhite")
        ulWhite.classList.add("ulWhite")
        containVisibilidad(imgFondoPcWhite);
        containVisibilidad(imgFondoPcBlack);
        imgFondoPcWhite.classList.add("transitionWhite")
        imgFondoPcBlack.classList.add("transitionBlack")
    }
})

iconHamburguer.addEventListener("click", function () {
    iconSubMenuPrincipal.addEventListener("click", function () {
        subMenuPrincipal.classList.toggle("invisible-mobile")
    })
    for (let i = 0; i < iconSubMenu.length; i++) {
        iconSubMenu[i].addEventListener("click", function () {
            for (let x = 0; x < iconSubMenu.length; x++) {
                if (x == i) {
                    subMenuInvisible[x].classList.toggle("subMenuInvisible");
                    subMenuInvisible[x].classList.toggle("transition-submenu");
                    subMenuInvisible[x].classList.add("primary-focus1");
                    subMenuInvisible[x - 1].classList.add("primary-focus2");
                    subMenuInvisible[x + 1].classList.add("primary-focus2");

                    if (subMenuInvisible[x].classList.contains("transition-submenu")) {

                    } else {
                        subMenuInvisible[x].classList.remove("primary-focus2");
                        subMenuInvisible[x + 1].classList.remove("primary-focus2");
                        subMenuInvisible[x - 1].classList.remove("primary-focus2");
                    }
                } else {

                    if (x < i) {
                        console.log(x, i)
                        if (subMenuInvisible[x].classList.contains("transition-submenu")) {
                            subMenuInvisible[x].classList.add("primary-focus2");
                        } else {
                            subMenuInvisible[x].classList.remove("primary-focus1");
                        }
                    } else {
                        subMenuInvisible[x].classList.remove("primary-focus2");
                        subMenuInvisible[x].classList.remove("primary-focus1");
                    }
                    subMenuInvisible[x].classList.remove("transition-submenu");
                }
            }
        })
    }
})