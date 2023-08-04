let iconoSearchMobile = document.getElementById("iconoSearchMobile");
let menuBuscadorAndroid = document.getElementById("menuBuscadorAndroid");
let iconoXMenuMobile = document.getElementById("iconoXMenuMobile");
let divBuscadorMenuMobile = document.getElementById("divBuscadorMenuMobile");
let inputSearchMenuMobile = document.getElementById("inputSearchMenuMobile");

iconoSearchMobile.addEventListener("click", function () {
    menuBuscadorAndroid.classList.add("visible")
    divBuscadorMenuMobile.style.zIndex = "90";
    menuBuscadorAndroid.style.width = "100%";
    menuBuscadorAndroid.style.visibility = "visible";
    divBuscadorMenuMobile.style.transition = "";
    menuBuscadorAndroid.style.opacity = "1";
    menuBuscadorAndroid.style.transition = "width 1s";
})

iconoXMenuMobile.addEventListener("click", function () {
    menuBuscadorAndroid.classList.remove("visible")
    divBuscadorMenuMobile.style.zIndex = "";
    divBuscadorMenuMobile.style.transition = "z-index 1s";
    menuBuscadorAndroid.style.width = "220px";
    menuBuscadorAndroid.style.visibility = "hidden";
    menuBuscadorAndroid.style.opacity = "0";
    menuBuscadorAndroid.style.transition = "width 1s, visibility 0.7s, opacity 1s";
})





let img = document.querySelectorAll(".img");
let imgMobile = document.querySelectorAll(".img-mobile");
let imgPc = document.querySelectorAll(".img-pc");
let chevron = document.querySelectorAll(".chevron");
let punto = document.querySelectorAll(".punto");
let contador = document.getElementById("contador");
let posicionImagen = document.getElementById("posicionImagen");
let loader = document.getElementById("loader");

let windowWidth = window.innerWidth;




if (windowWidth > 600) {
    for (let x = 0; x < imgPc.length; x++) {
        if (imgMobile[x].classList.contains("img")) {
            imgMobile[x].classList.remove("img");
            imgPc[x].classList.add("img");
        } 
    }

}else{
    for (let x = 0; x < imgMobile.length; x++) {
        if (imgPc[x].classList.contains("img")) {
            imgPc[x].classList.remove("img");
            imgMobile[x].classList.add("img");
        } 
    }
}
img =  document.querySelectorAll(".img");
window.addEventListener("resize", function () {
    windowWidth = window.innerWidth;
    if (windowWidth > 600) {
        for (let x = 0; x < imgPc.length; x++) {
            if (imgMobile[x].classList.contains("img")) {
                imgMobile[x].classList.remove("img");
                imgPc[x].classList.add("img");
            } 
        }
    
    }else{
        for (let x = 0; x < imgMobile.length; x++) {
            if (imgPc[x].classList.contains("img")) {
                imgPc[x].classList.remove("img");
                imgMobile[x].classList.add("img");
    
            } 
        }
    }
    img = document.querySelectorAll(".img");
})




for (let i = 0; i < chevron.length; i++) {
    chevron[i].addEventListener("click", function () {
        if (i == 1) {
            let numeroPosicionImagen = parseFloat(posicionImagen.innerHTML) + 1;
            posicionImagen.innerHTML = numeroPosicionImagen;
            if (posicionImagen.innerHTML > 3) {
                posicionImagen.innerHTML = 1;
            }
            if (contador.innerHTML < 2) {
                contadorRight = parseFloat(contador.innerHTML) + 1;
                document.getElementById("contador").innerHTML = contadorRight;
            } else {
                document.getElementById("contador").innerHTML = 0;
            }
        }
        for (let x = 0; x < img.length; x++) {
            if (contador.innerHTML == x) {
                punto[x].classList.add("puntoFocus");
                img[x].classList.remove("transition" + (x - 1));
                img[x].classList.remove("transition" + (x - 2));
                img[x].classList.remove("transition" + x);
            } else {
                punto[x].classList.remove("puntoFocus");
                if (contador.innerHTML == 1) {
                    img[x].classList.remove("transition" + x);
                    img[x].classList.add("transition" + (x - 1));
                } else
                    if (contador.innerHTML == 2) {
                        img[x].classList.remove("transition" + (x - 1));
                        img[x].classList.add("transition" + (x - 2));
                    }
                    else
                        if (contador.innerHTML == 0) {
                            img[0].classList.add("transition0");
                            img[x].classList.remove("transition" + (x - 2));
                            img[x].classList.add("transition" + x);
                        }
            }
        }
        if (i == 0) {
            let numeroPosicionImagen = parseFloat(posicionImagen.innerHTML) - 1;
            posicionImagen.innerHTML = numeroPosicionImagen;
            if (posicionImagen.innerHTML < 1) {
                posicionImagen.innerHTML = 3;
            }
            if (contador.innerHTML > 0) {
                contadorRight = parseFloat(contador.innerHTML) - 1;
                document.getElementById("contador").innerHTML = contadorRight;
            } else {
                document.getElementById("contador").innerHTML = 2;
            }
        }
        for (let x = 0; x < img.length; x++) {
            if (contador.innerHTML == x) {
                img[x].classList.remove("transition" + (x - 1));
                img[x].classList.remove("transition" + (x - 2));
                img[contador.innerHTML].classList.add("transition0");
                img[x].classList.remove("transition" + x);
                punto[x].classList.add("puntoFocus");
            } else {
                punto[x].classList.remove("puntoFocus");
                if (contador.innerHTML == 1) {
                    img[x].classList.add("transition" + (x - 1));
                    img[x].classList.remove("transition" + (x - 2));
                } else
                    if (contador.innerHTML == 2) {
                        img[x].classList.add("transition" + (x - 2));
                        img[x].classList.remove("transition" + x);
                    }
                    else
                        if (contador.innerHTML == 0) {
                            img[0].classList.add("transition0");
                            img[x].classList.add("transition" + x);
                            img[x].classList.remove("transition" + (x - 1));
                        }
            }
        }
    })
}
for (let x = 0; x < punto.length; x++) {
    punto[x].addEventListener("click", function () {
        for (let u = 0; u < punto.length; u++) {
            document.getElementById("contador").innerHTML = x;
            if (x == u) {
                console.log(x)
                img[x].classList.remove("transition" + (x - 1));
                img[x].classList.remove("transition" + (x - 2));
                img[x].classList.remove("transition" + x);
                img[x].classList.add("transition0");
                punto[x].classList.add("puntoFocus");
            } else {
                punto[u].classList.remove("puntoFocus");
                if (x == 0) {
                    posicionImagen.innerHTML = 1;
                    img[u].classList.add("transition" + u);
                }
                if (x == 1) {
                    posicionImagen.innerHTML = 2;
                    img[u].classList.remove("transition" + u);
                    img[u].classList.add("transition" + (u - 1));
                }
                if (x == 2) {
                    posicionImagen.innerHTML = 3;
                    img[u].classList.remove("transition" + u);
                    img[u].classList.add("transition" + (u - 2));
                    img[u].classList.remove("transition" + (u - 1));
                }

            }
        }
    })
}

window.onload = function () {
    loader.classList.add("invisible-loader")
}
