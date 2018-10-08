
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"

// Al declarar var scope = "local", estamos instanciando la variable
// a "local" y sobreescribiendo la anterior.

var prueba = "declarado fuera de la función";
function pruebas() {
    var prueba = "declarado dentro de la función";
    return prueba;
}
console.log(pruebas());
console.log(prueba);

