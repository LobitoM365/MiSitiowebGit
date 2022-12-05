let iconHamburguer = document.getElementById("icon_hamburguer");
let menuPrincipal = document.getElementById("menuPrincipal");

iconHamburguer.addEventListener("click" ,function(){

    if(menuPrincipal.classList.contains("menuPrincipalInvisible")){
        menuPrincipal.classList.remove("menuPrincipalInvisible")
    } else{
        menuPrincipal.classList.add("menuPrincipalInvisible")
    }
}

)


