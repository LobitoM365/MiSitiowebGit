let icono = document.getElementById("icon_hamburguer")
let menu  =  document.getElementById("menu")

icono.addEventListener("click", function(){
    if( menu.classList.contains("menu_invisible")){
        menu.classList.remove("menu_invisible")
    }else{
        menu.classList.add("menu_invisible")
    }
})