let imgSprite = document.getElementById("imgSprite");
let audio = document.getElementById("audio");
let imgLeft = 1;
let imgRight = 1;
let imgUp = 1;
let imgDown = 1;
let interval;
let on = 0;
let time = 100;
let direccion;


const imagenes = [

]

for(let x = 1; x <= 44; x++){
    imagenes.push(`img/sprites/extraterreste/bailando/sprite1/spriteLeft (${x}).png`)
}
for(let x = 1; x <= 45; x++){
    imagenes.push(`img/sprites/extraterreste/bailando/sprite1/spriteRight (${x}).png`)
}
for(let x = 1; x <= 173; x++){
    imagenes.push(`img/sprites/extraterreste/bailando/sprite1/spriteUp (${x}).png`)
}
for(let x = 1; x <= 113; x++){
    imagenes.push(`img/sprites/extraterreste/bailando/sprite1/spriteDown (${x}).png`)
}



async function precargarImagenes(imagenes) {
    for (const ruta of imagenes) {
        const imagen = new Image();
        imagen.src = ruta;
    }
}
await precargarImagenes(imagenes);

function getIMg(imgPosition) {
    if(direccion == "Up"){
        if(imgPosition > 172){
            imgUp = 1;
        }else if(imgPosition < 1){
            imgUp = 173
        }
    }
    if(direccion == "Down"){
        if(imgPosition > 112){
            imgDown = 1;
        }else if(imgPosition < 1){
            imgDown = 113
        }
    }
    if (imgPosition > 43) {
        imgLeft = 1;
        imgRight = 1;
    } else if (imgPosition < 1) {
        imgLeft = 44;
        imgRight = 44;
    }
    imgSprite.setAttribute("src", `img/sprites/extraterreste/bailando/sprite1/sprite${direccion} (${imgPosition}).png`)
    audio.play();
  
}


document.body.addEventListener("keydown", function (event) {


    if (event.key == "ArrowRight") {
        
        if (on == 0) {
            imgLeft = 1;
            imgUp = 1;
            imgDown = 1;
            direccion = "Right"
            interval = setInterval(() => {
                imgRight = imgRight + 1;
                getIMg(imgRight);
            }, time);
        }
    }
    if (event.key == "ArrowLeft") {
        direccion = "Left"
        
        if (on == 0) {
            imgRight = 1;
            imgUp = 1;
            imgDown = 1;
            interval = setInterval(() => {
                imgLeft = imgLeft + 1;
                getIMg(imgLeft);
            }, time);
        }
    }
    if (event.key == "ArrowUp") {
        direccion = "Up"
        if (on == 0) {
            imgLeft = 1;
            imgRight = 1;
            interval = setInterval(() => {
                imgUp = imgUp + 1;
                getIMg(imgUp);
            }, time);
        }
    }
    if (event.key == "ArrowDown") {
        direccion = "Down"
        if (on == 0) {
            imgLeft = 1;
            imgRight = 1;
            imgUp = 1;
            interval = setInterval(() => {
                imgDown = imgDown + 1;
                getIMg(imgDown);
            }, time);
        }
    }
    on = 1;
})
document.body.addEventListener("keyup", function (event) {
    if (event.key == "ArrowRight" || event.key == "ArrowLeft" || event.key == "ArrowUp" || event.key == "ArrowDown") {
        clearInterval(interval)
        audio.pause();
        on = 0;
    }

})