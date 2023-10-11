let search = document.getElementById("search");
let busquedas = document.getElementById("busquedas");

let keys = [
    "tipo",
    "descripcion",
    "color",
    "marca",
    "img",
    "precio",
    "ubicacion"
]
let arrayInfo = [
    {
        "tipo": "carro",
        "descripcion": "Mazda Cx-5 2.0 Touring Camioneta",
        "color": "rojo",
        "marca": "mazda",
        "img": "img/mercadoLibre/carro1.webp",
        "precio": "$90.000.000",
        "ubicacion": "Suba - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Citroen C3 1.6l Vti Visiodrive",
        "color": "gris",
        "marca": "citroen",
        "img": "img/mercadoLibre/carro2.webp",
        "precio": "$35.0000.000",
        "ubicacion": "Usaquén - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Peugeot 2008 1.2 Gt Line",
        "color": "rojo",
        "marca": "peugeot",
        "img": "img/mercadoLibre/carro3.webp",
        "precio": "$127.00.000",
        "ubicacion": "Usaquén - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Seat Leon 1.8 Fr Tsi Dsg 180 Hp",
        "color": "negro",
        "marca": "seat leon",
        "img": "img/mercadoLibre/carro4.webp",
        "precio": "$68.000.000",
        "ubicacion": "Usaquén - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Bmw M2 3.0 F22 Coupe",
        "color": "blanco",
        "marca": "bmw",
        "img": "img/mercadoLibre/carro5.webp",
        "precio": "$160.000.000",
        "ubicacion": "Teusaquillo - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Volkswagen New Beetle 2.5 Cabrio",
        "color": "rojo",
        "marca": "volkswagen",
        "img": "img/mercadoLibre/carro6.webp",
        "precio": "$58.000.000",
        "ubicacion": "Teusaquillo - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Mercedes-benz Clase Gle 3.0 Amg 53 4matic",
        "color": "blanco",
        "marca": "mercedes-benz",
        "img": "img/mercadoLibre/carro7.webp",
        "precio": "$485.000.000",
        "ubicacion": "Teusaquillo - Bogotá D.C."
    },
    {
        "tipo": "carro",
        "descripcion": "Volkswagen Fox 1.6 Xtreme",
        "color": "negro",
        "marca": "volkswagen",
        "img": "img/mercadoLibre/carro8.webp",
        "precio": "$48.000.000",
        "ubicacion": "Engativa - Bogotá D.C."
    }
]

let carro = document.querySelectorAll(".carro");
let templateCarro = carro[0].cloneNode(true);
carro[0].remove();

search.addEventListener("input", function () {
    search.value = search.value.replace("  ", " ")
})
search.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        busquedas.innerHTML = "";
        let searchValue = search.value;
        if (searchValue == "") {
        } else {
            for (let x = 0; x < arrayInfo.length; x++) {
                for (let u = 0; u < keys.length; u++) {
                    
                    if (arrayInfo[x][keys[u]].toLowerCase().trimEnd().includes(searchValue.toLowerCase().trimEnd())) {

                        let template = templateCarro.cloneNode(true);
                        let descripcion = template.querySelectorAll(".h4-descripcion");
                        let precio = template.querySelectorAll(".h4-precio");
                        let ubicacion = template.querySelectorAll(".h4-ubicacion");
                        let img = template.querySelectorAll(".img-carro");
                        img[0].setAttribute("src", arrayInfo[x]["img"])
                        descripcion[0].innerHTML = arrayInfo[x]["descripcion"];
                        precio[0].innerHTML = arrayInfo[x]["precio"];
                        ubicacion[0].innerHTML = arrayInfo[x]["ubicacion"];
                        busquedas.appendChild(template);
                        break;
                    }
                }
            }
        }

        let iconHeart = document.querySelectorAll(".icon-heart");
        let heart = document.querySelectorAll(".heart");
        for (let x = 0; x < iconHeart.length; x++) {
            console.log(x)
            iconHeart[x].addEventListener("click", function () {
                if (iconHeart[x].classList.contains("fa-solid")) {
                    iconHeart[x].classList.remove("fa-solid");
                    iconHeart[x].classList.add("fa-regular");
                    heart[x].style.display = "";
                } else {
                    iconHeart[x].classList.add("fa-solid");
                    iconHeart[x].classList.remove("fa-regular");
                    heart[x].style.display = "block";
                }
                console.log(iconHeart)
            })

        }
    }
})