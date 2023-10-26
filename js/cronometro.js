
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
let actionCronometro = document.getElementById("actionCronometro")
let dateID = document.getElementById("dateID");
let reloadId = document.getElementById("reloadId");
let cloneReload = reloadId.cloneNode(true)
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





function time(seconds, type, action, continueT, times) {
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


            intervalSeconds = setInterval(() => {

                if (timeSegundo == 0 & timeMinuto == 0 & timeHora == 0) {
                    audio.pause();
                    audio.setAttribute("src", "audio/despertador2.mp3")
                    audio.play();
                    clearInterval(intervalSeconds)
                    actionCronometro.style.display = "none"
                } else {
                    audio.play()

                    timeSegundo = timeSegundo - 1;

                    if (timeSegundo == -1) {
                        timeSegundo = 59;
                        if (timeMinuto != 0) {
                            timeMinuto = timeMinuto - 1;
                        }
                    }

                    if (timeMinuto == -1) {
                        if (timeHora != 0) {
                            timeMinuto = 59;

                            timeHora = timeHora - 1;


                        }

                    }
                    getHora();
                    getSeconds();
                    getMinutes();

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
        
    audio.pause();

    let reloadCronometro = document.querySelectorAll(".reload")

    reloadCronometro[0].addEventListener("click", function () {
        cronometro.click()
    })
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
            value[x] = inputTime[x].value.toString();
            if (value[x].length == 3) {
                valueS[x] = value[x][1] + value[x][2];
            }

            if (value[x].length == 3) {
                inputTime[x].value = value[x][1] + value[x][2]
            }
        })

        inputTime[x].addEventListener("keyup", function (event) {
            if (event.key === "Backspace") {
                inputTime[x].value = "0" + valueS[x][0]
                valueS[x] = "0" + valueS[x][0];
            }
        })
    }


}



despertador.addEventListener("click", function () {
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
    } else {
        times = [
            parseFloat(spanTime[0].innerHTML),
            parseFloat(spanTime[1].innerHTML),
            parseFloat(spanTime[2].innerHTML)
        ]
    }
    if (times[0] == 0 && times[1] == 0 && times[2] == 0) {

    } else {
        if (divDate.classList.contains("starD")) {

            time(1000, "temporalizador", 1, "", times);
            divDate.classList.remove("starD")
            divDate.classList.add("pauseD")
            actionCronometro.innerHTML = "Pausar"


        } else if (divDate.classList.contains("pauseD")) {
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