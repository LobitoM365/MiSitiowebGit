let divNaveRick = document.getElementById("divNaveRick");
let imgCandela = document.getElementById("imgCandela");
let divFondo = document.getElementById("divFondo");
let imgFondo = document.querySelectorAll(".img-fondo");
let foco = document.querySelectorAll(".foco");
let audio = document.getElementById("audio")
let timeOut;

let foco1 = foco[0].cloneNode(true);
let foco2 = foco[1].cloneNode(true);
foco[0].remove()
foco[1].remove()
let cloneCandela = imgCandela.cloneNode(true);
imgCandela.remove()
let movimiento = 10;
let posicionLeft = 0;
let posicionTop = 0;
let on = 0;
let time = 15;
let keysPressed = {};
let turbo = -1;
let interval;





divNaveRick.style.top = `calc(50% - ${divNaveRick.clientHeight / 2}px)`;
divNaveRick.style.left = `calc(50% - ${divNaveRick.scrollWidth / 2}px)`;
divNaveRick.style.transition = ` transition: all 0.1s;`;

function getInterval() {
    console.log(time)

    interval = setInterval(() => {

        if (keysPressed["ArrowLeft"]) {
            let auxLeft = posicionLeft + movimiento;
            if (document.body.scrollWidth >= Math.ceil((((document.body.scrollWidth / 2) - (divNaveRick.scrollWidth / 2)) + (divNaveRick.scrollWidth)) - (auxLeft * -1))) {
                posicionLeft += movimiento;
                divNaveRick.style.left = `calc(50% - ${divNaveRick.scrollWidth / 2}px - ${posicionLeft}px)`;
            }
            auxLeft = posicionLeft;
        }
        if (keysPressed["ArrowDown"]) {
            let auxTop = posicionTop - movimiento;

            if (document.body.clientHeight >= Math.ceil(((document.body.clientHeight / 2) - (divNaveRick.clientHeight / 2)) + (divNaveRick.clientHeight) + (auxTop * -1))) {
                posicionTop -= movimiento;
                divNaveRick.style.top = `calc(50% - ${divNaveRick.clientHeight / 2}px - ${posicionTop}px)`;
            }

            auxTop = posicionTop;

        }
        if (keysPressed["ArrowRight"]) {
            let auxRight = posicionLeft - movimiento;
            if (document.body.scrollWidth >= Math.ceil((((document.body.scrollWidth / 2) - (divNaveRick.scrollWidth / 2)) + (divNaveRick.scrollWidth)) + (auxRight * -1))) {
                posicionLeft -= movimiento;
                divNaveRick.style.left = `calc(50% - ${divNaveRick.scrollWidth / 2}px - ${posicionLeft}px)`;
            }


            auxRight = posicionLeft;
        }
        if (keysPressed["ArrowUp"]) {
            let auxTop = posicionTop + movimiento;

            if (Math.ceil(((document.body.clientHeight / 2) - (divNaveRick.clientHeight / 2)) - auxTop) > 0) {
                posicionTop += movimiento;
                divNaveRick.style.top = `calc(50% - ${divNaveRick.clientHeight / 2}px - ${posicionTop}px)`;
            }

            auxTop = posicionTop;

        }
    }, time);
}

document.body.addEventListener("keyup", function (event) {
    if (turbo != 2) {
        audio.pause()
    }

    if (event.key == "ArrowLeft" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowUp" || event.code == "Space") {

        delete keysPressed[event.key];

        if (Object.keys(keysPressed).length === 0) {
            clearInterval(interval);
            on = 0;
        }

    }
    if (event.key == "f") {
        let remove = document.querySelectorAll(".foco")
        if (remove[0] && remove[1]) {
            remove[0].remove()
            remove[1].remove()
        } else {
            divNaveRick.appendChild(foco1)
            divNaveRick.appendChild(foco2)

        }
    }
    if (event.code == "Space") {
        clearTimeout(timeOut)
        audio.load();

        for (let x = 0; x < imgFondo.length; x++) {
            imgFondo[x].setAttribute("src", "img/movimiento/rickAndMorthy/1/fondoUniverso.jpg")
        }
        if (turbo == -1) {
            turbo = 0;
        }
        turbo = turbo + 1;

        if (turbo == 1) {
            audio.pause()

            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }
            let imgCandela = cloneCandela.cloneNode(true)
            imgCandela.style.width = "80px";
            imgCandela.style.left = `calc(0% - ${divNaveRick.clientHeight / 3}px)`;
            imgCandela.style.top = `calc(0% + ${divNaveRick.scrollWidth / 4}px)`;
            divNaveRick.appendChild(imgCandela)
            time = 15;
            movimiento = 15;
            divFondo.style.animation = "moveFonda 2.5s linear infinite"

        } else if (turbo == 2) {
            for (let x = 0; x < imgFondo.length; x++) {
                imgFondo[x].setAttribute("src", "img/movimiento/rickAndMorthy/1/fondoVelocidad.png")
            }
            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }

            let imgCandela = cloneCandela.cloneNode(true)
            imgCandela.style.width = "120px";
            imgCandela.style.left = `calc(0% - ${divNaveRick.clientHeight / 2}px)`;
            imgCandela.style.top = `calc(0% + ${divNaveRick.scrollWidth / 7}px)`;
            divNaveRick.appendChild(imgCandela)
            divFondo.style.animation = "moveFonda 2s linear infinite"

            time = 7;
            audio.setAttribute("src", "audio/barreraSonido.mp3");
            audio.load()
            audio.play()
            timeOut = setTimeout(() => {
                audio.pause()
                if (turbo == 2) {
                    audio.setAttribute("src", "audio/naveMoving.mp3");
                    audio.load()

                    audio.play();
                }
            }, 3000);


        } else if (turbo > 2) {
            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }
            divFondo.style.animation = "moveFonda 5s linear infinite"
            audio.pause()

            turbo = 0
            time = 15;
            movimiento = 10;
        } else {
            audio.pause();


        }
        clearInterval(interval);
        getInterval();

    }
});



document.body.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowUp") {

        keysPressed[event.key] = true;
        if (turbo == -1) {
            divFondo.style.animation = "moveFonda 5s linear infinite"
            turbo = 0;
        }

        if (on == 0) {
            on = 1;

            getInterval();
        }

    }
});

/* const urlParams = window.location.search;
let params = new URLSearchParams(urlParams);
console.log(params.get("nombre"),params.get("id")) */