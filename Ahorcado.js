var letrasCorrectas=0

//////////////////////////////////////////////

dibujarHorca()
dibujarLineas()


document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if(!verificarLetraPulsada(e.key)){
        if(palabraElegida.includes(letra)){
            adicionarLetraCorrecta(palabraElegida.indexOf(letra))
            for( let i=0; i<palabraElegida.length; i++){
                if(palabraElegida[i]===letra){
                    escribirLetraCorrecta(i)
                    letrasCorrectas++
                }     
            }
            if(letrasCorrectas==palabraElegida.length){
                dibujarGanaste();
                stop(document.onkeydown = (e));
            } 

        }else{
            adicionarLetraIncorrecta(letra);
            EscribirLetraIncorrecta(letra,errores);
            
            if(errores==6){
                dibujarCabeza();
            }
            if(errores==5){
                dibujarCuerpo();
            }
            if(errores==4){
                dibujarBrazoDer();
            }
            if(errores==3){
                dibujarBrazoIzq();
            }
            if(errores==2){
                dibujarPieDer();
            }   
            if(errores==1){
                dibujarPieIzq();
            }                     
            if(errores==0){
                dibujarCorteCuelloYOjos();
                dibujarPerdiste()
                stop(document.onkeydown = (e));
            }
                
        }
        
    }
    
};










