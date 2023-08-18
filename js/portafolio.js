let divIconHamburguer = document.getElementById("divIconHamburguer");
let itemHamburguer = document.querySelectorAll(".item-hamburguer");


let contador = 0;
divIconHamburguer.addEventListener("click", function(){
    if(contador == 0){
        for(let x = 0 ; x < itemHamburguer.length; x++){
            itemHamburguer[x].classList.add("item-hamburguer" + (x + 1));
            itemHamburguer[x].classList.remove("item-hamburguer-inicial");
            itemHamburguer[x].style.transition = "width 0.5s , all 0.5s ";
            
            contador = 1;
        }
       
    }else{
        for(let x = 0 ; x < itemHamburguer.length; x++){
            itemHamburguer[x].classList.remove("item-hamburguer" + (x + 1));
            itemHamburguer[x].classList.add("item-hamburguer-inicial");
        }
        contador = 0;
    }
})