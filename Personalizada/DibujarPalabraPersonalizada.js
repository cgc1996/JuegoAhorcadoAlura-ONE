
var letras=[];
var palabraCorrecta = "";
var errores=7;


function dibujarLineas(){
   canvas.beginPath();

    let ancho= 800/palabraElegida.length;
    for(let i =0; i< palabraElegida.length; i++){
        canvas.moveTo(250+(ancho*i),740);
        canvas.lineTo(300+(ancho*i),740);
    }
    canvas.stroke();
    canvas.closePath();

}



function verificarLetraPulsada(tecla){
    if(letras.length < 1 || letras.indexOf(tecla)<0){
        letras.push(tecla)
        return false
    }else{
        letras.push(tecla)
        return true
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta+= palabraElegida[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter){
    if (palabraElegida.indexOf(letter)<=0){
        errores-=1;
        
    }
}

function escribirLetraCorrecta(index){
    canvas.font = "bold 52px Inter"
    canvas.lineWidth = 6;
    canvas.lineCap= "round";
    canvas.lineJoin= "round";
    canvas.fillStyle = "#0A3871";
    
    let ancho= 800/palabraElegida.length;
    canvas.fillText(palabraElegida[index],260+(ancho*index),720)
}

function EscribirLetraIncorrecta(letra, errorsLeft){
    canvas.font = "bold 40px Inter"
    canvas.lineWidth = 6;
    canvas.lineCap= "round";
    canvas.lineJoin= "round";
    canvas.fillStyle = "#0A3871";
    canvas.fillText(letra,335+(40*(10-errorsLeft)),810,40)
}