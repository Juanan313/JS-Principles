
/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);

/*
    Se puede acceder a todas las variables de esta función por qué han sido declaradas como
    var lo que permite el acceso a estas desde cualquier punto dentro de la  función en 
    la que han sido declaradas.
*/