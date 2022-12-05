let icono = document.getElementById("icon_hamburguer")
let desplegarSubmenu = document.getElementById("desplegar_submenu")
let menu  =  document.getElementById("menu")
let submenu  =  document.getElementById("submenu")

icono.addEventListener("click", function(){
    if( menu.classList.contains("menu_invisible")){
        menu.classList.remove("menu_invisible")
    }else{
        menu.classList.add("menu_invisible")
    }
})


desplegarSubmenu.addEventListener("click" , function(){
    
if( submenu.classList.contains("submenu_invisible")){
    submenu.classList.remove("submenu_invisible")
}else{
    submenu.classList.add("submenu_invisible")
}

})