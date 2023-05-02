let imgMain = document.querySelectorAll(".imgMain");

let imgMini = document.querySelectorAll(".imgMini");
let borderFocus = document.querySelectorAll(".borderFocus");
let divRight = document.getElementById("divRight")
let divLeft = document.getElementById("divLeft")
let imgPredeterminada = document.getElementById("imgPredeterminada");
let imgPredeterminada2 = document.getElementById("imgPredeterminada2");

let posicionImgMini = document.getElementById("posicionImgMini");

let idImgMain = document.getElementById("idImgMain");

let idMinus = document.getElementById("idMinus");
let idPlus = document.getElementById("idPlus");
let idPrecioTotal = document.getElementById("idPrecioTotal");
let idcantidadNumero = document.getElementById("idcantidadNumero");
let contenidoFocus = document.getElementById("contenidoFocus");
let quitContenidoFocus = document.getElementById("quitContenidoFocus");
let fondoOscuro = document.getElementById("fondoOscuro");

quitContenidoFocus.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})
fondoOscuro.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})
imgPredeterminada.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})


idMinus.addEventListener("click", function () {
    /*     let nodeToAdd = document.createElement("p");
        let nodeText = document.createTextNode("Holis");
        nodeToAdd.appendChild(nodeText);
        idCantidadNumero.appendChild(nodeToAdd); */
    let idcantidadNumeroProducto = document.getElementById("idcantidadNumeroProducto").innerHTML;
    let cantidadNumeroInt = parseInt(idcantidadNumeroProducto);
    let totalCantidadNumeroInt = cantidadNumeroInt + -1;
    let totalCantidadNumeroTxt = totalCantidadNumeroInt.toString();
    document.getElementById("idcantidadNumeroProducto").innerHTML = totalCantidadNumeroTxt;
    let precioZapatos = 250000;
    let descuento = precioZapatos * 0.5;
    let precioTotal = (precioZapatos - descuento) * totalCantidadNumeroInt;
    if (cantidadNumeroInt == 0) {
        document.getElementById("idcantidadNumeroProducto").innerHTML = 0;
        precioTotal = (precioZapatos - descuento) * 0;
        console.log(precioTotal)
    }
    idPrecioTotal.innerHTML = "$" + precioTotal.toLocaleString('mx');

})
idPlus.addEventListener("click", function () {
    let idcantidadNumeroProducto = document.getElementById("idcantidadNumeroProducto").innerHTML;
    let cantidadNumeroInt = parseInt(idcantidadNumeroProducto);
    let totalCantidadNumeroInt = cantidadNumeroInt + 1;
    let totalCantidadNumeroTxt = totalCantidadNumeroInt.toString();
    document.getElementById("idcantidadNumeroProducto").innerHTML = totalCantidadNumeroTxt;
    console.log(totalCantidadNumeroTxt)
    let precioZapatos = 250000;
    let descuento = precioZapatos * 0.5;
    let precioTotal = (precioZapatos - descuento) * totalCantidadNumeroInt;
    if (cantidadNumeroInt == 50) {
        document.getElementById("idcantidadNumeroProducto").innerHTML = 50;
        precioTotal = (precioZapatos - descuento) * 50;
    }
    idPrecioTotal.innerHTML = "$" + precioTotal.toLocaleString('mx');

})


/* imgPredeterminada.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})
 */


borderFocus[0].classList.add("borderFocusActive");
imgMini[0].classList.add("img-opacity");
borderFocus[4].classList.add("borderFocusActive");
imgMini[4].classList.add("img-opacity");


