function eliminarC (str1,str2){
    let l1 = str1.split('');
    let l2 = str2.split('');
    var out1 =[];
    var out2 =[];
    for (let i =0; i <l2.length; ++i){
        if (str1.indexOf(l1[i]) === str2.lastIndexOf(l1[i])){
            out1.push(l1[i]);
        }
        if (str2.indexOf(l2[i]) === str1.lastIndexOf(l1[i])){
            out2.push(l2[i]);
    }
    console.log(out1.join(''));
    console.log(out2.join(''));
}
}
console.log(eliminarC('Hello World!','Hola Mundo!'))
// Solucionar errores;