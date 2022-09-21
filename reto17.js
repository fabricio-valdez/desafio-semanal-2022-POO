class Mayus{
    putMayus(str){
        str = (str.split(" ")).map(function(i){return (i.replace(i[0],(i[0]).toUpperCase()))}).join(" ")
        console.log(str)
    }
}
let text = new Mayus
text.putMayus("desafio-semanal")