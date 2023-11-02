let divImgSprite = document.getElementById("divImgSprite")
let imgSprite = document.getElementById("imgSprite")

let posicion = 0;
let interval;
let time = 50;
let direccion;
let on = 1;
let movimiento = 2;
let posicionLeft = 0;
let posicionTop = 0;
let marginI;



divImgSprite.style.left = `calc(${(50)}% - ${(imgSprite.scrollWidth / 2)}px)`
divImgSprite.style.top = `calc(${(50)}% - ${(imgSprite.scrollHeight / 2)}px)`


const imagenes = [

]

for (let x = 1; x <= 3; x++) {
    imagenes.push(`img/sprites/FiveNights/movimiento/sprite1/spriteLeft (${x}).png`)
}
for (let x = 1; x <= 3; x++) {
    imagenes.push(`img/sprites/FiveNights/movimiento/sprite1/spriteRight (${x}).png`)
}
for (let x = 1; x <= 3; x++) {
    imagenes.push(`img/sprites/FiveNights/movimiento/sprite1/spriteUp (${x}).png`)
}
for (let x = 1; x <= 3; x++) {
    imagenes.push(`img/sprites/FiveNights/movimiento/sprite1/spriteDown (${x}).png`)
}


async function precargarImagenes(imagenes) {
    for (const ruta of imagenes) {
        const imagen = new Image();
        imagen.src = ruta;
    }
}
await precargarImagenes(imagenes);


function getMovimiento(posicionI, posicionM) {
    if (posicionI > 3) {
        posicion = 2;
    }

    imgSprite.setAttribute("src", `img/sprites/FiveNights/movimiento/sprite1/sprite${direccion} (${posicion}).png`)
    if (direccion == "Up" || direccion == "Down") {
        marginI = "top"
        if(direccion == "Up"){
            if ((document.body.clientHeight / 2) - (divImgSprite.clientHeight / 2) + (divImgSprite.clientHeight) - (((document.body.clientHeight * posicionTop) / 100) * -1) /* + ((document.body.scrollHeight * movimiento) / 100) */ >= 0) {
                divImgSprite.style[marginI] = `calc(${(posicionM + 50)}% - ${(imgSprite.scrollHeight / 2)}px)`

            } else {
                posicionTop = posicionM * -1;
                divImgSprite.style[marginI] = `calc(${(posicionTop + 50)}% - ${(imgSprite.scrollHeight / 2)}px)`

            }
        }else{
            if ((document.body.clientHeight / 2) - (divImgSprite.clientHeight / 2) + (divImgSprite.clientHeight) + (((document.body.clientHeight * posicionTop) / 100) * -1) /* + ((document.body.scrollHeight * movimiento) / 100) */ >= 0) {
                divImgSprite.style[marginI] = `calc(${(posicionM + 50)}% - ${(imgSprite.scrollHeight / 2)}px)`

            } else {
                posicionTop = posicionM * -1;
                divImgSprite.style[marginI] = `calc(${(posicionTop + 50)}% - ${(imgSprite.scrollHeight / 2)}px)`

            }
        }


    } else if (direccion == "Left" || direccion == "Right") {
        marginI = "left"

        if (direccion == "Left") {
            if ((document.body.clientWidth / 2) - (divImgSprite.clientWidth / 2) + (divImgSprite.scrollWidth) - (((document.body.clientWidth * posicionLeft) / 100) * -1) /* + ((document.body.scrollWidth * movimiento) / 100) */ >= 0) {
                divImgSprite.style[marginI] = `calc(${(posicionM + 50)}% - ${(imgSprite.scrollWidth / 2)}px)`
            } else {
                posicionLeft = posicionM * -1;
                divImgSprite.style[marginI] = `calc(${(posicionLeft + 50)}% - ${(imgSprite.scrollWidth / 2)}px)`

            }
        } else {
            if ((document.body.clientWidth / 2) - (divImgSprite.clientWidth / 2) + (divImgSprite.scrollWidth) + (((document.body.clientWidth * posicionLeft) / 100) * -1) /* + ((document.body.scrollWidth * movimiento) / 100) */ >= 0) {
                divImgSprite.style[marginI] = `calc(${(posicionM + 50)}% - ${(imgSprite.scrollWidth / 2)}px)`
            } else {
                console.log(posicionLeft)
                posicionLeft = posicionM * -1;
                divImgSprite.style[marginI] = `calc(${(posicionLeft + 50)}% - ${(imgSprite.scrollWidth / 2)}px)`
            }
        }

    }

/*     console.log(document.body.clientHeight, divImgSprite.clientHeight, (document.body.clientHeight / 2) - (divImgSprite.clientHeight / 2) ,posicionTop, (document.body.clientHeight / 2) - (divImgSprite.clientHeight / 2) + (divImgSprite.clientHeight) - (((document.body.clientHeight * posicionTop) / 100) * -1) + ((document.body.scrollHeight * movimiento) / 100) >= 0  )  */
}

document.body.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft") {
        if (on == 1) {
            on = 0;
            direccion = "Left"
            interval = setInterval(() => {
                posicion = posicion + 1;

                posicionLeft = posicionLeft - movimiento;

                getMovimiento(posicion, posicionLeft)

            }, time);
        }

    }
    if (event.key == "ArrowRight") {
        if (on == 1) {
            on = 0;
            direccion = "Right"
            interval = setInterval(() => {
                posicion = posicion + 1;

                posicionLeft = posicionLeft + movimiento;
                getMovimiento(posicion, posicionLeft)

            }, time);
        }

    }
    if (event.key == "ArrowUp") {
        if (on == 1) {
            direccion = "Up"
            on = 0;
            interval = setInterval(() => {
                posicion = posicion + 1;


                posicionTop = posicionTop - movimiento;
                getMovimiento(posicion, posicionTop, 0)


            }, time);
        }

    }
    if (event.key == "ArrowDown") {
        if (on == 1) {
            direccion = "Down"
            on = 0;
            interval = setInterval(() => {
                posicion = posicion + 1;

                posicionTop = posicionTop + movimiento;
                getMovimiento(posicion, posicionTop)

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