let clickRight = 4;
let focusBehindRight = 0;
divRight.addEventListener("click", function () {
    let valorPosicionMini = document.getElementById("posicionImgMini").innerHTML;
    if (valorPosicionMini > 3 && valorPosicionMini < 8) {
        if (valorPosicionMini == 0) {
            clickRight = clickRight;
            focusBehindRight = focusBehindRight;
        } else {
            clickRight = valorPosicionMini;
            focusBehindRight = valorPosicionMini - 4;
            posicionImgMini.innerHTML = parseInt(clickRight) + 1;
        }
    }
    if (valorPosicionMini < 3) {
        if (valorPosicionMini == 0) {
            clickRight = clickRight;
            focusBehindRight = focusBehindRight;
        } else {
            focusBehindRight = valorPosicionMini;
            clickRight = parseFloat(valorPosicionMini) + 4;
            posicionImgMini.innerHTML = parseFloat(focusBehindRight) + 1;
        }
    }
    clickRight = parseFloat(clickRight) + 1;
    imgPredeterminada.classList.add("invisible")
    focusBehindRight = parseFloat(focusBehindRight) + 1;
    for (let i = 0; i <= 8; i++) {
        imgMain[i].classList.remove("focus-transition1");
        imgMain[i].classList.remove("focus-transition2");
        if (clickRight >= 8 || focusBehindRight >= 4) {
            clickRight = 4;
            focusBehindRight = 0;
        }
        if (i == clickRight || i == focusBehindRight) {
            borderFocus[i].classList.add("borderFocusActive");
            imgMini[i].classList.add("img-opacity");
            if (i < 4) {
                imgMain[i].classList.add("prueba");
                imgMain[i].classList.remove("img-box-invisible");
            }
            for (let u = 0; u <= imgMini.length; u++) {
                if (i > 3) {
                    imgMain[i].classList.remove("img-position-" + u);
                    imgMain[i].classList.add("img-position-4")
                }
            }
        } else {
            borderFocus[i].classList.remove("borderFocusActive");
            imgMini[i].classList.remove("img-opacity");
            if (i < 4) {
                imgMain[i].classList.remove("prueba");
                imgMain[i].classList.add("img-box-invisible");
            }
            for (let u = 0; u <= imgMini.length; u++) {
                if (i > 3) {
                    console.log(clickRight)
                    if (clickRight == 4) {
                        let contador = i - 0;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 5) {
                        let contador = i - 1;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 6) {
                        let contador = i - 2;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 7) {
                        let contador = i - 3;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    }
                }
            }
        }

    }
})

divLeft.addEventListener("click", function () {
    let valorPosicionMini = document.getElementById("posicionImgMini").innerHTML;
    if (valorPosicionMini > 3) {
        if (valorPosicionMini == 0) {
            clickRight = clickRight;
            focusBehindRight = focusBehindRight;
        } else {
            clickRight = valorPosicionMini;
            focusBehindRight = valorPosicionMini - 4;
            posicionImgMini.innerHTML = clickRight - 1;
        }
    }
    if (valorPosicionMini <= 3) {
        if (valorPosicionMini == 0) {
            clickRight = clickRight;
            focusBehindRight = focusBehindRight;
        } else {
            focusBehindRight = valorPosicionMini;
            clickRight = parseFloat(valorPosicionMini) + 4;
            posicionImgMini.innerHTML = focusBehindRight - 1;
        }
    }
    imgPredeterminada.classList.add("invisible")
    clickRight = clickRight - 1;
    focusBehindRight = focusBehindRight - 1;
    for (let i = 0; i <= 8; i++) {
        imgMain[i].classList.remove("focus-transition3");
        imgMain[i].classList.remove("focus-transition4");
        if (clickRight <= 2 || focusBehindRight <= -1) {
            clickRight = 7;
            focusBehindRight = 3;
        }
        if (i == clickRight || i == focusBehindRight) {
            borderFocus[i].classList.add("borderFocusActive");
            imgMini[i].classList.add("img-opacity");
            if (i < 4) {
                imgMain[i].classList.add("prueba");
                imgMain[i].classList.remove("img-box-invisible");
            }
            for (let u = 0; u <= imgMini.length; u++) {
                if (i > 3) {
                    imgMain[i].classList.remove("img-position-" + u);
                    imgMain[i].classList.add("img-position-4")
                }
            }
        } else {
            borderFocus[i].classList.remove("borderFocusActive");
            imgMini[i].classList.remove("img-opacity");
            if (i < 4) {
                imgMain[i].classList.remove("prueba");
                imgMain[i].classList.add("img-box-invisible");
            }
            for (let u = 0; u <= imgMini.length; u++) {
                if (i > 3) {
                    console.log(clickRight)
                    if (clickRight == 4) {
                        let contador = i - 0;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 5) {
                        let contador = i - 1;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 6) {
                        let contador = i - 2;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    } else if (clickRight == 7) {
                        let contador = i - 3;
                        imgMain[i].classList.remove("img-position-" + u);
                        imgMain[i].classList.add("img-position-" + contador);
                    }
                }
            }
        }

    }
})

