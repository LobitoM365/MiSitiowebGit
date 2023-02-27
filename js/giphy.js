
let computador = document.getElementById("menu1");
let tablet = document.getElementById("menu2");
let smartphone = document.getElementById("menu3");

computador.addEventListener("click", function () {
    viewport1.classList.remove("computador");
    viewport2.classList.add("tablet");
    viewport3.classList.add("smartphone");
});
tablet.addEventListener("click", function () {
    viewport1.classList.add("computador");
    viewport2.classList.remove("tablet");
    viewport3.classList.add("smartphone");
});
smartphone.addEventListener("click", function () {
    viewport1.classList.add("computador");
    viewport2.classList.add("tablet");
    viewport3.classList.remove("smartphone");
});

