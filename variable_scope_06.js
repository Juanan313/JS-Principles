
/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);
/*
    En este ejercicio podemos ver algo más acerca de lo del ejercicio anterior, y es que
    dentro de la misma función se crea la variable scope pero no se inicializa por eso
    cuando se muestra por pantalla su valor es Undefined, mientras que el siguiente log
    si muestra su inicialización y el último vuelve al global.
*/

// La variable esta definida a traves del cuerpo de la función
// throw the body function