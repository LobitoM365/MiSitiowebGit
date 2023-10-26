
let hora = document.getElementById("hora")
let minuto = document.getElementById("minuto")
let segundo = document.getElementById("segundo")
let reloj = document.getElementById("reloj")
let divDate = document.getElementById("divDate")
let cronometro = document.getElementById("cronometro")
let despertador = document.getElementById("despertador")
let textTime = document.getElementById("textTime")
let h5Focus = document.querySelectorAll(".h5-head")
let spanTime = document.querySelectorAll(".span-time")
let circleColor = document.querySelectorAll(".circle-color")
let actionCronometro = document.getElementById("actionCronometro")
let dateID = document.getElementById("dateID");
let reloadId = document.getElementById("reloadId");
let circleAvance = document.getElementById("circleAvance");
let cloneReload = reloadId.cloneNode(true);
let secondsC = 0;
let secondL;
reloadId.remove()

let intervalSeconds;
let on = 1;
let timeHora = 0;
let timeMinuto = 0;
let timeSegundo = 0;
let continueC = 0;

for (let x = 0; x < h5Focus.length; x++) {

    h5Focus[x].addEventListener("click", function () {
        for (let u = 0; u < h5Focus.length; u++) {

            if (x == u) {
                h5Focus[x].classList.add("h5-focus")

            } else {
                h5Focus[u].classList.remove("h5-focus")
            }
        }
    })
}





function time(seconds, type, action, continueT, times, secondsC, secondL) {
    clearInterval(intervalSeconds);
    let limit;
    if (type == "cronometro") {
        limit = 100;
    } else {
        limit = 59;
    }
    function getHora() {
        hora.innerHTML = timeHora;
    }

    function getMinutes() {
        if (timeMinuto.toString().length == 1) {
            minuto.innerHTML = "0" + timeMinuto;
        } else {
            minuto.innerHTML = timeMinuto;
        }

    }
    function getSeconds() {
        if (timeSegundo.toString().length == 1) {
            segundo.innerHTML = "0" + timeSegundo;
        } else {
            segundo.innerHTML = timeSegundo;
        }

    }

    if (type === "reloj") {
        let date = new Date();
        timeHora = date.getHours();
        timeMinuto = date.getMinutes();
        timeSegundo = date.getSeconds();
        spanTime
    } else if (type === "cronometro") {
        if (continueT == 0) {
            timeHora = 0;
            timeMinuto = 0;
            timeSegundo = 0;
        }
    } else if (type === "temporalizador") {
        spanTime
        if (times) {
            timeHora = times[0];
            timeMinuto = times[1];
            timeSegundo = times[2];
        }
        if (timeHora.toString().length == 1) {
            timeHora = "0" + timeHora;
        } else if (timeHora == "0") {
            timeHora = "00";

        }
    }





    function intervalTime() {
        if (type === "temporalizador") {

            let valueC = secondsC;


            intervalSeconds = setInterval(() => {


                audio.play()

                timeSegundo = timeSegundo - 1;

                if (timeSegundo == -1) {
                    timeSegundo = 59;
                    timeMinuto = timeMinuto - 1;

                }

                if (timeMinuto == -1) {
                    timeMinuto = 59;
                    if (timeHora != 0) {

                        timeHora = timeHora - 1;
                        if (timeHora.toString().length == 1) {
                            timeHora = "0" + timeHora;
                        } else if (timeHora == "0") {
                            timeHora = "00";

                        }
                    }

                }
                getHora();
                getSeconds();
                getMinutes();
                valueC = (secondL - ((parseFloat(timeHora) * 3600) + (parseFloat(timeMinuto) * 60) + parseFloat(timeSegundo))) * secondsC;
                circleAvance.style.background = `conic-gradient( rgb(250, 113, 111)${valueC}deg,transparent 0deg)`
                if (timeSegundo == 0 & timeMinuto == 0 & timeHora == 0) {
                    audio.pause();
                    audio.setAttribute("src", "audio/despertador2.mp3")
                    audio.play();
                    clearInterval(intervalSeconds)
                    actionCronometro.style.display = "none"
                }
            }, seconds);
        } else {
            intervalSeconds = setInterval(() => {
                timeSegundo = timeSegundo + 1;
                if (timeSegundo == limit) {
                    timeSegundo = 0;
                    timeMinuto = timeMinuto + 1;
                    getSeconds();
                    getMinutes();
                }
                if (timeMinuto == 59) {
                    timeMinuto = 0;
                    timeHora = timeHora + 1;
                    getMinutes();
                    getHora();
                }

                getSeconds();
            }, seconds);
        }
    }

    getHora();
    getMinutes();
    getSeconds()


    if (action == 1) {
        intervalTime();
    }
}

time(1000, "reloj", 1)


cronometro.addEventListener("click", function () {
    secondsC = 0;
    circleColor[0].style.borderColor = ""
    actionCronometro.style.display = ""
    let reloadId = document.getElementById("reloadId");
    if (reloadId) {
        reloadId.remove()
    }
    let reload = cloneReload.cloneNode(true);

    reload.classList.add("reload")

    dateID.appendChild(reload)
    actionCronometro.classList.add("cronometro-focus")
    clearInterval(intervalSeconds)
    continueC = 0;
    time(100, "cronometro", 0, continueC)
    on = 1;
    divDate.classList.add("start")
    divDate.classList.remove("starD")
    divDate.classList.remove("pauseD")

    audio.pause();

    let reloadCronometro = document.querySelectorAll(".reload")

    reloadCronometro[0].addEventListener("click", function () {
        cronometro.click()
    })
    actionCronometro.innerHTML = "Iniciar"
})
actionCronometro.addEventListener("click", function () {
    if (divDate.classList.contains("start")) {
        if (on == 1) {
            on = 0;
            time(10, "cronometro", 1, continueC)
            actionCronometro.innerHTML = "Pausar"
        } else if (on == 0) {
            on = 1;
            continueC = 1;
            clearInterval(intervalSeconds)
            actionCronometro.innerHTML = "Continuar"
        }
    }

})
reloj.addEventListener("click", function () {
    secondsC = 0;
    circleColor[0].style.borderColor = ""
    let reloadId = document.getElementById("reloadId");
    if (reloadId) {
        reloadId.remove()
    }
    divDate.classList.remove("start")
    divDate.classList.remove("starD")
    actionCronometro.innerHTML = ""
    audio.pause();
    time(1000, "reloj", 1)
})

