const numero = 10;
let numeroB = '';
while(numero>=2){
    conciente = Math.trunc(numero/2);
    resto = numero %2;
    numeroB += resto.toString();
    numero = conciente
}
let auxiliar = numero.toString();
numeroB +=auxiliar
console.log(numeroB.reverse())  