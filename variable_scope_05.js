
/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // WTF !!
    var scope = "local";
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // Prints "global"

/*
    Cómo no se le esta pasando en ningun momento la variable gloabl scope a la función
    y se esta declarando esta misma en la función no la busca fuera de esta y cuando ejecuta la
    línea del primer log antes de inicializarla, mientras como no ha ido a buscar fuera de la
    función no se ha ejecutado la inicialización anterior, y el segundo log devuelve el valor de
    local por que ya se ha instanciado. 
*/