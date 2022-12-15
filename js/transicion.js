let sirve = document.getElementById("sirve");

sirve.addEventListener("click", function () {
    if (sirve.classList.contains("box-31")) {
        sirve.classList.remove("box-31")
    } else {
        sirve.classList.add("box-31")
    }

})

let clickToogle = document.getElementById("clickToogle");
let divRedondoOff = document.getElementById("divRedondoOff")

clickToogle.addEventListener("click", function () {
    if (clickToogle.classList.contains("positionToogle") && divRedondoOff.classList.contains("divRedondoOn")) {
        clickToogle.classList.remove("positionToogle")
        divRedondoOff.classList.remove("divRedondoOn")
    } else {
        clickToogle.classList.add("positionToogle")
        divRedondoOff.classList.add("divRedondoOn")
    }

})