for (let i = 0; i <= 3; i++) {
    imgMain[i].addEventListener("click", function () {
        contenidoFocus.classList.toggle("invisible")
    })
}
for (let i = 0; i <= imgMini.length; i++) {
    imgMini[i].addEventListener("click", function () {
        if (i > 3) {
            imgMain[i].classList.remove("hidden")
        }
        imgPredeterminada.classList.add("invisible")
        posicionImgMini.innerHTML = i;
        for (let x = 0; x <= imgMini.length; x++) {
            if (x == i || x == i + 4 || x == i - 4) {
                borderFocus[x].classList.add("borderFocusActive");
                imgMini[x].classList.add("img-opacity");
                if (x < 4) {
                    imgMain[x].classList.add("prueba");
                    imgMain[x].classList.remove("img-box-invisible");
                }
                for (let u = 0; u <= imgMini.length; u++) {
                    if (x > 3) {
                        imgMain[x].classList.remove("img-position-" + u);
                        imgMain[x].classList.add("img-position-4")
                    }
                }
            } else {
                imgMini[x].classList.remove("img-opacity");
                borderFocus[x].classList.remove("borderFocusActive");
                if (x < 4) {
                    imgMain[x].classList.remove("prueba");
                    imgMain[x].classList.add("img-box-invisible");
                }
                for (let u = 0; u <= imgMini.length; u++) {
                    if (x > 3) {
                        let valorPosicionMini = document.getElementById("posicionImgMini").innerHTML;
                        if (parseFloat(valorPosicionMini) <= 3) {
                            valorPosicionMini = parseFloat(valorPosicionMini) + 4;
                        }
                        console.log(valorPosicionMini)
                        if (valorPosicionMini == 4) {
                            let contador = x - 0;
                            imgMain[x].classList.remove("img-position-" + u);
                            imgMain[x].classList.add("img-position-" + contador);
                        } else if (valorPosicionMini == 5) {
                            let contador = x - 1;
                            imgMain[x].classList.remove("img-position-" + u);
                            imgMain[x].classList.add("img-position-" + contador);
                        } else if (valorPosicionMini == 6) {
                            let contador = x - 2;
                            imgMain[x].classList.remove("img-position-" + u);
                            imgMain[x].classList.add("img-position-" + contador);
                        } else if (valorPosicionMini == 7) {
                            let contador = x - 3;
                            imgMain[x].classList.remove("img-position-" + u);
                            imgMain[x].classList.add("img-position-" + contador);
                        }
                    }
                }
            }
        }
    });
}






/* 
imgMini1.addEventListener("click", function () {
    imgPredeterminada.classList.add("img-box-invisible")
    /*     idImgMain.setAttribute("src", "img/imgCarrito/image-product-1.jpg") */
