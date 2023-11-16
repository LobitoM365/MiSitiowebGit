let contar = document.getElementById("contar");
let valueInput = document.getElementById("valueInput");
let divStar = document.getElementById("divStar");
let chevronID = document.getElementById("chevronID");
let porcentajeID = document.getElementById("porcentajeID");
let valorID = document.getElementById("valorID");
let graficaID = document.getElementById("graficaID");
let limit = 5;
for(let x = 0; x < limit ; x++){
    let i = document.createElement("i")
    i.classList.add("fa-star")
    i.classList.add("fa-regular")
    divStar.appendChild(i)
}
let value = 0;

chevronID.addEventListener("mouseover", function(){
    if(value != -1){
        let porcentaje = ((value / 5) * 100).toFixed(1);
        porcentajeID.style.width  = porcentaje + "%"
        valorID.innerHTML = porcentaje + "%";
        graficaID.style.visibility = "visible";
        console.log(value, porcentaje)
    }
})

chevronID.addEventListener("mouseleave", function(){
    graficaID.style.visibility = "hidden";

})

contar.addEventListener("click", function () {
    console.log(valueInput.value, contar)
    
    if (valueInput.value > 5 || valueInput.value < 0) {
        value = -1
        divStar.innerHTML = "Debe ingresar una calificacion entre 0 y 5";
    } else if (isNaN(valueInput.value)) {
        value = -1
        divStar.innerHTML = "Debe ingresar una calificacion válida";
    } else {
        value = valueInput.value
        divStar.innerHTML = "";
        let decimal = 1 - (Math.ceil(valueInput.value) - valueInput.value).toFixed(1);
        let classE = "";
        let classM = "";
        if (decimal > 0 && decimal <= 0.3) {
            classE = "fa-regular"
        } else if (decimal > 0.3 && decimal <= 0.7) {
            classE = "fa-star-half-stroke"
        } else {
            classE = "fa-solid";
        }
        for (let x = 0; x < Math.floor(valueInput.value); x++) {
            let i = document.createElement("i")
            i.classList.add("fa-star")
            i.classList.add("fa-solid")
            divStar.appendChild(i)
        }
        let i = 0;
        if (Math.ceil(valueInput.value) - valueInput.value > 0) {
            i = 1
        }
        for (let x = 0; x < i; x++) {
            let i = document.createElement("i")
            if (classE == "fa-star-half-stroke") {
                i.classList.add("fa-solid")
            } else {
                i.classList.add("fa-star")
            }
            i.classList.add(classE)
            divStar.appendChild(i)
        }
        let limit = 5 - (Math.floor(valueInput.value) + i);
        for (let x = 0; x < limit; x++) {
            let i = document.createElement("i")
            i.classList.add("fa-star")
            i.classList.add("fa-regular")
            divStar.appendChild(i)

        }
    }
})