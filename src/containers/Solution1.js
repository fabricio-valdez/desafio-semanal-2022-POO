function Anagrama (x,y) {
    x = limpiar (x);
    y + limpiar (y);
    x = x.split ("").sort().join("");
    y = y.split ("").sort().join("");
}
function limpiar (n) {
    return n.replaceAll(" ","").toLowerCase()
}