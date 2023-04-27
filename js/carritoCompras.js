let imgMain = document.querySelectorAll(".imgMain");

let imgMini = document.querySelectorAll(".imgMini");
let borderFocus = document.querySelectorAll(".borderFocus");
let divRight = document.getElementById("divRight")
let divLeft = document.getElementById("divLeft")
let imgPredeterminada = document.getElementById("imgPredeterminada");
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



let clickRight = 0;
let focusBehindRight = 3;
divRight.addEventListener("click", function () {
    let valorPosicionMini = document.getElementById("posicionImgMini").innerHTML;
    if (valorPosicionMini > 3) {
        if (valorPosicionMini == 0) {
            clickRight = clickRight;
            focusBehindRight = focusBehindRight;
        } else {
            clickRight = valorPosicionMini;
            focusBehindRight = valorPosicionMini - 4;
            posicionImgMini.innerHTML = parseInt(clickRight) + 1;
        }
    }
    imgPredeterminada.classList.add("invisible")
    clickRight = clickRight + 1;
    focusBehindRight = focusBehindRight + 1;

    for (let i = 0; i <= 8; i++) {
        if (clickRight >= 8 || focusBehindRight >= 4) {
            clickRight = 4;
            focusBehindRight = 0;
        }
        if (i == clickRight || i == focusBehindRight) {
            borderFocus[i].classList.add("borderFocusActive");
            imgMain[i].classList.remove("img-box-invisible");
            imgMini[i].classList.add("img-opacity");
            imgMain[i].classList.add("prueba");
        } else {
            borderFocus[i].classList.remove("borderFocusActive");
            imgMain[i].classList.add("img-box-invisible");
            imgMini[i].classList.remove("img-opacity");
            imgMain[i].classList.remove("prueba");
        }
        console.log(i, clickRight, focusBehindRight)
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
    console.log(clickRight)
    imgPredeterminada.classList.add("invisible")
    clickRight = clickRight - 1;
    focusBehindRight = focusBehindRight - 1;
    for (let i = 0; i <= 8; i++) {
        if (clickRight <= 2 || focusBehindRight <= -1) {
            clickRight = 7;
            focusBehindRight = 3;
        }
        if (i == clickRight || i == focusBehindRight) {
            borderFocus[i].classList.add("borderFocusActive");
            imgMain[i].classList.remove("img-box-invisible");
            imgMini[i].classList.add("img-opacity");
            imgMain[i].classList.add("prueba");
        } else {
            borderFocus[i].classList.remove("borderFocusActive");
            imgMain[i].classList.add("img-box-invisible");
            imgMini[i].classList.remove("img-opacity");
            imgMain[i].classList.remove("prueba");
        }

    }
    console.log(i, clickRight)
})



for (let i = 0; i <= 3; i++) {
    imgMain[i].addEventListener("click", function () {
        contenidoFocus.classList.toggle("invisible")
    })
}


for (let i = 0; i <= imgMini.length; i++) {
    imgMini[i].addEventListener("click", function () {
        imgPredeterminada.classList.add("invisible")
        posicionImgMini.innerHTML = i;
        for (let x = 0; x <= imgMini.length; x++) {
            if (x == i || x == i + 4 || x == i - 4) {
                borderFocus[x].classList.add("borderFocusActive");
                imgMain[x].classList.remove("img-box-invisible");
                imgMini[x].classList.add("img-opacity");
                imgMain[x].classList.add("prueba");
                /*  imgPredeterminada.classList.add("invisible") */
            } else {
                imgMini[x].classList.remove("img-opacity");
                borderFocus[x].classList.remove("borderFocusActive");
                imgMain[x].classList.add("img-box-invisible");
                imgMain[x].classList.remove("prueba");

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

