let img = document.querySelectorAll(".img");
let chevron = document.querySelectorAll(".chevron");
let contador = document.getElementById("contador");



for (let i = 0; i < chevron.length; i++) {

    chevron[i].addEventListener("click", function () {


        if (i == 1) {

            if (contador.innerHTML < 2) {
                contadorRight = parseFloat(contador.innerHTML) + 1;
                document.getElementById("contador").innerHTML = contadorRight;
                console.log(contadorRight)
            } else

                document.getElementById("contador").innerHTML = 0;
        }
        for (let x = 0; x < img.length; x++) {
            if (contador.innerHTML == x) {

                img[x].classList.remove("transition" + (x - 1));
                img[x].classList.remove("transition" + (x - 2));
                
                img[x].classList.remove("transition" + x);


            } else {

                if (contador.innerHTML == 1) {
                    img[x].classList.remove("transition" + x);
                    img[x].classList.add("transition" + (x - 1));
                } else
                    if (contador.innerHTML == 2) {
                        img[x].classList.remove("transition" + (x - 1));
                        img[x].classList.add("transition" + (x - 2));
                    }
                    else
                        if (contador.innerHTML == 0) {
                            img[0].classList.add("transition0");
                            img[x].classList.remove("transition" + (x - 2));
                            img[x].classList.add("transition" + x);
                        }
            }


        }
        if (i == 0) {
            if (contador.innerHTML > 0) {
                contadorRight = parseFloat(contador.innerHTML) - 1;
                document.getElementById("contador").innerHTML = contadorRight;
            } else {
                document.getElementById("contador").innerHTML = 2;
            }
          
        } for (let x = 0; x < img.length; x++) {
            if (contador.innerHTML == x) {

                img[x].classList.remove("transition" + (x - 1));
                img[x].classList.remove("transition" + (x - 2));
                img[contador.innerHTML].classList.add("transition0");
                img[x].classList.remove("transition" + x);


            } else {

                if (contador.innerHTML == 1) {
                    img[x].classList.add("transition" + (x - 1));
                    img[x].classList.remove("transition" + (x - 2));
                } else
                    if (contador.innerHTML == 2) {
                        img[x].classList.add("transition" + (x - 2));
                        img[x].classList.remove("transition" + x);

                    }
                    else
                        if (contador.innerHTML == 0) {
                            img[0].classList.add("transition0");
                            img[x].classList.add("transition" + x);
                            img[x].classList.remove("transition" + (x - 1));
                        }
            }


        }

    })
}

