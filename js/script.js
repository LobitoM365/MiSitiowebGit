let iconHamburguer = document.getElementById("icon_hamburguer");
let menuPrincipal = document.getElementById("menuPrincipal");
let iconSubMenuPrincipal = document.getElementById("iconSubMenuPrincipal");
let subMenuPrincipal = document.getElementById("subMenuPrincipal");

let toogle = document.getElementById("toogle");

iconHamburguer.addEventListener("click", function(){
    menuPrincipal.classList.toggle("invisible")
})
iconSubMenuPrincipal.addEventListener("click", function(){
    subMenuPrincipal.classList.toggle("invisible")
})


let circuloToogle = document.getElementById("circuloToogle");
let ulWhite = document.getElementById("ulWhite");
let imgFondoPcBlack= document.getElementById("imgFondoPcBlack");
let imgFondoPcWhite= document.getElementById("imgFondoPcWhite");
toogle.addEventListener("click", function () {
    if(circuloToogle.classList.contains("circuloToogleTransition")){
        circuloToogle.classList.remove("circuloToogleTransition")
        toogle.classList.remove("toogleTransition")
        ulWhite.classList.remove("ulWhite")
        menuPrincipal.classList.remove("navWhite")
        containVisibilidad(imgFondoPcBlack);
        containVisibilidad(imgFondoPcWhite);
        imgFondoPcWhite.classList.remove("transitionWhite")
        imgFondoPcBlack.classList.remove("transitionBlack")
    }else{
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

