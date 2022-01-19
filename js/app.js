let url=document.getElementById('imagen');
let horaM=document.getElementById('tiempo');
function mostrar(valor){
    switch(valor){
        case 1: url.src = "imagenes/jose.jfif";
            url.style.visibility = 'visible';
            break;
        case 2: url.src = "imagenes/smith.jfif";
            url.style.visibility = 'visible';
            break;
        case 3: url.src = "imagenes/miguel.jpeg";
            url.style.visibility = 'visible';
            break;
        case 4: url.src = "imagenes/leo.jfif";
            url.style.visibility = 'visible';
            break;
        case 5: url.src = "imagenes/ionata.jfif";
            url.style.visibility = 'visible';
            break;
        default:
            break;
    }
}
function quitar(){
    url.src ="imagenes/UNPRG.png";
}
setInterval(function(){
    tiempo= new Date();
    hors= tiempo.getHours();
    minutos =tiempo.getMinutes();
    segundos= tiempo.getSeconds();
    if (segundos<10) {
        segundos="0"+segundos;
    }
    if (minutos<10) {
        minutos="0"+minutos;
    }
    if (hors<10) {
        hors="0"+hors;
    }
    horaM.innerHTML= hors+":"+minutos+":"+segundos;
},1000);
