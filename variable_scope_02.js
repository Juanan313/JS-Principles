
/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local";
    myscope = "local";

    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           // => WTF ¿?

/*
 El primer cl devuelve un array con los valores asignados dentro de la función
mientras que los otros dos devuelven estos mismos valores pero de cada una de la variables
la primera de estas dos variables sobrescribe a la variable scope="global";
y myscope al no declararse como var o let no se le esta dando un ambito de uso a 
la variable
*/ 