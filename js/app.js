let url=document.getElementById('imagen');
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
    url.style.visibility = 'hidden';
}

