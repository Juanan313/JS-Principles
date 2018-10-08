
/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope"
console.log(scope);                     // => "global scope"

/*
    Al hacer un log del resultado de la función la función nested devuelve la variable instanciada 
    dentro de si misma, por lo que no utiliza el valor de la funcion checkscope() y el segundo
    log muestra el valor del scope global
*/