let divIconHamburguer = document.getElementById("divIconHamburguer");
let ulPrincipal = document.getElementById("ulPrincipal");
/* let itemHamburguer = document.querySelectorAll(".item-hamburguer"); */
let circuloHijo = document.querySelectorAll(".circulo-hijo");


let contador = 0;

divIconHamburguer.addEventListener("click", function () {


  if (contador == 0) {
    for (let x = 0; x < circuloHijo.length; x++) {
      circuloHijo[x].classList.add("c" + (x + 1))
      circuloHijo[x].style.visibility = "visible";
      circuloHijo[x].style.opacity = "1";
      circuloHijo[x].style.transition = "";
      contador = contador + 1;
    }
  } else {
    for (let x = 0; x < circuloHijo.length; x++) {
      circuloHijo[x].classList.remove("c" + (x + 1))
      circuloHijo[x].style.visibility = "hidden";
      circuloHijo[x].style.opacity = "0";
      circuloHijo[x].style.transition = "margin 0.5s, visibility 0.2s, opacity 0.2s";
      contador = contador - 1;
    }
  }



})




/* let radio = ulPrincipal.scrollHeight / 2;





itemHamburguer[0].style.marginBottom = radio + "px";
let espacio = (((radio - (itemHamburguer[0].scrollHeight * (itemHamburguer.length - 1))) / 2) + itemHamburguer[0].scrollHeight);
let espacioEscala = 0;

for (let x = 1; x < itemHamburguer.length; x++) {
  espacioEscala = espacioEscala + espacio;
  itemHamburguer[x].style.marginLeft = espacioEscala + "px";

  itemHamburguer[x].style.marginBottom = radio - espacioEscala + "px";
}
console.log((((radio - (itemHamburguer[0].scrollHeight * (itemHamburguer.length - 1))) / 2) + itemHamburguer[0].scrollHeight))
 */