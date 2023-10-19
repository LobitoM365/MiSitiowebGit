
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
function time(seconds, type, action, continueT) {
    clearInterval(intervalSeconds);
    let limit;
    if (type == "cronometro") {
        limit = 100;
    } else {
        limit = 60;
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
    console.log(type)
    if (type === "reloj") {
        let date = new Date();
        timeHora = date.getHours();
        timeMinuto = date.getMinutes();
        timeSegundo = date.getSeconds();
        divDate.classList.remove("date-focus")
    } else if (type === "cronometro") {
        if (continueT == 0) {
            timeHora = 0;
            timeMinuto = 0;
            timeSegundo = 0;
        }
        divDate.classList.add("date-focus")
    } else if(type === "temporalizador"){
        divDate.classList.remove("date-focus")
        timeHora = 0;
        timeMinuto = 2;
        timeSegundo = 1;
    }




    console.log(type, action, continueT)
    function intervalTime() {
        if (type === "temporalizador") {
            
            intervalSeconds = setInterval(() => {
                timeSegundo = timeSegundo - 1;
               
                if (timeSegundo == 0) {
                    timeSegundo = 10;
                    if(timeMinuto != 0){
                        timeMinuto = timeMinuto - 1;
                    }
                    getSeconds();
                    getMinutes();
                }
                if (timeMinuto == 0) {
                    timeMinuto = 0;
                    if(timeHora != 0){
                        timeHora = timeHora - 1;
                    }
                    
                    getMinutes();
                    getHora();
                }
                getSeconds();
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
                if (timeMinuto == 60) {
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
    clearInterval(intervalSeconds)
    continueC = 0;
    time(100, "cronometro", 0, continueC)
    on = 1;
    divDate.classList.add("start")
    actionCronometro.innerHTML = "Iniciar"
})
divDate.addEventListener("click", function () {
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
        console.log(on)
    }

})
reloj.addEventListener("click", function () {
    divDate.classList.remove("start")
    actionCronometro.innerHTML = ""
    time(1000, "reloj", 1)
})

function configureDespertador() {
    for(let x = 0; x < 3; x++){
        let input = document.createElement("input");
        input.classList.add("input-time")
        input.classList.add("text-time")
        input.value = "00";

        spanTime[x].innerHTML = "<input type='text' value='00' class='input-time text-time'> " 
    }

        let inputTime = document.querySelectorAll(".input-time");
        let value = {
            "0" : "00",
            "1" : "00",
            "2" : "00",
        };
        let valueS = {
            "0" : "00",
            "1" : "00",
            "2" : "00",
        };
    
        for(let x = 0; x < inputTime.length; x++){
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
    divDate.classList.remove("start")
    actionCronometro.innerHTML = "";
    clearInterval(intervalSeconds)
    
    actionCronometro.innerHTML = "Comenzar"
    divDate.classList.add("starD")
    configureDespertador();
})
divDate.addEventListener("click", function () {
    let inputTime = document.querySelectorAll(".input-time");
    console.log(inputTime[0].value)
/*     if (divDate.classList.contains("starD")) {
        time(1000, "temporalizador", 1)
    } */

})