/*     if (imgMini1.classList.contains("img-opacity")) {
        imgMini1.classList.remove("img-opacity");
        idFocus1.classList.remove("focus")
        idImgMain1.classList.remove("img-main-animation1")
    } else {  } 
idImgMain1.classList.add("img-main-animation1")
idImgMain2.classList.remove("img-main-animation2")
idImgMain3.classList.remove("img-main-animation3")
idImgMain4.classList.remove("img-main-animation4")
idImgMain1.classList.remove("img-box-invisible")
idImgMain2.classList.add("img-box-invisible")
idImgMain3.classList.add("img-box-invisible")
idImgMain4.classList.add("img-box-invisible")
imgMini1.classList.add("img-opacity");
idFocus1.classList.add("focus")
idFocus2.classList.remove("focus")
idFocus3.classList.remove("focus")
idFocus4.classList.remove("focus")
imgMini2.classList.remove("img-opacity");
imgMini3.classList.remove("img-opacity");
imgMini4.classList.remove("img-opacity");
})
imgMini2.addEventListener("click", function () {
imgPredeterminada.classList.add("img-box-invisible")
/* idImgMain.setAttribute("src", "img/imgCarrito/image-product-2.jpg") */
/*     if (imgMini2.classList.contains("img-opacity")) {
        imgMini2.classList.remove("img-opacity");
        idFocus2.classList.remove("focus")
        idImgMain2.classList.remove("img-main-animation2")
    } else {} 
idImgMain2.classList.add("img-main-animation2")
idImgMain3.classList.remove("img-main-animation3")
idImgMain4.classList.remove("img-main-animation4")
idImgMain1.classList.remove("img-main-animation1")
idImgMain2.classList.remove("img-box-invisible")
idImgMain1.classList.add("img-box-invisible")
idImgMain3.classList.add("img-box-invisible")
idImgMain4.classList.add("img-box-invisible")
imgMini2.classList.add("img-opacity");
idFocus2.classList.add("focus")
idFocus1.classList.remove("focus")
idFocus3.classList.remove("focus")
idFocus4.classList.remove("focus")
imgMini1.classList.remove("img-opacity");
imgMini3.classList.remove("img-opacity");
imgMini4.classList.remove("img-opacity");
})
imgMini3.addEventListener("click", function () {
imgPredeterminada.classList.add("img-box-invisible")
/* idImgMain.setAttribute("src", "img/imgCarrito/image-product-3.jpg") */
/*     if (imgMini3.classList.contains("img-opacity")) {
        imgMini3.classList.remove("img-opacity");
        idFocus3.classList.remove("focus")
        idImgMain3.classList.remove("img-main-animation3")
    } else {  } 
idImgMain3.classList.add("img-main-animation3")
idImgMain2.classList.remove("img-main-animation2")
idImgMain1.classList.remove("img-main-animation1")
idImgMain4.classList.remove("img-main-animation4")
idImgMain3.classList.remove("img-box-invisible")
idImgMain2.classList.add("img-box-invisible")
idImgMain1.classList.add("img-box-invisible")
idImgMain4.classList.add("img-box-invisible")
imgMini3.classList.add("img-opacity");
idFocus3.classList.add("focus")
idFocus2.classList.remove("focus")
idFocus1.classList.remove("focus")
idFocus4.classList.remove("focus")
imgMini2.classList.remove("img-opacity");
imgMini1.classList.remove("img-opacity");
imgMini4.classList.remove("img-opacity");
})
imgMini4.addEventListener("click", function () {
imgPredeterminada.classList.add("img-box-invisible")
/* idImgMain.setAttribute("src", "img/imgCarrito/image-product-4.jpg") */
/*     if (imgMini4.classList.contains("img-opacity")) {
        imgMini4.classList.remove("img-opacity");
        idFocus4.classList.remove("focus")
        idImgMain4.classList.remove("img-main-animation4")
    } else {  } 
idImgMain4.classList.add("img-main-animation4")
idImgMain2.classList.remove("img-main-animation2")
idImgMain3.classList.remove("img-main-animation3")
idImgMain1.classList.remove("img-main-animation1")
idImgMain4.classList.remove("img-box-invisible")
idImgMain2.classList.add("img-box-invisible")
idImgMain1.classList.add("img-box-invisible")
idImgMain3.classList.add("img-box-invisible")
imgMini4.classList.add("img-opacity");
idFocus4.classList.add("focus")
idFocus2.classList.remove("focus")
idFocus3.classList.remove("focus")
idFocus1.classList.remove("focus")
imgMini2.classList.remove("img-opacity");
imgMini3.classList.remove("img-opacity");
imgMini1.classList.remove("img-opacity");
}) */

