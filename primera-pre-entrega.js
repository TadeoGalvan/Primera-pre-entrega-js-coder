let i;

function comenzar(){
    let max=100;
    let min=1;
    let intentos=0;
    aleatorio=Math.random()*(max-min)+1;
    aleatorio=parseInt(aleatorio)
    console.log(aleatorio)    
    for (let i=0; i<=4;i++){
    let ingresado = prompt("Acerta al numero magico (del 1 al 100) y llevate un premio")
    if(ingresado==aleatorio){
        alert("Le pegaste, tu premio es corregir la primera pre entrega");
        break;
    }else if(ingresado !=100){
        alert("Te dije del 1 al 100")
    }else if(ingresado<aleatorio){
        alert("El numero es menor al NUMERO MAGICO.")
    }else if(ingresado>aleatorio){
        alert("El numero es mayor al NUMERO MAGICO")
    }


    if(i<=1){
        alert("Otro intento")
    }else if(i==2){
        let x=aleatorio/10
        x=parseInt(x)
        alert("Una ayudadita: la primera cifra es "+x)
        alert("Intentalo denuevo")
    }else if(i==3){
        alert("Cuidado papu, ultimo intento...")
    }else if(i==4){
        alert("Lo siento, se terminaros tus intentos. El numero era "+aleatorio)
        break;
    }
}
}

