let idImgMain1 = document.getElementById("idImgMain1");
let idImgMain2 = document.getElementById("idImgMain2");
let idImgMain3 = document.getElementById("idImgMain3");
let idImgMain4 = document.getElementById("idImgMain4");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");
let idFocus1 = document.getElementById("idFocus1");
let idFocus2 = document.getElementById("idFocus2");
let idFocus3 = document.getElementById("idFocus3");
let idFocus4 = document.getElementById("idFocus4");
let idImgMain = document.getElementById("idImgMain");
let imgPredeterminada = document.getElementById("imgPredeterminada");
let idMinus = document.getElementById("idMinus");
let idPlus = document.getElementById("idPlus");
let idPrecioTotal = document.getElementById("idPrecioTotal");
let idcantidadNumero = document.getElementById("idcantidadNumero");


imgMini1.addEventListener("click", function () {
    imgPredeterminada.classList.add("img-box-invisible")
    /*     idImgMain.setAttribute("src", "img/imgCarrito/image-product-1.jpg") */
    /*     if (imgMini1.classList.contains("img-opacity")) {
            imgMini1.classList.remove("img-opacity");
            idFocus1.classList.remove("focus")
            idImgMain1.classList.remove("img-main-animation1")
        } else {  } */
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
        } else {} */
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
        } else {  } */
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
        } else {  } */
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
    idPrecioTotal.innerHTML = "$" + precioTotal.toLocaleString('mx') ;

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
    idPrecioTotal.innerHTML = "$" + precioTotal.toLocaleString('mx') ;

})

