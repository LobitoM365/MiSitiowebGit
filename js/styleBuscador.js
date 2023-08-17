let imgAna = document.getElementById("imgAna");
let divDivIconsX = document.getElementById("divDivIconsX");
let divIconsX = document.getElementById("divIconsX");
let chat = document.getElementById("chat");
let contenidoChat = document.getElementById("contenidoChat");

imgAna.addEventListener("click", function(){
    divDivIconsX.style.display= "flex";
    imgAna.style.width= "0px";
    imgAna.style.opacity= 0;
    imgAna.style.zIndex= -9;
    imgAna.style.transition = "width 0.5s ease-in-out, opacity 0.2s ease-in-out ";
    chat.style.visibility= "visible";
    contenidoChat.style.height = "510px";
    chat.style.opacity= "1";

})
divIconsX.addEventListener("click", function(){
    imgAna.style.display= "block";
    imgAna.style.width= "";
    imgAna.style.opacity= 1;
    imgAna.style.transition = "width 0.25s ease-in-out,opacity 0.2s ";
    divDivIconsX.style.display= "none";
    chat.style.visibility= "hidden";
    chat.style.opacity= "0";
    chat.style.transition= "visibility 0.5s , opacity 0.5s";
    contenidoChat.style.height = "0px";
})