function configureDespertador() {
    for (let x = 0; x < 3; x++) {
        let input = document.createElement("input");
        input.classList.add("input-time")
        input.classList.add("text-time")
        input.value = "00";

        spanTime[x].innerHTML = "<input type='text' value='00' class='input-time text-time'> "
    }

    let inputTime = document.querySelectorAll(".input-time");
    let value = {
        "0": "00",
        "1": "00",
        "2": "00",
    };
    let valueS = {
        "0": "00",
        "1": "00",
        "2": "00",
    };

    for (let x = 0; x < inputTime.length; x++) {
        inputTime[x].addEventListener("input", function (event) {
            inputTime[x].value = inputTime[x].value.replace(/[a-zA-Z]/, "")
            value[x] = inputTime[x].value.toString();


            if (value[x].length == 3) {
                inputTime[x].value = value[x][1] + value[x][2]
            }

            if (value[x].length == 3) {
                valueS[x] = value[x][1] + value[x][2];
                if (x == 1 || x == 2) {
                    if (parseFloat(inputTime[x].value) > 59) {
                        valueS[x] = value[x][0] + value[x][2];
                        inputTime[x].value = 59
                        value[x] = "0" + 59
                    }

                }
            }



        })

        inputTime[x].addEventListener("keyup", function (event) {
            if (event.key === "Backspace" || event.key === "Delete") {
                inputTime[x].value = "0" + valueS[x][0]
                valueS[x] = "0" + valueS[x][0];
            }

        })
    }

}



despertador.addEventListener("click", function () {
    secondsC = 0;
    circleAvance.style.background = ""

    circleColor[0].style.borderColor = "white"
    audio.setAttribute("src", "audio/temporalizador.mp3")
    actionCronometro.style.display = ""

    audio.pause();
    let reloadId = document.getElementById("reloadId");
    if (reloadId) {
        reloadId.remove()
    }
    let reload = cloneReload.cloneNode(true);
    reload.classList.add("reload")
    dateID.appendChild(reload)

    divDate.classList.remove("start")
    clearInterval(intervalSeconds)
    spanTime
    actionCronometro.innerHTML = "Comenzar"
    divDate.classList.add("starD")
    actionCronometro.classList.add("cronometro-focus")
    configureDespertador();

    let reloadCronometro = document.querySelectorAll(".reload")

    reloadCronometro[0].addEventListener("click", function () {
        despertador.click()
    })
})
actionCronometro.addEventListener("click", function () {

    let inputTime = document.querySelectorAll(".input-time");
    let spanTime = document.querySelectorAll(".span-time");
    let times = []

    if (inputTime.length > 0) {
        times = [
            inputTime[0].value,
            inputTime[1].value,
            inputTime[2].value
        ]
        if (secondsC == 0) {
            secondsC = 360 / ((parseFloat(times[0]) * 3600) + (parseFloat(times[1]) * 60) + parseFloat(times[2]));
            secondL = ((parseFloat(times[0]) * 3600) + (parseFloat(times[1]) * 60) + parseFloat(times[2]));
        }

    } else {
        times = [
            parseFloat(spanTime[0].innerHTML),
            parseFloat(spanTime[1].innerHTML),
            parseFloat(spanTime[2].innerHTML)
        ]
        if (secondsC == 0) {
            secondsC = 360 / ((parseFloat(spanTime[0].innerHTML) * 3600) + (parseFloat(spanTime[1].innerHTML) * 60) + parseFloat(spanTime[2].innerHTML));
            secondL = ((parseFloat(spanTime[0].innerHTML) * 3600) + (parseFloat(spanTime[1].innerHTML) * 60) + parseFloat(spanTime[2].innerHTML));

        }

    }
    let seconds = secondsC

    if (times[0] == 0 && times[1] == 0 && times[2] == 0) {

    } else {
        if (divDate.classList.contains("starD")) {

            time(1000, "temporalizador", 1, "", times, secondsC, secondL);

            divDate.classList.remove("starD")
            divDate.classList.add("pauseD")
            actionCronometro.innerHTML = "Pausar"


        } else if (divDate.classList.contains("pauseD")) {
            audio.setAttribute("src", "audio/temporalizador.mp3")
            audio.pause();
            divDate.classList.add("starD")
            divDate.classList.remove("pauseD")
            actionCronometro.innerHTML = "Comenzar"

            time(1000, "temporalizador", 0, "");
        }
    }

})

// Guardar audio y cargar

/* const reader = new FileReader();
reader.readAsDataURL(audioFile.files[0]);
reader.onloadend = () => {
    const base64data = reader.result;
    localStorage.setItem('audio', base64data);
}
const base64data = localStorage.getItem('audio');
let audioX = document.createElement("audio")

audioX.setAttribute("controls", "true")
audioX.setAttribute("src", base64data)
document.body.appendChild(audioX) */