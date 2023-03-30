let imgBox1 = document.getElementById("imgBox1");
let imgBox2 = document.getElementById("imgBox2");
let imgBox3 = document.getElementById("imgBox3");
let imgBox4 = document.getElementById("imgBox4");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");
let idFocus1 = document.getElementById("idFocus1")
let idFocus2 = document.getElementById("idFocus2")
let idFocus3 = document.getElementById("idFocus3")
let idFocus4 = document.getElementById("idFocus4")
let idImgMain = document.getElementById("idImgMain")

imgMini1.addEventListener("click", function () {
    /*     idImgMain.setAttribute("src", "img/imgCarrito/image-product-1.jpg") */
    if (imgMini1.classList.contains("img-opacity")) {
        imgMini1.classList.remove("img-opacity");
        idFocus1.classList.remove("focus")
        imgBox1.classList.remove("img-main-animation1")
    } else {
        imgBox1.classList.add("img-main-animation1")
        imgBox2.classList.remove("img-main-animation2")
        imgBox3.classList.remove("img-main-animation3")
        imgBox4.classList.remove("img-main-animation4")
        imgBox1.classList.remove("img-box-invisible")
        imgBox2.classList.add("img-box-invisible")
        imgBox3.classList.add("img-box-invisible")
        imgBox4.classList.add("img-box-invisible")
        imgMini1.classList.add("img-opacity");
        idFocus1.classList.add("focus")
        idFocus2.classList.remove("focus")
        idFocus3.classList.remove("focus")
        idFocus4.classList.remove("focus")
        imgMini2.classList.remove("img-opacity");
        imgMini3.classList.remove("img-opacity");
        imgMini4.classList.remove("img-opacity");
    }
})
imgMini2.addEventListener("click", function () {
    /* idImgMain.setAttribute("src", "img/imgCarrito/image-product-2.jpg") */
    if (imgMini2.classList.contains("img-opacity")) {
        imgMini2.classList.remove("img-opacity");
        idFocus2.classList.remove("focus")
        imgBox2.classList.remove("img-main-animation2")
    } else {
        imgBox2.classList.add("img-main-animation2")
        imgBox3.classList.remove("img-main-animation3")
        imgBox4.classList.remove("img-main-animation4")
        imgBox1.classList.remove("img-main-animation1")
        imgBox2.classList.remove("img-box-invisible")
        imgBox1.classList.add("img-box-invisible")
        imgBox3.classList.add("img-box-invisible")
        imgBox4.classList.add("img-box-invisible")
        imgMini2.classList.add("img-opacity");
        idFocus2.classList.add("focus")
        idFocus1.classList.remove("focus")
        idFocus3.classList.remove("focus")
        idFocus4.classList.remove("focus")
        imgMini1.classList.remove("img-opacity");
        imgMini3.classList.remove("img-opacity");
        imgMini4.classList.remove("img-opacity");

    }
})
imgMini3.addEventListener("click", function () {
    /* idImgMain.setAttribute("src", "img/imgCarrito/image-product-3.jpg") */
    if (imgMini3.classList.contains("img-opacity")) {
        imgMini3.classList.remove("img-opacity");
        idFocus3.classList.remove("focus")
        imgBox3.classList.remove("img-main-animation3")
    } else {
        imgBox3.classList.add("img-main-animation3")
        imgBox2.classList.remove("img-main-animation2")
        imgBox1.classList.remove("img-main-animation1")
        imgBox4.classList.remove("img-main-animation4")
        imgBox3.classList.remove("img-box-invisible")
        imgBox2.classList.add("img-box-invisible")
        imgBox1.classList.add("img-box-invisible")
        imgBox4.classList.add("img-box-invisible")
        imgMini3.classList.add("img-opacity");
        idFocus3.classList.add("focus")
        idFocus2.classList.remove("focus")
        idFocus1.classList.remove("focus")
        idFocus4.classList.remove("focus")
        imgMini2.classList.remove("img-opacity");
        imgMini1.classList.remove("img-opacity");
        imgMini4.classList.remove("img-opacity");

    }
})
imgMini4.addEventListener("click", function () {
    /* idImgMain.setAttribute("src", "img/imgCarrito/image-product-4.jpg") */
    if (imgMini4.classList.contains("img-opacity")) {
        imgMini4.classList.remove("img-opacity");
        idFocus4.classList.remove("focus")
        imgBox4.classList.remove("img-main-animation4")
    } else {
        imgBox4.classList.add("img-main-animation4")
        imgBox2.classList.remove("img-main-animation2")
        imgBox3.classList.remove("img-main-animation3")
        imgBox1.classList.remove("img-main-animation1")
        imgBox4.classList.remove("img-box-invisible")
        imgBox2.classList.add("img-box-invisible")
        imgBox1.classList.add("img-box-invisible")
        imgBox3.classList.add("img-box-invisible")
        imgMini4.classList.add("img-opacity");
        idFocus4.classList.add("focus")
        idFocus2.classList.remove("focus")
        idFocus3.classList.remove("focus")
        idFocus1.classList.remove("focus")
        imgMini2.classList.remove("img-opacity");
        imgMini3.classList.remove("img-opacity");
        imgMini1.classList.remove("img-opacity");
    }
})