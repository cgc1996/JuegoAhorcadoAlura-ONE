var canvas= document.getElementById("ahorcado").getContext("2d");

////DIBUJO MUÑECO
function dibujarHorca() {
  canvas.lineWidth = 15;
  canvas.lineCap= "round";
  canvas.lineJoin= "round";
  canvas.strokeStyle = "brown";
  
  canvas.beginPath();
  canvas.moveTo(450, 500);
  canvas.lineTo(800, 500);

  canvas.moveTo(500, 500);
  canvas.lineTo(500, 80);

  canvas.moveTo(500, 80);
  canvas.lineTo(675, 80);

  canvas.moveTo(675, 80);
  canvas.lineTo(675, 150);

  canvas.stroke();
}
  
function dibujarCabeza() {
  canvas.lineWidth = 5;
  canvas.lineCap= "round";
  canvas.lineJoin= "round";
  canvas.strokeStyle = "black";
  canvas.beginPath();
  canvas.arc(675, 185, 35, 0, 2 * Math.PI);
  canvas.stroke();
}

function dibujarCuerpo(){
  canvas.beginPath();
  canvas.moveTo(675, 220);
  canvas.lineTo(675, 350);
  canvas.stroke();
}

function dibujarBrazoDer() {
  canvas.beginPath();
  canvas.moveTo(675, 250);
  canvas.lineTo(640, 300);
  canvas.stroke();
  }

function dibujarBrazoIzq() {
  canvas.beginPath();
  canvas.moveTo(675, 250);
  canvas.lineTo(710, 300);
  canvas.stroke();
  }  

function dibujarPieDer() {
  canvas.beginPath();
  canvas.moveTo(675, 350);
  canvas.lineTo(640, 425);  
  canvas.stroke();
  }

function dibujarPieIzq() {
  canvas.beginPath();
  canvas.moveTo(675, 350);
  canvas.lineTo(710, 425);
  canvas.stroke();
  }

function dibujarCorteCuelloYOjos() {
  canvas.strokeStyle = "black";
  canvas.beginPath();
  canvas.moveTo(630, 230);
  canvas.lineTo(720, 230);
  
  canvas.lineWidth = 5;
  canvas.moveTo(655, 185);
  canvas.lineTo(665, 175);
  canvas.moveTo(665, 185);
  canvas.lineTo(655, 175);

  canvas.moveTo(685, 185);
  canvas.lineTo(695, 175);
  canvas.moveTo(695, 185);
  canvas.lineTo(685, 175);
  canvas.stroke()
  
}
//// ESCRIBIR GANASTE/PERDISTE
function dibujarGanaste(){
  canvas.beginPath()
  canvas.font = "bold 90px Inter"
  canvas.fillStyle = "coral";
  canvas.fillText("¡¡GANASTE!!",700,650);
  canvas.stroke()
  
}

function dibujarPerdiste(){
  canvas.beginPath()
  canvas.font = "bold 40px Inter"
  canvas.fillStyle = "coral";
  canvas.fillText("LA PALABRA ERA...     "+ palabraElegida+"    GAME OVER :(",200,650);
  canvas.stroke()
  
}