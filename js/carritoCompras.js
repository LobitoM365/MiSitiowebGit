let imgMain = document.querySelectorAll(".imgMain");

let imgMini = document.querySelectorAll(".imgMini");
let borderFocus = document.querySelectorAll(".borderFocus");
let divRight = document.getElementById("divRight")
let divLeft = document.getElementById("divLeft")




let idImgMain = document.getElementById("idImgMain");
let imgPredeterminada = document.getElementById("imgPredeterminada");
let idMinus = document.getElementById("idMinus");
let idPlus = document.getElementById("idPlus");
let idPrecioTotal = document.getElementById("idPrecioTotal");
let idcantidadNumero = document.getElementById("idcantidadNumero");
let contenidoFocus = document.getElementById("contenidoFocus");
let quitContenidoFocus = document.getElementById("quitContenidoFocus");
let fondoOscuro = document.getElementById("fondoOscuro");



/* imgPredeterminada.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})
 */

quitContenidoFocus.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})
fondoOscuro.addEventListener("click", function () {
    containVisibilidad(contenidoFocus)
})



for (let i = 0; i <= 3; i++) {
    imgMain[i].addEventListener("click", function () {
        contenidoFocus.classList.toggle("invisible")
    })
}

for (let i = 0; i <= imgMini.length; i++) {
    imgMini[i].addEventListener("click", function () {
        for (let x = 0; x <= 8; x++) {
            xd(x, i)
        }
    });


    divRight.addEventListener("click", function () {
        for (let x = 3; x <= 8; x++) {
            console.log(x, i)
            xd(x, i)
        }
    });

    divLeft.addEventListener("click", function () {
        for (let x = 3; x <= 8; x++) {
            console.log(x, i)
            x = x - 1;
            xd(x, i)
        }
    });
}

function xd(x, i) {

    if (x == i || x == i + 4 || x == i - 4) {
        borderFocus[x].classList.add("borderFocusActive");
        imgMain[x].classList.remove("img-box-invisible");
        imgMini[x].classList.add("img-opacity");

        /*  imgPredeterminada.classList.add("invisible") */
    } else {
        imgMini[x].classList.remove("img-opacity");
        borderFocus[x].classList.remove("borderFocusActive");
        imgMain[x].classList.add("img-box-invisible");

    }
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

