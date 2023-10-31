let divImgSprite = document.getElementById("divImgSprite")
let imgSprite = document.getElementById("imgSprite")

let posicion = 0;
let interval;
let time = 100;
let direccion;
let on = 1;
let left;
let movimiento = 1;
let posicionLeft = 0;
let posicionTop = 0;
let marginI;



function getMovimiento(posicionI, posicionM) {
    if (posicionI > 3) {
        posicion = 2;
    }

    imgSprite.setAttribute("src", `img/sprites/FiveNights/movimiento/sprite1/sprite${direccion} (${posicion}).png`)
    if (direccion == "Up" || direccion == "Down") {
        marginI = "top"

    } else if (direccion == "Left" || direccion == "Right") {
        marginI = "left"
    }

    divImgSprite.style[marginI] = `calc(${(posicionM + 50)}% - ${(imgSprite.scrollHeight / 2)}px)`
}

document.body.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        if (on == 1) {
            on = 0;
            direccion = "Left"
            interval = setInterval(() => {
                posicion = posicion + 1;
                if (Math.ceil(( divImgSprite.offsetLeft / document.body.scrollWidth) * 100) > 1) {
                    posicionLeft = posicionLeft - movimiento;
                    getMovimiento(posicion, posicionLeft)
                }
            }, time);
        }

    }
    if (event.key == "ArrowRight") {
        if (on == 1) {
            direccion = "Right"
            on = 0;
            interval = setInterval(() => {
                posicion = posicion + 1;
                if (Math.ceil(( divImgSprite.offsetLeft / document.body.scrollWidth) * 100) < 95) {
                    posicionLeft = posicionLeft + movimiento;
                    getMovimiento(posicion, posicionLeft)
                }
            }, time);
        }

    }
    if (event.key == "ArrowUp") {
        if (on == 1) {
            direccion = "Up"
            on = 0;
            interval = setInterval(() => {
                posicion = posicion + 1;
                if(Math.ceil(( divImgSprite.offsetTop / document.body.scrollHeight) * 100) > 1){
                    
                    posicionTop = posicionTop - movimiento;
                    getMovimiento(posicion, posicionTop,0)
                }
                
            }, time);
        }

    }
    if (event.key == "ArrowDown") {
        if (on == 1) {
            direccion = "Down"
            on = 0;
            interval = setInterval(() => {
                posicion = posicion + 1;
                if ((Math.ceil(( divImgSprite.offsetTop / document.body.scrollHeight) * 100) < 89)) {
                    posicionTop = posicionTop + movimiento;
                    getMovimiento(posicion, posicionTop)
                }
            }, time);
        }

    }
})

document.body.addEventListener("keyup", function (event) {
    if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "ArrowUp" || event.key == "ArrowDown") {
        on = 1;
        clearInterval(interval)
    }
})