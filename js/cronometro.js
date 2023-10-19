let date = new Date();
let hora = document.getElementById("hora")
let minuto = document.getElementById("minuto")
let segundo = document.getElementById("segundo")

let timeHora = date.getHours();
let timeMinuto = date.getMinutes();
let timeSegundo = date.getSeconds();


function getHora(){
    hora.innerHTML = timeHora;
}

function getMinutes(){
    minuto.innerHTML = timeMinuto;
}
function getSeconds(){
    segundo.innerHTML = timeSegundo;
}
getHora();

function intervalTime(){
    let interval = setInterval(() => {
        timeSegundo = timeSegundo + 1;
        getSeconds();
    }, 1000);
}
getHora();
getMinutes();
getSeconds()
intervalTime();



console.log(date)