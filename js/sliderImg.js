let img = document.querySelectorAll(".img");
let chevron = document.querySelectorAll(".chevron");



let contador = -1;
for (let u = 2; u < 5; u++) {
    for (let i = 0; i < chevron.length; i++) {
        chevron[i].addEventListener("click", function () {
            if (i == 1) {
                for (let x = 0; x < img.length; x++) {
                    console.log(x - 1)
                    img[x].classList.remove("transition" + x);
                    img[x].classList.remove("transition" + (x + 1));
                    img[x].classList.add("transition" + (x - 1));
                }
            }
            if (i == 0) {

                for (let x = 0; x < img.length; x++) {
                    img[x].classList.remove("transition" + x);
                    img[x].classList.add("transition" + (x + 1));
                    
                }
            }
        })
    }
}
