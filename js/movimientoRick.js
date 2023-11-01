let divNaveRick = document.getElementById("divNaveRick");
let imgCandela = document.getElementById("imgCandela");
let cloneCandela = imgCandela.cloneNode(true);
imgCandela.remove()
let movimiento = 10;
let posicionLeft = 0;
let posicionTop = 0;
let on = 0;
let time = 40;
let keysPressed = {};
let turbo = 0;


console.log(imgCandela.scrollHeight, imgCandela.scrollWidth)



divNaveRick.style.top = `calc(50% - ${divNaveRick.scrollHeight / 2}px)`;
divNaveRick.style.left = `calc(50% - ${divNaveRick.scrollWidth / 2}px)`;
divNaveRick.style.transition = ` transition: all 0.1s;`;


document.body.addEventListener("keyup", function (event) {
    if (event.key == "ArrowLeft" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowUp") {

        delete keysPressed[event.key];
        if (Object.keys(keysPressed).length === 0) {
            clearInterval(interval);
            on = 0;
        }

    }
    if (event.code == "Space") {
        turbo = turbo + 1;

        if (turbo == 1) {
            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }
            let imgCandela = cloneCandela.cloneNode(true)
            imgCandela.style.width = "80px";
            imgCandela.style.left = `calc(0% - ${divNaveRick.scrollHeight / 3}px)`;
            imgCandela.style.top = `calc(0% + ${divNaveRick.scrollWidth / 4}px)`;
            divNaveRick.appendChild(imgCandela)
            time = 20;
        } else if (turbo == 2) {
            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }

            let imgCandela = cloneCandela.cloneNode(true)
            imgCandela.style.width = "120px";
            imgCandela.style.left = `calc(0% - ${divNaveRick.scrollHeight / 2}px)`;
            imgCandela.style.top = `calc(0% + ${divNaveRick.scrollWidth / 7}px)`;
            divNaveRick.appendChild(imgCandela)
            time = 5;
        } else if (turbo > 2) {
            let remove = document.getElementById("imgCandela")
            if (remove) {
                remove.remove()
            }
            turbo = 0
            time = 40;
        }

    }
});



document.body.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowUp") {
        keysPressed[event.key] = true;

        if (on == 0) {
            on = 1;
            interval = setInterval(() => {
                if (keysPressed["ArrowLeft"]) {
                    let auxLeft = posicionLeft + movimiento;
                    if (Math.ceil(((document.body.scrollWidth / 2) - (divNaveRick.scrollWidth / 2)) - auxLeft) > 0) {
                        posicionLeft += movimiento;

                        divNaveRick.style.left = `calc(50% - ${divNaveRick.scrollWidth / 2}px - ${posicionLeft}px)`;
                    }
                    auxLeft = posicionLeft;
                }
                if (keysPressed["ArrowDown"]) {
                    let auxTop = posicionTop - movimiento;

                    if (document.body.scrollHeight >= Math.ceil(((document.body.scrollHeight / 2) - (divNaveRick.scrollHeight / 2)) + (divNaveRick.scrollHeight) + (auxTop * -1))) {
                        posicionTop -= movimiento;
                        divNaveRick.style.top = `calc(50% - ${divNaveRick.scrollHeight / 2}px - ${posicionTop}px)`;
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

                    if (Math.ceil(((document.body.scrollHeight / 2) - (divNaveRick.scrollHeight / 2)) - auxTop) > 0) {
                        posicionTop += movimiento;
                        divNaveRick.style.top = `calc(50% - ${divNaveRick.scrollHeight / 2}px - ${posicionTop}px)`;
                    }

                    auxTop = posicionTop;

                }
            }, time);
        }
    }
});
